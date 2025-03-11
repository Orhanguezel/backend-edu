# **Middleware Kullanarak API İsteklerini Loglama**  

Bir **sunucu logu**, sunucuda gerçekleşen tüm kayıtlı işlemleri içeren bir metin belgesidir. Uygulamanıza kimlerin, ne zaman ve nasıl eriştiği hakkında ayrıntılar sağlayabilir.

## **Görevler**  

Gerçek dünyadaki bir sunucuyu simüle etmek için, istemciden gelen istekleri işleyen bazı **sunucu uç noktaları** oluşturacaksınız. Gerçek dünyada, sunucu aynı zamanda sunucuya yapılan tüm istekleri takip eder. Bunu yapmak için bir **middleware (ara katman) fonksiyonu** yazacaksınız.

Dosya sistemine veri yazan bir yardımcı fonksiyon sizin için zaten yazıldı.

---

### **Görev 1 - Uç Noktalar (Endpoints)**  

`server.js` dosyasında aşağıdaki uç noktaları oluşturun. Bunlar herhangi bir değer döndürebilir.

- Metot: `GET`, yol: `"/travel"`
- Metot: `GET`, yol: `"/search"`
- Metot: `POST`, yol: `"/subscribe"`
- Metot: `POST`, yol: `"/createBooking"`
- Metot: `PATCH`, yol: `"/update"`

---

### **Görev 2 - Dokümantasyon**  

Aşağıdaki Express **istek (`request`)** nesnesi özelliklerini okuyup öğrenin:

1. [`req.ip`](http://expressjs.com/en/4x/api.html#req.ip) → **İstemcinin IP adresini alır.**  
2. [`req.method`](http://expressjs.com/en/4x/api.html#req.method) → **HTTP isteğinin metodunu döndürür (GET, POST, PATCH, vb.).**  
3. [`req.originalUrl`](http://expressjs.com/en/4x/api.html#req.originalUrl) → **İsteğin orijinal URL’sini döndürür.**  

---

### **Görev 3 - Middleware Oluşturma**  

Yeni bir dosya `logger.js` oluşturun. Bu dosyada:  

- `logger` adında bir middleware fonksiyonu oluşturun.  

---

### **Görev 4 - Middleware (Devamı)**  

`logger` middleware fonksiyonunun içinde:  

1. Dokümantasyonda öğrendiğiniz bilgileri kullanarak bir değişkene şu bilgileri içeren bir string atayın:  
   - **İstemcinin IP adresi**  
   - **HTTP isteğinin metodu**  
   - **Orijinal istek URL’si**  
   - Bilgileri `" | "` karakteriyle ayırabilirsiniz.  

   **Örneğin:**  
   ```text
   127.0.0.1 | GET | /travel
   ```

2. Değişkeninizi `helpers.js` dosyasında bulunan `appendToLogFile` yardımcı fonksiyonuna argüman olarak kullanarak çalıştırın. Bu işlem veriyi `log.txt` dosyasına kaydedecektir.  

3. Middleware fonksiyonunuzu dışa aktarın.  

> **Önemli!** `next()` fonksiyonu **fonksiyonun en son komutu olmalıdır!**  

---

### **Görev 5 - Middleware Kullanımı (`app.use()`)**  

Şimdi middleware’i kullanma zamanı! Middleware’i Express uygulamanızın middleware zincirine eklemelisiniz.  

`server.js` içinde:  

1. Middleware fonksiyonunuzu içe aktarın.  
2. Middleware’i Express uygulamanıza `app.use()` fonksiyonu ile bağlayın. **Bu kod, diğer uç noktalardan önce yazılmalıdır.**  

---

### **Görev 6 - Test Etme**  

- API’nizi test etmek için sunucu uç noktalarınıza bazı istekler gönderin. Bu, log dosyanız için veri oluşturacaktır.  
- `log.txt` dosyanızı inceleyin ve hangi verilerin kaydedildiğini kontrol edin!