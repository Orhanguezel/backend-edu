## **CORS (Cross-Origin Resource Sharing) ve `cors` NPM Paketi Kullanımı**

### **CORS Nedir?**
CORS (**Cross-Origin Resource Sharing**, **Farklı Kaynaklar Arası Paylaşım**) bir güvenlik mekanizmasıdır ve bir web uygulamasının **farklı bir kaynaktan (origin) veri talep etmesine izin verilip verilmediğini** belirler.

Varsayılan olarak, **Aynı Kaynak Politikası (Same-Origin Policy - SOP)** nedeniyle tarayıcılar yalnızca **aynı kaynaktan (same-origin)** gelen istekleri kabul eder. Ancak, modern web uygulamalarında farklı kaynaklar arasında API çağrıları yapmak gerekebilir. İşte burada **CORS devreye girer**.

---

### **`cors` NPM Paketi ile CORS Yönetimi**
Node.js içinde **Express.js ile CORS yönetimini kolaylaştırmak için** `cors` adlı bir middleware paketi kullanılır. Bu paket, sunucunun **hangi kaynaklardan (origin) gelen istekleri kabul ettiğini** belirlememizi sağlar.

---

## **📌 `cors` NPM Paketi Kurulumu**
Bu paketi yüklemek için aşağıdaki komutu çalıştırabilirsiniz:

```bash
npm install cors
```

Bu işlem, `cors` paketini Node.js projenize ekler.

---

## **📌 `cors` Paketinin Kullanımı**

### **1️⃣ Basit Kullanım (Tüm Kaynaklara CORS Açma)**
Aşağıdaki kod, Express.js uygulamanıza **CORS'u tüm kaynaklar için açar**:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Tüm kaynaklara izin ver

app.get('/products/:id', (req, res) => {
  res.json({ msg: 'Bu istek tüm originler için CORS ile etkinleştirildi!' });
});

app.listen(80, () => {
  console.log('CORS etkinleştirilmiş web sunucusu 80. portta çalışıyor');
});
```

📌 **Bu ayar, tüm domainlerden gelen isteklere izin verir (`Access-Control-Allow-Origin: *`).**  
**Ancak güvenlik açısından, yalnızca belirli origin’leri tanımlamak daha iyidir!**

---

### **2️⃣ Tek Bir Rota için CORS Açma**
Sadece belirli bir route (yol) için CORS açmak istiyorsanız:

```javascript
app.get('/products/:id', cors(), (req, res) => {
  res.json({ msg: 'Bu sadece bu route için CORS etkinleştirildi.' });
});
```

Bu kullanım, yalnızca `/products/:id` endpoint’i için CORS'u etkinleştirir.

---

### **3️⃣ Belirli Bir Origin İçin CORS Konfigüre Etme**
Sadece **belirli bir domain’den gelen isteklere izin vermek** için şu yapı kullanılır:

```javascript
const corsOptions = {
  origin: 'http://example.com', // Sadece example.com’a izin ver
  optionsSuccessStatus: 200 // Bazı eski tarayıcılarda (IE11, SmartTV’ler) 204 yerine 200 kullanmak gerekebilir
};

app.get('/products/:id', cors(corsOptions), (req, res) => {
  res.json({ msg: 'Bu sadece example.com için CORS etkinleştirildi.' });
});
```

Bu ayarla, **sadece `http://example.com`’dan gelen istekler kabul edilir**.

---

### **4️⃣ Dinamik Origin Tanımlama (Veritabanından Çekerek)**
Origin bilgisini **dinamik olarak bir veritabanından yüklemek** mümkündür:

```javascript
const corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins fonksiyonu veritabanından izin verilen originleri çeker
    db.loadOrigins((error, origins) => {
      callback(error, origins);
    });
  }
};

app.get('/products/:id', cors(corsOptions), (req, res) => {
  res.json({ msg: 'Bu dinamik olarak belirlenen originler için CORS etkinleştirildi.' });
});
```

Bu yöntem, örneğin **izin verilen domain’leri bir veritabanında saklamak** için kullanılabilir.

---

### **5️⃣ CORS Preflight İsteklerini Etkinleştirme**
Bazı HTTP istekleri, tarayıcı tarafından **preflight request (ön uçuş isteği) olarak adlandırılan bir `OPTIONS` isteğiyle** test edilir.  
Örneğin:
- **DELETE, PUT gibi metotlar**
- **Özel başlıklar (custom headers) kullanıldığında**

📌 **Preflight desteği eklemek için:**
```javascript
app.options('/products/:id', cors()); // OPTIONS isteklerine izin ver
app.delete('/products/:id', cors(), (req, res) => {
  res.json({ msg: 'Bu istek için CORS etkinleştirildi!' });
});
```

📌 **Tüm route'lar için preflight isteğini etkinleştirmek için:**
```javascript
app.options('*', cors()); // Tüm seçeneklere izin ver
```

❗ **Not:** `app.use(cors())` zaten preflight isteklerini otomatik olarak yönetir.

---

### **6️⃣ CORS’u Asenkron Olarak Konfigüre Etme**
Bazı durumlarda, **istek anında hangi origin’in izin verileceğini belirlemek** gerekebilir:

```javascript
const allowlist = ['http://example1.com', 'http://example2.com'];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // Gelen origin izin listesinde varsa, izin ver
  } else {
    corsOptions = { origin: false }; // İzin yok
  }
  callback(null, corsOptions); // Callback fonksiyonu hata ve seçenekleri alır
};

app.get('/products/:id', cors(corsOptionsDelegate), (req, res) => {
  res.json({ msg: 'Bu sadece belirlenen originler için CORS etkinleştirildi.' });
});
```

Bu yapı, **farklı istemciler için farklı CORS politikaları uygulamak** için kullanılabilir.

---

## **📌 `cors` Paketinin Yapılandırma Seçenekleri**
CORS middleware'i için çeşitli seçenekler bulunmaktadır:

| **Seçenek** | **Açıklama** |
|------------|------------|
| `origin` | Hangi origin’lerin erişim sağlayabileceğini belirler. (`true`, `false`, `"http://example.com"`, RegExp veya dizi olabilir) |
| `methods` | İzin verilen HTTP metodlarını tanımlar (Örn: `['GET', 'POST', 'DELETE']`) |
| `allowedHeaders` | Hangi başlıkların (headers) kullanılmasına izin verileceğini belirler |
| `exposedHeaders` | İstemci tarafından erişilebilen başlıkları tanımlar |
| `credentials` | Kimlik doğrulama bilgilerini (çerezler, token’lar) aktarmaya izin verir (`true` veya `false`) |
| `maxAge` | Preflight isteğinin kaç saniye önbelleğe alınacağını belirler |
| `optionsSuccessStatus` | Preflight OPTIONS isteği için döndürülecek HTTP durum kodunu belirler (Eski tarayıcılar için `200` yapmak gerekebilir) |

📌 **Varsayılan yapılandırma:**
```json
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
```

---

## **📌 Özet**
✔ `cors` paketi, Express.js uygulamalarında CORS yönetimini kolaylaştırır.  
✔ **Tüm domainlere izin vermek için** `app.use(cors())` kullanılır.  
✔ **Belirli domainlere izin vermek için** `{ origin: 'http://example.com' }` gibi seçenekler eklenir.  
✔ **Preflight isteklerini yönetmek için** `OPTIONS` isteğine yanıt verilir.  
✔ **Asenkron ve dinamik CORS konfigürasyonları** uygulanabilir.  

🚀 **Sonuç:** `cors` paketi, **API güvenliği ve erişim yönetimi** için oldukça önemli bir araçtır!