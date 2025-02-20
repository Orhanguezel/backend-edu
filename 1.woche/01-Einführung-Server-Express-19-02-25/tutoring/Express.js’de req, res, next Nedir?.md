# **Express.js’de `req`, `res`, `next` Nedir?**  

Express.js ile çalışırken en sık kullanılan üç parametre şunlardır:  
- **`req` (Request - İstek)** → İstemciden gelen isteği temsil eder.  
- **`res` (Response - Yanıt)** → Sunucunun istemciye döndüğü yanıttır.  
- **`next`** → Bir middleware fonksiyonundan sonra çalıştırılacak olan bir sonraki fonksiyonu çağırır.  

Bu üç parametre her zaman birlikte kullanılmaz. **Middleware fonksiyonlarında `next` kullanılır**, ancak **route (yönlendirme) fonksiyonlarında genellikle `req` ve `res` yeterlidir**.

---

## **1. `req` (Request - İstek) Nedir?**
`req` nesnesi, istemcinin (tarayıcı, Postman, fetch API vb.) sunucuya gönderdiği istekle ilgili tüm bilgileri içerir.

📌 **İçinde Bulunan Bazı Özellikler:**  
| **Özellik**  | **Açıklama** |
|-------------|-------------|
| `req.body` | POST veya PUT isteğinde gelen veriyi içerir. |
| `req.params` | URL içindeki dinamik parametreleri alır. (`/users/:id`) |
| `req.query` | URL’deki **query string** parametrelerini alır. (`?name=Ali&age=25`) |
| `req.headers` | İstekle birlikte gelen HTTP başlıklarını içerir. |
| `req.method` | İsteğin türünü döndürür (`GET`, `POST`, `PUT`, `DELETE`). |
| `req.url` | İsteğin geldiği URL’yi döndürür. |

📌 **Örnek Kullanım:**  
```javascript
app.get('/users/:id', (req, res) => {
    console.log(req.params); // { id: '5' }
    console.log(req.query); // ?age=25 => { age: '25' }
    console.log(req.headers); // HTTP başlıklarını gösterir
    res.send(`Kullanıcı ID: ${req.params.id}, Yaş: ${req.query.age}`);
});
```
📌 **İstek Gönder:**  
```bash
http://localhost:3000/users/5?age=25
```
📌 **Çıktı:**  
```
Kullanıcı ID: 5, Yaş: 25
```

---

## **2. `res` (Response - Yanıt) Nedir?**
`res` nesnesi, Express.js sunucusunun istemciye döndüğü yanıttır.

📌 **Sık Kullanılan `res` Metotları:**  
| **Metot**  | **Açıklama** |
|-------------|-------------|
| `res.send()` | İstemciye metin veya JSON gönderir. |
| `res.json()` | JSON formatında yanıt döndürür. |
| `res.status()` | HTTP durum kodunu ayarlar. |
| `res.redirect()` | Kullanıcıyı başka bir URL’ye yönlendirir. |
| `res.end()` | Yanıtı sonlandırır (veri döndürmeden kapatır). |

📌 **Örnek Kullanım:**  
```javascript
app.get('/products', (req, res) => {
    const products = [{ id: 1, name: "Laptop" }, { id: 2, name: "Telefon" }];
    res.status(200).json(products); // JSON formatında veri döndür
});
```
📌 **Çalıştırma:**  
```bash
http://localhost:3000/products
```
📌 **Çıktı (JSON formatında):**  
```json
[
    { "id": 1, "name": "Laptop" },
    { "id": 2, "name": "Telefon" }
]
```

---

## **3. `next` Nedir? Ne Zaman Kullanılır?**
`next` fonksiyonu, **middleware fonksiyonları** arasında geçiş yapmak için kullanılır. Bir middleware çalıştırıldıktan sonra bir sonraki middleware’e veya route’a geçmeyi sağlar.

✅ **Kullanım Alanları:**  
- **Kimlik doğrulama ve yetkilendirme**  
- **İstek verisini değiştirme (örneğin `req.body` manipülasyonu)**  
- **Hata yönetimi**  
- **Loglama (İstekleri kayıt altına almak)**  

📌 **Örnek: Basit Bir Middleware Kullanımı**  
```javascript
const logger = (req, res, next) => {
    console.log(`İstek alındı: ${req.method} ${req.url}`);
    next(); // Bir sonraki middleware veya route fonksiyonuna geç
};

app.use(logger); // Tüm isteklere uygulanır

app.get('/', (req, res) => {
    res.send("Ana Sayfa");
});
```
📌 **Çalıştırma:**  
```bash
http://localhost:3000/
```
📌 **Çıktı (Terminalde):**  
```
İstek alındı: GET /
```

Eğer **`next()` çağrılmazsa**, Express.js **bir sonraki middleware veya route’a geçemez ve isteği burada durdurur**.

---

## **4. Middleware Kullanımı (next ile Birden Fazla Middleware Zinciri)**
Middleware fonksiyonları **`next` ile birbirine bağlanabilir**.

📌 **Örnek: Middleware Zinciri Kullanımı**
```javascript
const authMiddleware = (req, res, next) => {
    const isLoggedIn = true;  // Kullanıcının giriş yapıp yapmadığını kontrol edelim
    if (!isLoggedIn) {
        return res.status(401).send("Yetkilendirme Hatası");
    }
    console.log("Kullanıcı doğrulandı.");
    next();  // Bir sonraki middleware veya route'a geç
};

app.use(authMiddleware); // Tüm isteklere uygula

app.get('/dashboard', (req, res) => {
    res.send("Admin Paneline Hoşgeldiniz!");
});
```
📌 **Çalıştırma:**  
```bash
http://localhost:3000/dashboard
```
📌 **Çıktı (Terminalde):**  
```
Kullanıcı doğrulandı.
```
📌 **Eğer Kullanıcı Yetkisiz Olsaydı:**  
```
401 Unauthorized - Yetkilendirme Hatası
```

---

## **5. `req`, `res`, `next` Üçü Her Zaman Birlikte mi Kullanılır?**
**Hayır!**  
`req` ve `res`, **route fonksiyonlarında** kullanılırken **next sadece middleware içinde** kullanılır.  

📌 **Örnek: Route Fonksiyonunda `req` ve `res` Kullanımı (next kullanılmaz)**  
```javascript
app.get('/hello', (req, res) => {
    res.send("Merhaba, Express!");
});
```
📌 **Örnek: Middleware Fonksiyonunda `req`, `res`, `next` Kullanımı**  
```javascript
const logRequest = (req, res, next) => {
    console.log(`İstek: ${req.method} ${req.url}`);
    next();  // Bir sonraki middleware veya route fonksiyonuna geç
};
app.use(logRequest);
```

Özetle:  
- **Route içinde `req` ve `res` kullanılır.**  
- **Middleware içinde `req`, `res` ve `next` kullanılır.**  
- **Eğer `next()` çağrılmazsa, sonraki işlem gerçekleşmez ve uygulama yanıt döndüremez.**  

---

## **6. Özet**
| Terim  | Açıklama |
|--------|---------|
| **`req` (Request)** | Kullanıcının sunucuya gönderdiği istektir. |
| **`res` (Response)** | Sunucunun kullanıcıya döndüğü yanıttır. |
| **`next`** | Middleware zincirini devam ettirmek için kullanılır. |

**Express.js’de Middleware Kullanımı:**  
- `next()` çağrılmazsa, uygulama bir sonraki adıma geçemez.  
- Middleware, **güvenlik, loglama, veri işleme gibi işlemler** için kullanılır.  
- Route işlemlerinde sadece `req` ve `res` yeterlidir.  

🚀 **Sonraki Ders:** **Express.js Middleware ve Gelişmiş Kullanım!** 🎯