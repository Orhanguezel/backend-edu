# **Veri ile Çalışmak (Working with Data)**  

Bu alıştırmanın amacı, **temel dosya okuma/yazma (file I/O) ve Express.js endpoint’leri** üzerinde pratik yapmaktır. **Hayvan gözlem kayıtlarını tutan ve listeleyen basit bir sunucu** oluşturacağız.  

---

## **📌 Görevler (Tasks)**  

### **📌 Görev 1 (Task 1)**  

✅ **Gerekli bağımlılıkları ekle:**  
- `express` kütüphanesini projeye ekle  

✅ **Git yapılandırmasını ayarla:**  
- `.gitignore` dosyası oluştur ve `node_modules` klasörünü Git deposuna eklenmeyecek şekilde yapılandır  

✅ **Express sunucusunu başlat:**  
- `server.js` dosyasını oluştur  
- **Henüz endpoint olmadan**, sadece **port `7771` üzerinde çalışan bir Express sunucusu** ekle  

---

### **📌 Görev 2 (Task 2)**  

✅ **Bir GET endpoint ekle:**  
- `GET http://localhost:7771/`  

✅ **Dosya içeriğini istemciye gönder:**  
- `sightings.txt` dosyasındaki **verileri oku**  
- **Dosyanın içeriğini** HTTP yanıtı olarak gönder  

---

### **📌 Görev 3 (Task 3)**  

✅ **Bir POST endpoint ekle:**  
- `POST http://localhost:7771/`  

✅ **Yeni hayvan türü ekleme işlemi:**  
- **İstemciden gelen yeni hayvan türünü al**  
- **Bu bilgiyi, bugünün tarihiyle birlikte `sightings.txt` dosyasına ekle**  

✅ **Veri formatı şu şekilde olmalı:**  
```text
YYYY-MM-DD,Hayvan Türü
```
**📌 Örnek:**  
```text
2024-07-24,Yeni Tür
```

✅ **Tarih formatlama hakkında ipucu:**  
- `new Date()` ile **mevcut tarihi alabilirsin**  
- **Tarih biçimlendirmek biraz karmaşık olabilir**, bu konuda MDN kaynaklarına bakabilirsin:  
  [MDN - Date Referansı](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  

---

🚀 **Bundan sonraki adım: Express.js ile bu sunucuyu adım adım oluşturalım!** 🎯