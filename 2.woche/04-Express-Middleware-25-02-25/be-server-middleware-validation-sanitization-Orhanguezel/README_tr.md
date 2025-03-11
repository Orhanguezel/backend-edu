# **Sunucu Middleware (Ara Katman Yazılımı)**  

Bu alıştırmada, bir kullanıcının **18 yaşından büyük olup olmadığını** kontrol etmek ve **kullanıcı giriş verilerini temizlemek** için Express Middleware yazacaksın.  

---

## **📌 Yapacağın İşlem**  

İki **POST** isteği kabul eden **sunucu uç noktaları** oluşturacaksın.  

Bu uç noktalar, kullanıcı verilerini içeren **JSON nesneleri** bekleyecek ve yazdığın **middleware fonksiyonları** tarafından işlenecek.  

---

### **📌 Örnek JSON Verisi**  

```json
{
  "firstName": "steve",
  "lastName": "stevenson",
  "age": "129",
  "fbw": "36",
  "profession": "Musician",
  "favoriteBands": [
    "Radiohead",
    "Motorhead",
    "Machinehead",
    "The talking heads"
  ],
  "email": "steve@metallica.com"
}
```

---

## **📌 Görevler**  

### **Görev 1 - Hazırlık**  

1. Projende **npm** başlat:  
   ```bash
   npm init -y
   ```
2. **Express.js** paketini yükle:  
   ```bash
   npm i express
   ```
3. **`server.js`** dosyasını oluştur.  

---

### **Görev 2 - Sunucunu Ayarla**  

`server.js` dosyasında **Express.js** kullanarak bir **sunucu oluştur**.  

---

### **Görev 3 - `validateUser` Uç Noktasını Oluştur**  

Bir uç nokta oluştur:  
1. **`/validateUser`** yolunu dinleyecek.  
2. **Sadece `POST` isteklerine cevap verecek.**  

---

### **Görev 4 - Middleware (Ara Katman) Oluştur**  

1. **Bir middleware fonksiyonu yaz**, şu anahtarların değerlerinin olup olmadığını kontrol et:  
   - `firstName`, `lastName`, `age`, `fbw`, `email`  

2. **Bir middleware fonksiyonu yaz**, kullanıcının **18 yaşından büyük olup olmadığını** kontrol et.  

3. Eğer herhangi bir middleware başarısız olursa, **bir hata mesajı içeren yanıt döndürmelidir.**  

   **Örnek Hata Yanıtı:**  

   ```json
   {
     "message": "Kullanıcıyı doğrulayamıyoruz. Kullanıcı 18 yaşından küçük."
   }
   ```

---

### **Görev 5 - Middleware’i `validateUser` Uç Noktasına Uygula**  

1. **Görev 4’te yazdığın tüm middleware’leri `validateUser` uç noktasına bağla.**  

2. Eğer istek tüm middleware’lerden başarılı bir şekilde geçerse, aşağıdaki başarı mesajını döndür:  

   **Örnek Başarı Yanıtı:**  
   ```json
   {
     "message": "Bu kullanıcı geçerli!"
   }
   ```

---

### **Görev 6 - `sanitizeUser` Uç Noktasını Oluştur**  

Bir uç nokta oluştur:  
1. **`/sanitizeUser`** yolunu dinleyecek.  
2. **Sadece `POST` isteklerine cevap verecek.**  

---

### **Görev 7 - Middleware (Ara Katman) Oluştur**  

1. **Bir middleware fonksiyonu yaz**, `firstName` ve `lastName` değerlerinin **ilk harfini büyük yap.**  

2. **Bir middleware fonksiyonu yaz**, `favoriteBands` dizisini **alfabetik olarak sırala.**  

3. **Bir middleware fonksiyonu yaz**, `age` ve `fbw` değerlerini **sayılara çevir.**  

---

### **Görev 8 - Middleware’i `sanitizeUser` Uç Noktasına Uygula**  

1. **Görev 7’de oluşturduğun tüm middleware’leri `sanitizeUser` uç noktasına bağla.**  

2. Eğer istek başarılı olursa, **düzenlenmiş verileri içeren yanıtı döndür.**  

   **Örnek Başarı Yanıtı:**  

   ```json
   {
     "firstName": "Steve",
     "lastName": "Stevenson",
     "age": 129,
     "fbw": 36,
     "profession": "Musician",
     "favoriteBands": [
       "Machinehead",
       "Motorhead",
       "Radiohead",
       "The Talking Heads"
     ],
     "email": "steve@steve.com"
   }
   ```