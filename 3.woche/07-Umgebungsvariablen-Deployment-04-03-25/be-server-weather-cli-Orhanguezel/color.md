### **📌 `colors` Kütüphanesi ile Terminal Çıktılarını Renklendirme**
`colors.js` kütüphanesi, terminal çıktılarınızı **renkli ve stilize** hale getirmek için kullanılan popüler bir Node.js kütüphanesidir.

---

## **1️⃣ Kurulum**
Öncelikle kütüphaneyi projenize eklemeniz gerekiyor.  
Aşağıdaki komutu terminalde çalıştırarak `colors` kütüphanesini yükleyin:

```bash
npm install colors
```

---

## **2️⃣ Kullanımı**
Kütüphaneyi projenize dahil etmek için:

```javascript
import colors from 'colors';  // ES6 modül yapısı
// veya
const colors = require('colors');  // CommonJS yapısı
```

---

## **3️⃣ Temel Kullanım**
`colors` kütüphanesi, **metinleri renklendirmek** için zincirleme (`chaining`) yöntemiyle çalışır:

```javascript
console.log('Merhaba Dünya!'.green); // Yeşil metin
console.log('Uyarı!'.yellow);        // Sarı metin
console.log('Hata!'.red);            // Kırmızı metin
console.log('Bilgi:'.blue);          // Mavi metin
```

**Çıktı (Terminalde görünüm):**
```
Merhaba Dünya!  (Yeşil)
Uyarı!          (Sarı)
Hata!           (Kırmızı)
Bilgi:          (Mavi)
```

---

## **4️⃣ Arka Plan Renkleri**
Metnin **arka plan rengini değiştirmek** için `.bgColor` kullanabilirsiniz:

```javascript
console.log('Beyaz arka plan'.bgWhite);
console.log('Kırmızı arka plan'.bgRed);
console.log('Yeşil arka plan'.bgGreen);
console.log('Mavi arka plan'.bgBlue);
```

---

## **5️⃣ Birden Fazla Stil Kullanımı**
Bir metne **birden fazla stil** ekleyebilirsiniz:

```javascript
console.log('Kırmızı ve Kalın'.red.bold);
console.log('Mavi ve Altı Çizili'.blue.underline);
console.log('Yeşil, Ters ve Kalın'.green.inverse.bold);
```

---

## **6️⃣ Özel Temalar Tanımlama**
Kendi **renk temalarınızı** belirleyebilirsiniz:

```javascript
colors.setTheme({
  error: 'red',
  success: 'green',
  warning: 'yellow',
  info: 'blue'
});

console.log('Bu bir hata mesajıdır'.error);
console.log('Başarılı işlem tamamlandı'.success);
console.log('Dikkat edilmesi gereken konu'.warning);
console.log('Genel bilgi mesajı'.info);
```

---

## **7️⃣ `colors` ile Hava Durumu Uygulamasına Renk Ekleme**
Örneğin, hava durumu çıktısını renkli hale getirebilirsiniz:

```javascript
import colors from 'colors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;
const city = process.argv[2];
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

if (!city) {
    console.log("Lütfen bir şehir girin!".red.bold);
    process.exit(1);
}

async function getWeather() {
    try {
        const response = await axios.get(url);
        const data = response.data;

        console.log(colors.green(`
        @@@@@@@@@@@@@@@@@@@@
        @  HAVA DURUMU  @
        @@@@@@@@@@@@@@@@@@@@

        Şehir: ${data.name.yellow}
        Ülke: ${data.sys.country.cyan}
        Sıcaklık: ${data.main.temp.toString().red}°C
        Hava Durumu: ${data.weather[0].description.blue}
        `));
    } catch (error) {
        console.error(`Hata: ${error.message}`.bgRed.white);
    }
}

getWeather();
```

### **📌 Sonuç**
- **Şehir adı → Sarı**
- **Ülke kodu → Mavi**
- **Sıcaklık → Kırmızı**
- **Hava durumu açıklaması → Mavi**
- **Hata mesajları → Beyaz yazı, kırmızı arka plan**

---

## **📌 Özet**
✔ `colors` kütüphanesi, terminalde renkli ve şık metinler oluşturmak için kullanılır.  
✔ **Metin rengi, arka plan rengi ve metin stilleri** (kalın, altı çizili vb.) eklenebilir.  
✔ **Özel temalar** tanımlayarak hata, başarı, uyarı gibi mesajlar için özel renkler oluşturulabilir.  
✔ **Hava durumu gibi CLI uygulamalarında daha okunaklı çıktılar elde etmek için harika bir araçtır!** 🚀  

🔹 **Artık terminal çıktılarınızı renklendirebilir ve profesyonel görünen uygulamalar oluşturabilirsiniz!** 🎨🎯