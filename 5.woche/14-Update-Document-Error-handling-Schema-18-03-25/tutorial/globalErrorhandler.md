## **📌 Global Error Handling (Genel Hata Yönetimi)**
**Global hata yönetimi**, Express.js uygulamalarında **tüm hataları merkezi bir yerde toplamak ve yönetmek** için kullanılır.  
Bu sayede **her `try-catch` bloğunda hata yönetimi yazmak zorunda kalmazsın** ve **API daha temiz bir yapıya sahip olur**.

---

## **📌 1. Neden Global Error Handling Kullanılır?**
✅ **Kod tekrarını azaltır:** Hata yönetimini her fonksiyona eklemek yerine, merkezi bir middleware kullanırsın.  
✅ **Daha temiz kod:** Hata yönetimi fonksiyonları, `try-catch` bloklarını şişirmez.  
✅ **Tüm hataları tek noktadan kontrol etme imkanı sunar.**  
✅ **Özel hata türlerini kolayca yönetebilirsin (`ValidationError`, `CastError`, `MongoServerError` vs.).**  

---

## **📌 2. Global Error Middleware Nasıl Yazılır?**
Express.js’te global bir hata yönetim middleware’i şu şekilde yazılır:  

### **📌 `middlewares/errorMiddleware.js` – Global Hata Yönetimi**
```js
const errorHandler = (err, req, res, next) => {
  console.error("Fehler:", err);

  // Varsayılan hata kodu 500 (Internal Server Error)
  let statusCode = err.statusCode || 500;
  let message = err.message || "Interner Serverfehler!";

  // 🔹 Mongoose ValidationError
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Validierungsfehler!";
  }

  // 🔹 MongoDB ObjectId Hatası (Geçersiz ID Kullanımı)
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Ungültige ID!";
  }

  // 🔹 MongoDB Duplicate Key Hatası (Tekrar Eden Unique Alanlar)
  if (err.code === 11000) {
    statusCode = 400;
    message = "Diese E-Mail ist bereits registriert!";
  }

  res.status(statusCode).json({
    msg: message,
    error: err.errors || {},
  });
};

export default errorHandler;
```

✅ **Bu middleware şunları yapar:**  
- **MongoDB `ValidationError` → `400 - Validierungsfehler!`**
- **Geçersiz `ObjectId` (`CastError`) → `400 - Ungültige ID!`**
- **Tekrar eden `unique` değer (`Duplicate Key Error`) → `400 - Diese E-Mail ist bereits registriert!`**
- **Diğer tüm hatalar için `500 - Internal Server Error`**

---

## **📌 3. Express.js Uygulamasına Global Hata Middleware’i Ekleyelim**
Şimdi bu hata yönetimini Express uygulamasına ekleyelim.  
Bunu **server.js** dosyasına **en sona eklemelisin!**

### **📌 `server.js`**
```js
import express from "express";
import errorHandler from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());

// 🔹 API Rotaları Buraya Gelecek
// app.use("/api/users", userRoutes);
// app.use("/api/articles", articleRoutes);

// 🔹 Hata Middleware'lerini Kullan
app.use(errorHandler);

// 🔹 Sunucuyu Başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf Port ${PORT}`));
```
✅ **Bundan sonra herhangi bir hata oluşursa, otomatik olarak `errorMiddleware.js` çalışacaktır.**  

---

## **📌 4. `next()` Kullanarak Hata Fırlatma**
Bazı durumlarda **manuel olarak hata fırlatmak isteyebilirsin**.  
Bunu `next(new Error("Hata mesajı"))` ile yapabilirsin.

### **Örnek: Kullanıcı Bulunamadığında Hata Fırlatma**
```js
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new Error("Benutzer nicht gefunden!", 404)); // 🔹 Hata fırlat
    }
    res.json(user);
  } catch (error) {
    next(error); // 🔹 Hata yönetimine yönlendir
  }
};
```
✅ **Bu kod `next(error)` ile hata middleware’ine yönlendirecek.**  

---

## **📌 5. Özel Hata Sınıfı (`Custom Error Class`)**
Daha profesyonel bir yapı oluşturmak için **özel hata sınıfları** kullanabilirsin.

### **📌 `utils/AppError.js` – Özel Hata Sınıfı**
```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default AppError;
```

✅ **Artık API içinde istediğimiz gibi özel hatalar oluşturabiliriz!**

---

## **📌 6. Özel Hata Sınıfı Kullanımı**
### **Örnek: Kullanıcı Bulunamadığında `AppError` Kullanımı**
```js
import AppError from "../utils/AppError.js";

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new AppError("Benutzer nicht gefunden!", 404)); // 🔹 Özel hata fırlat
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};
```
✅ **Böylece hata yönetimi daha düzenli ve okunaklı olur!**  

---

## **📌 7. Özet**
| **Konu** | **Açıklama** |
|----------|-------------|
| **`errorMiddleware.js`** | Tüm hataları merkezi bir yerde yönetir. |
| **`next(error)`** | Hatayı middleware'e yönlendirir. |
| **`AppError` (Özel Hata Sınıfı)** | Daha profesyonel hata yönetimi sağlar. |

✅ **Bundan sonra Express.js uygulaman `try-catch` ile şişmeyecek ve tüm hatalar tek bir yerden yönetilecek!** 🚀