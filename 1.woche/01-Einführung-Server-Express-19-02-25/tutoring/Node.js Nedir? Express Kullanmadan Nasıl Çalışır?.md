# **Node.js Nedir? Express Kullanmadan Nasıl Çalışır?**  

## **1. Node.js Nedir?**  
Node.js, **JavaScript’in tarayıcı dışında çalışmasını sağlayan bir çalışma zamanı ortamıdır**.  

**📌 Özellikleri:**  
✅ **V8 Motoru ile Çalışır:** Chrome’un V8 JavaScript motorunu kullanır.  
✅ **Asenkron ve Olay Tabanlıdır:** Non-blocking (engellemesiz) çalışma modeli sunar.  
✅ **Tek İş Parçacığı (Single Threaded):** Ancak olay döngüsü (Event Loop) sayesinde yüksek performans sağlar.  
✅ **Sunucu Tarafında JavaScript:** Web sunucuları ve API’ler oluşturmak için kullanılır.  

---

## **2. Express.js Olmadan Node.js Nasıl Çalışır?**  
Express.js olmadan da **Node.js ile basit bir HTTP sunucusu oluşturabiliriz**. Ancak, Express olmadan yönlendirme (routing) ve middleware gibi özellikleri **manuel olarak yönetmemiz gerekir**.

---

## **3. Basit Bir Node.js HTTP Sunucusu Oluşturma**  

Node.js ile **`http` modülü** kullanarak bir web sunucusu oluşturabiliriz.

📌 **Adım 1: Basit Bir Sunucu Açma**  
Aşağıdaki kod, Express.js kullanmadan saf Node.js ile bir HTTP sunucusu oluşturur:

```javascript
const http = require('http'); // Node.js'in HTTP modülünü içe aktar

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Merhaba, bu bir Node.js sunucusudur!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
```

📌 **Terminalde Çalıştır:**  
```bash
node server.js
```

📌 **Tarayıcıda Aç:**  
👉 `http://localhost:3000/`  

📌 **Çıktı:**  
```
Merhaba, bu bir Node.js sunucusudur!
```

---

## **4. Node.js Sunucusuna Route (Yönlendirme) Ekleme**  
Express.js olmadan **farklı URL'lere göre yönlendirme yapmak** daha zahmetlidir. Ancak aşağıdaki gibi manuel olarak yapabiliriz.

📌 **Adım 2: Farklı Route'lar (Yollar) Ekleyelim**  
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Ana Sayfa</h1>');
    } else if (req.url === '/hakkimda') {
        res.end('<h1>Hakkımda Sayfası</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>404 Sayfa Bulunamadı</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
```

📌 **Tarayıcıda Aç:**  
- **Ana Sayfa:** `http://localhost:3000/`  
- **Hakkımda:** `http://localhost:3000/hakkimda`  
- **Hatalı Sayfa (404):** `http://localhost:3000/yanlis`  

---

## **5. API Yanıtları Dönmek (JSON Formatı ile)**
Bir **REST API** geliştirmek için Express.js yerine **saf Node.js kullanırsak**, JSON formatında yanıtları şu şekilde dönebiliriz:

📌 **Adım 3: JSON Formatında Veri Döndürme**  
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/api/products') {
        const products = [
            { id: 1, name: "Laptop", price: 1500 },
            { id: 2, name: "Telefon", price: 900 }
        ];
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Sayfa bulunamadı" }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
```

📌 **Tarayıcıda Aç:**  
👉 `http://localhost:3000/api/products`  

📌 **Çıktı:**  
```json
[
    { "id": 1, "name": "Laptop", "price": 1500 },
    { "id": 2, "name": "Telefon", "price": 900 }
]
```

---

## **6. Express Olmadan Middleware Yazmak**
Middleware, isteği işleyip yönlendiren bir ara yazılımdır. Express.js’de **`app.use(middleware)`** kullanılır, ancak saf Node.js ile middleware fonksiyonlarını manuel olarak yazmamız gerekir.

📌 **Adım 4: Basit Bir Middleware Örneği**  
```javascript
const http = require('http');

const logMiddleware = (req) => {
    console.log(`İstek Yapıldı: ${req.method} ${req.url}`);
};

const server = http.createServer((req, res) => {
    logMiddleware(req); // Middleware'i çağır

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Middleware çalıştı, yanıt döndü!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
```

📌 **Çıktı (Terminalde):**  
```
İstek Yapıldı: GET /
```

---

## **7. Express Olmadan Form Verisini İşleme**
Form veya **POST isteği** ile gelen veriyi okumak için `req.on('data')` olayını kullanmamız gerekir.

📌 **Adım 5: POST İsteği ile Veri Almak**  
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Veriyi birleştir
        });

        req.on('end', () => {
            console.log(`Gelen Veri: ${body}`);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Giriş yapıldı!');
        });
    } else {
        res.writeHead(404);
        res.end('Sayfa bulunamadı.');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
```

📌 **Postman ile Test Et (POST İsteği):**  
- URL: `http://localhost:3000/login`
- **Body (raw - JSON olarak gönder):**
```json
{ "username": "admin", "password": "1234" }
```

📌 **Terminalde Çıktı:**  
```
Gelen Veri: {"username":"admin","password":"1234"}
```

---

## **8. Neden Express.js Kullanıyoruz?**
Yukarıdaki örneklerde gördüğümüz gibi, **saf Node.js kullanarak web sunucusu oluşturmak mümkün**, ancak **çok fazla manuel işlem yapmak gerekiyor**.

📌 **Express.js’in Avantajları:**  
✅ Daha **az kod** ile daha fazla iş yapma  
✅ **Routing ve Middleware işlemlerini otomatikleştirme**  
✅ **Kolay JSON veri işleme**  
✅ Daha **düzenli ve modüler** bir yapı  

Örneğin, yukarıdaki tüm işlemler **Express.js ile sadece birkaç satır kod ile yapılabilir**.

---

## **Sonuç**
- **Node.js, JavaScript’in tarayıcı dışında çalışmasını sağlar.**
- **Express.js olmadan da sunucu oluşturulabilir, ancak manuel işlemler daha fazladır.**
- **HTTP modülü ile istekleri yönetebilir, JSON yanıtlar dönebiliriz.**
- **Express.js, Node.js’i daha verimli ve kolay hale getirir.**

🚀 **Sonraki Ders:** **Express.js ile Daha Kapsamlı Web Sunucusu Geliştirme!** 🎯