## **📌 Node.js’te Çevresel Değişkenler (Environment Variables) Kullanımı**

Bu proje, **Node.js içinde `process.env` kullanarak çevresel değişkenleri yönetmeyi** öğrenmenizi sağlayacaktır.  

---

## **📌 Görevler**

Aşağıdaki görevleri **`server.js`** dosyası içinde gerçekleştirin.

---

### **📌 Görev 1 - `process.env` ile Çalışma**

1. **`server.js`** dosyasında **`console.log(process.env)`** kullanarak tüm çevresel değişkenleri ekrana yazdırın.
2. **Aşağıdaki değişkenleri `process.env` içine ekleyin ve test edin:**
```env
SERVER_NAME = 'Papagei 5000'
SERVER_CPU = 'Archimedes MMX'
SERVER_URL = 'http://localhost:5000/'
SERVER_LOG = 'LOG.txt'
```

---

### **📌 Görev 2 - Dokümantasyon Okuma**

Bir yazılım geliştiricisi olarak **dokümantasyon okumak çok önemlidir**.  
Aşağıdaki kaynakları okuyarak `process.env` hakkında daha fazla bilgi edinin:

- [Node.js’te Çevresel Değişkenleri Okuma](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [process.env Dokümantasyonu](https://nodejs.org/docs/latest/api/process.html#processenv)

---

### **📌 Görev 3 - `.env` Dosyasını Yapılandırma**

1. **`.env` adlı bir dosya oluşturun.**
2. **Daha önce `process.env` içine eklediğiniz değerleri `.env` dosyasına kaydedin.**
3. **`server.js` içinde `process.env` değişkenlerini kaldırın** ve `.env` dosyasını kullanın.

📌 **`console.log` ile şu mesajı ekrana yazdırın (değişkenleri `.env`'den okuyarak):**
```
Hallo! Ich bin {SERVER_NAME}! Ich habe eine {SERVER_CPU}, und meine URL lautet {SERVER_URL}. Ich führe ein Protokoll aller Aktivitäten in {SERVER_LOG}.
```

✅ **Bu mesaj `.env` içindeki değişkenleri kullanarak oluşturulmalıdır.**  

---

### **📌 Görev 4 - `.gitignore` Kullanarak `.env` Dosyasını Koruma**

Eğer `git status` komutunu çalıştırırsanız, `.env` dosyanızın **Git tarafından takip edildiğini** göreceksiniz.  
Ancak, **güvenlik nedeniyle `.env` dosyasını Git’e eklememeliyiz!**  

📌 **Şu adımları uygulayın:**
1. **Bir `.gitignore` dosyası oluşturun.**
2. **Bu dosyanın içine `.env` yazın** ki Git tarafından takip edilmesin.
3. **`git status` komutunu tekrar çalıştırın** ve `.env` dosyanızın artık görünmediğini doğrulayın.

✅ **Böylece `.env` dosyanız Git'e yüklenmeyecek ve güvenli kalacaktır.** 🚀  

---

## **📌 Özet: Bugünkü Görevler**
| **Görev** | **Açıklama** |
|-----------|-------------|
| **1. `process.env` ile çalış** | Çevresel değişkenleri `process.env` ile ekrana yazdır. |
| **2. Dokümantasyon oku** | `process.env` ve çevresel değişkenler hakkında bilgi edin. |
| **3. `.env` oluştur ve kullan** | Değişkenleri `.env` içine al ve JavaScript’te kullan. |
| **4. `.gitignore` ile `.env`'i gizle** | `.env` dosyanın Git'e yüklenmesini engelle. |

🚀 **Sonuç:**  
**Bu görevleri tamamladıktan sonra, Node.js projelerinde çevresel değişkenleri nasıl yöneteceğini öğreneceksin!** ✅