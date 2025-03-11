# **Hava Durumu CLI**

Terminal üzerinden en güncel hava durumu raporunu al!

## **Ne yapacaksın?**

Dış bir API kullanarak hava durumu bilgisi getiren bir **CLI (Komut Satırı Arayüzü) uygulaması** yazacaksın.

Kullanıcı programı çalıştırırken bir şehir adı girecek. Programın bu şehir adını istekte kullanmalı ve sonucu terminalde göstermelidir.

---

### **Örnek**

###### **Komut**
```bash
$ node weather.js manchester
```

###### **Yanıt**
```bash
@@@@@@@@@@@@@@@@@@@
@ HAVA DURUMU UYGULAMASI @
@@@@@@@@@@@@@@@@@@@

Şu anda Manchester'da hava 15,25°C.

Mevcut hava koşulları: parçalı bulutlu
```

---

## **Görevler**

### **Görev 1 - Bir API edinin**

1. Kullanılabilecek birçok hava durumu API'si var. Aşağıdaki listeden **bir** API için ücretsiz bir hesap oluştur veya kendi seçtiğin bir API'yi kullan:
   - [OpenWeatherMap API](https://openweathermap.org/)
   - [Weather API](https://www.weatherapi.com/)

2. API anahtarını bir yere not et, çünkü bunu daha sonra kullanacaksın.
3. API dokümantasyonunu okuyarak nasıl kullanacağını öğren.

---

### **Görev 2 - Projeyi Kurma**

1. `npm init -y` komutunu kullanarak `npm` projesini başlat.
2. **Ağ istekleri** yapmak için `axios` kütüphanesini yükle.
3. **Çevresel değişkenleri** yönetmek için `dotenv` kütüphanesini yükle.
4. **"weather.js"** dosyasını oluştur.

---

### **Görev 3 - API Anahtarı**

1. `.env` dosyasını oluştur.
2. Bu dosyanın içine API anahtarını ekle.

   ###### **Örnek**
   ```text
   KEY = 32476f984jf83jf9fdksu32928475
   ```

3. `.gitignore` dosyası oluştur ve `.env` dosyasını buraya ekleyerek gizli kalmasını sağla.

---

### **Görev 4 - API'den Veri Çekme**

`weather.js` dosyası içinde:

1. Kullanıcının girdiği şehir adını oku.
   > 💡 **İpucu:** `process.argv` kullanabilirsin.
2. API anahtarını `.env` dosyasından okumak için [dotenv](https://github.com/motdotla/dotenv) kütüphanesini kullan.
3. API'den veri çekmek için [axios](https://github.com/axios/axios) kütüphanesini kullan.

---

### **Görev 5 - Çıktıyı Gösterme**

API’den gelen verileri oku ve şu bilgileri göster:

- Şehir adı
- Güncel sıcaklık
- Güncel hava durumu koşulları
- Eklemek istediğin diğer bilgiler

> 💡 **İpucu:** Terminal çıktısını daha şık hale getirmek için [colors.js](https://github.com/Marak/colors.js) gibi bir kütüphane kullanabilirsin. 🤩

---

## **Bonus Görevler**

Programın şu özelliklere de sahip olmalı:

- **5 günlük hava tahmini** gösterebilme.
- **Metrik (Celsius) ve emperyal (Fahrenheit) ölçüm birimleri** arasında geçiş yapabilme.