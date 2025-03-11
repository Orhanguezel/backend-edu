# **Mongoose Alıştırmaları**  

Bu alıştırma, **Mongoose kullanarak bir MongoDB veritabanında temel işlemleri nasıl gerçekleştireceğimizi** öğrenmeye yöneliktir.  

---

## **Görevler**  

**[scores.json](./scores.json) dosyası**, bir arcade makinesindeki skorları içerir.  

### **Görev 1**  

1. Bağımlılıkları yükleyin:  
   ```bash
   npm i
   ```
2. Aşağıdaki dosyaları oluşturun:  
   - `db.js`  
   - `models.js`  
   - `write.js`  
   - `read.js`  

---

### **Görev 2**  

**Veritabanı yapılandırması ve bağlantısını yönetmek için `db.js` dosyasını kullanacağız.**  

**`db.js` içerisinde:**  

1. **MongoDB'ye bağlantı kuracak** `connect` adlı **asenkron bir fonksiyon** oluşturun.  
2. **Bağlantı mesajlarını** `console.log()` kullanarak terminale yazdırın.  
3. **`connect` fonksiyonunu dışa aktarın (export edin).**  

---

### **Görev 3**  

**`models.js` içerisinde:**  

1. **[scores.json](./scores.json) içindeki JSON verilerine uygun bir şema (Schema) oluşturun.**  
2. **Bu şema ile bir model (Model) oluşturun.**  
3. **Oluşturduğunuz modeli `Scores` olarak dışa aktarın.**  

---

### **Görev 4**  

**`write.js` içerisinde:**  

1. Aşağıdakileri içe aktarın:  
   - `connect` fonksiyonu  
   - `Scores` modeli  

2. **900 defa dönecek bir `for` döngüsü oluşturun.**  
3. **Her döngü iterasyonu için:**  
   - **3 harften oluşan rastgele bir string oluşturun.**  
     - Örnek: `"DAB"`, `"MDK"`  
   - **Rastgele bir tarih (milisaniye cinsinden) oluşturun.**  
     - Örnek: `1718870775478`, `1718871662675`  
   - **1 ile 1000 arasında rastgele bir puan (score) oluşturun.**  
     - Örnek: `390`, `113`  
   - **Bu değerleri kullanarak `Scores` modeli ile MongoDB’ye veri ekleyin.**  

---

### **Görev 5**  

**`read.js` içerisinde:**  

1. Aşağıdakileri içe aktarın:  
   - `connect` fonksiyonu  
   - `Scores` modeli  

2. **`Scores.find()` metodunu kullanarak aşağıdaki soruların yanıtlarını bulun:**  
   - **Bir oyuncu `1` puan aldı mı?**  
   - **Bir oyuncu `2` puan aldı mı?**  
   - **Bir oyuncu `1000` puan aldı mı?**  
   - **Bir oyuncu `999` puan aldı mı?**  
   - **Bir oyuncu `500` puan aldı mı?**  