# **Middleware Kullanımı**  

Express, **yönlendirme (routing) ve middleware üzerine kurulu bir web framework'üdür** ve kendi başına çok minimal bir işlevselliğe sahiptir. **Bir Express uygulaması, temelde ardışık middleware fonksiyonlarından oluşur.**  

### **Middleware Nedir?**  
Middleware fonksiyonları, **istek nesnesine (`req`), yanıt nesnesine (`res`) ve uygulamanın istek-yanıt döngüsündeki bir sonraki middleware fonksiyonuna (`next`) erişimi olan fonksiyonlardır.**  
Genellikle bir sonraki middleware fonksiyonu, `next` adlı bir değişkenle tanımlanır.  

### **Middleware Fonksiyonlarının Yapabilecekleri:**  
- Herhangi bir kodu çalıştırabilir.  
- **İstek (`req`) ve yanıt (`res`) nesnelerinde değişiklik yapabilir.**  
- **İstek-yanıt döngüsünü sonlandırabilir.**  
- **Bir sonraki middleware fonksiyonunu çalıştırabilir.**  

⚠ **Eğer bir middleware fonksiyonu isteği sonlandırmazsa, `next()` fonksiyonunu çağırarak kontrolü bir sonraki middleware’e devretmelidir.**  
Aksi takdirde, **istek askıda kalır ve hiçbir yanıt gönderilmez.**  

---

## **Express'te Kullanılan Middleware Türleri:**  
Express uygulamaları şu tür middleware'leri kullanabilir:  

1️⃣ **Uygulama Seviyesinde Middleware (Application-Level Middleware)**  
2️⃣ **Rota Seviyesinde Middleware (Router-Level Middleware)**  
3️⃣ **Hata Yönetimi Middleware (Error-Handling Middleware)**  
4️⃣ **Dahili (Built-in) Middleware**  
5️⃣ **Üçüncü Taraf (Third-Party) Middleware**  

✅ **Uygulama ve rota seviyesindeki middleware'ler, isteğe bağlı olarak belirli bir mount path'e bağlanabilir.**  
✅ **Birden fazla middleware fonksiyonu bir araya getirilerek middleware sisteminde bir alt-yığın (sub-stack) oluşturulabilir.**  

---

## **1️⃣ Uygulama Seviyesinde Middleware**  
Bir **application-level (uygulama seviyesinde) middleware**, `app.use()` veya `app.METHOD()` fonksiyonları ile tanımlanır.  
Buradaki **METHOD**, middleware'in hangi HTTP metodunu ele aldığını belirtir (`GET`, `POST`, `PUT`, `DELETE` vb.).  

### **📌 Örnek: Her İstek İçin Çalışan Middleware**
Aşağıdaki middleware, uygulamaya gelen her istekte çalışır ve zaman damgasını (timestamp) konsola yazdırır.  

```js
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Zaman:', Date.now())
  next()
})
```

### **📌 Örnek: Belirli Bir Rotaya Bağlı Middleware**
Bu middleware yalnızca `/user/:id` rotasında çalışır ve **isteğin HTTP metodunu loglar.**  

```js
app.use('/user/:id', (req, res, next) => {
  console.log('İstek Türü:', req.method)
  next()
})
```

### **📌 Örnek: GET `/user/:id` İçin Middleware Kullanımı**
Aşağıdaki middleware yalnızca `/user/:id` rotasında **GET isteklerini** işler.  

```js
app.get('/user/:id', (req, res, next) => {
  res.send('Kullanıcı Bilgisi')
})
```

---

## **2️⃣ Middleware Alt-Yığınları (Middleware Sub-Stacks)**
Bir **middleware alt-yığını (sub-stack)** oluşturarak, belirli bir rota için bir dizi middleware çalıştırabiliriz.  

### **📌 Örnek: Bir Rotada Birden Fazla Middleware Kullanma**
Aşağıdaki örnekte, **`/user/:id` rotasına gelen istekler için iki middleware çalıştırıyoruz.**  

```js
app.use('/user/:id', (req, res, next) => {
  console.log('İstek URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('İstek Türü:', req.method)
  next()
})
```
📌 **Ne yapar?**  
✔ İlk middleware, gelen isteğin **URL’sini loglar.**  
✔ İkinci middleware, **HTTP metodunu loglar.**  
✔ `next()` çağrıldığı için istek işleme devam eder.  

---

## **3️⃣ Rota Seviyesinde Middleware (Router-Level Middleware)**
📌 **Bu middleware, `express.Router()` kullanılarak belirli bir router nesnesine bağlanır.**  

### **📌 Örnek: Router Seviyesinde Middleware Kullanımı**
```js
const express = require('express')
const app = express()
const router = express.Router()

// Router'a gelen her isteği loglayan middleware
router.use((req, res, next) => {
  console.log('Zaman:', Date.now())
  next()
})

// /user/:id rotasında çalışan middleware
router.use('/user/:id', (req, res, next) => {
  console.log('İstek URL:', req.originalUrl)
  next()
})

// Router'ı uygulamaya bağla
app.use('/', router)
```
📌 **Bu middleware sadece belirli bir router içinde çalışır.**  

---

## **4️⃣ Hata Yönetimi Middleware (Error-Handling Middleware)**
📌 **Hata yönetimi middleware’i, diğer middleware’lerden farklı olarak 4 parametre alır:**  
```js
(err, req, res, next)
```

### **📌 Örnek: Hata Yönetimi Middleware**
```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Bir hata oluştu!')
})
```
📌 **Ne yapar?**  
✔ Sunucuda bir hata oluştuğunda bu middleware devreye girer.  
✔ Konsola hata mesajını yazdırır.  
✔ Kullanıcıya **500 - Sunucu Hatası** döndürür.  

---

## **5️⃣ Dahili (Built-in) Middleware'ler**
📌 **Express’in kendi içinde gelen bazı dahili middleware'leri vardır.**  
📌 **Express 4.x sürümünden itibaren Connect bağımlılığı kaldırıldı ve middleware’ler bağımsız modüllere ayrıldı.**  

| **Middleware** | **Ne İşe Yarar?** |
|---------------|------------------|
| `express.static` | Statik dosya sunucusu sağlar (HTML, CSS, resimler vb.). |
| `express.json()` | Gelen istek gövdesini (`req.body`) JSON formatına dönüştürür. |
| `express.urlencoded()` | `application/x-www-form-urlencoded` verilerini işler. |

✅ **Örnek: `express.json()` Kullanımı**
```js
app.use(express.json()) // JSON verilerini işle
```

---

## **6️⃣ Üçüncü Taraf (Third-Party) Middleware Kullanımı**
📌 **Express’e ek işlevsellik kazandırmak için üçüncü taraf middleware’ler kullanılabilir.**  
📌 **Bu middleware’leri `npm` üzerinden yükleyebiliriz.**  

| **Middleware** | **Ne İşe Yarar?** |
|---------------|------------------|
| `cors` | Cross-Origin istekleri yönetir. |
| `morgan` | HTTP isteklerini loglar. |
| `helmet` | Güvenliği artırmak için başlıkları düzenler. |
| `cookie-parser` | Çerezleri (`cookies`) işler. |

### **📌 Örnek: `cookie-parser` Kullanımı**
```bash
npm install cookie-parser
```
```js
const cookieParser = require('cookie-parser')
app.use(cookieParser()) // Çerezleri işle
```

---

## **🚀 Özet**
✅ **Middleware, Express'in temel yapı taşlarından biridir.**  
✅ **Middleware’ler isteği ve yanıtı değiştirebilir, loglama ve güvenlik sağlayabilir.**  
✅ **4 temel middleware türü vardır:**  
- **Uygulama Seviyesinde Middleware** (`app.use()`)  
- **Rota Seviyesinde Middleware** (`router.use()`)  
- **Hata Yönetimi Middleware** (`err, req, res, next`)  
- **Built-in & Third-Party Middleware**  

💡 **Express ile gelişmiş uygulamalar oluşturmak için middleware’leri etkili kullanmak şarttır!** 🚀