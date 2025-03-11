## **HTTP Yöntemlerini Kullanarak Bir Araba API’si Oluşturma** 🚗

Bu projede, **GET**, **POST**, **PATCH**, **DELETE** HTTP yöntemlerini kullanarak kendi **Araba API**’mizi oluşturacağız.  
Ayrıca, **istek parametreleriyle çalışmayı**, **farklı yanıt kodlarıyla cevap göndermeyi** de pratik edeceğiz.

---

## **Görevler** 🎯

Tüm sunucu kodunuzu **`server.js`** dosyasında, API uç noktalarını (endpoints) ise **`routes/cars.js`** dosyasında yazmanız bekleniyor.

---

### **📌 Görev 1 - Hazırlık Aşaması**
1. Projeyi başlatmak için `express` bağımlılığını (`npm install express`) yükleyin.
2. **`server.js`** dosyasını oluşturun (ana sunucu kodu burada olacak).
3. **`routes/cars.js`** dosyasını oluşturun ve uç noktaları burada tanımlayın.

---

### **📌 Görev 2 - Express Sunucusunu Kurun**
1. **3000 portunda** çalışan temel bir Express sunucusu oluşturun.
2. **`routes/cars.js` dosyasını `/cars` isteklerini yönetmek için yapılandırın**.

---

### **📌 Görev 3 - Arabalar Dizisini Tanımlayın**
- Aşağıdaki gibi en az **`id` ve `name` (isim)** içeren bir **araba dizisi** oluşturun:

```javascript
const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];
```

---

### **📌 Görev 4 - `/cars` Yolunda GET Endpoint Oluşturun**
Bu uç nokta (`GET /cars`):
- **HTTP 200 (OK)** durum kodu ile **tüm araba listesini JSON formatında döndürmelidir**.

---

### **📌 Görev 5 - `/cars/:id` Yolunda GET Endpoint Oluşturun**
Bu uç nokta (`GET /cars/:id`):
- **Belirtilen `id`’ye sahip arabayı JSON olarak döndürmelidir**.
- Eğer `id` geçersiz bir formatta (örneğin "Peynir" gibi bir metin) ise **400 (Bad Request)** döndürmelidir.
- Eğer belirtilen `id` araba dizisinde yoksa **404 (Not Found)** döndürmelidir.

---

### **📌 Görev 6 - `/cars/create` Yolunda POST Endpoint Oluşturun**
Bu uç nokta (`POST /cars/create`):
- Yeni bir **araba nesnesini diziye eklemeli**.
- **Eklenen araba nesnesini JSON formatında döndürmelidir**.
- **Yanıt kodu 200 (OK) olmalıdır**.

📌 **İstek Gövdesi (`Body`) Şu Formatta Olmalıdır:**
```json
{
  "id": 4,
  "name": "Renault"
}
```

---

### **📌 Görev 7 - `/cars/update/:id` Yolunda PATCH Endpoint Oluşturun**
Bu uç nokta (`PATCH /cars/update/:id`):
- **Belirtilen `id`’ye sahip arabayı güncellemelidir**.
- **Güncellenmiş tüm araba listesini JSON olarak döndürmelidir**.
- **Yanıt kodu 200 (OK) olmalıdır**.
- Eğer `id` geçersiz bir formatta ise **400 (Bad Request)** döndürmelidir.
- Eğer `id` bulunamazsa **404 (Not Found)** döndürmelidir.

---

### **📌 Görev 8 - `/cars/:id` Yolunda DELETE Endpoint Oluşturun**
Bu uç nokta (`DELETE /cars/:id`):
- **Belirtilen `id`’ye sahip arabayı silmelidir**.
- **Silindikten sonra geri kalan araba listesini JSON olarak döndürmelidir**.
- **Yanıt kodu 200 (OK) olmalıdır**.
- Eğer `id` geçersiz bir formatta ise **400 (Bad Request)** döndürmelidir.
- Eğer `id` bulunamazsa **404 (Not Found)** döndürmelidir.

---

🚀 **Bu görevleri tamamladığınızda, kendi temel Araba API’nizi oluşturmuş olacaksınız!** 🏎💨