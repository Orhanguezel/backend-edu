### **📌 Node.js'te Çevresel Değişkenleri (`process.env`) Okuma**  

Node.js’in **`process`** çekirdek modülü, **`env`** özelliğini sağlar.  
Bu özellik, **çalıştırma anında tanımlanmış olan tüm çevresel değişkenleri** içerir.  

---

## **🔹 Çevresel Değişkenleri `process.env` ile Okuma**  
📌 **Aşağıdaki komut, `USER_ID` ve `USER_KEY` değişkenlerini ayarlayarak `app.js` dosyasını çalıştırır:**  
```bash
USER_ID=239482 USER_KEY=foobar node app.js
```
✅ **Bu komut, `USER_ID` değerini `239482` ve `USER_KEY` değerini `foobar` olarak ayarlar.**  
✅ **Bu yöntem test için uygundur, ancak üretim ortamında genellikle `export` komutları veya `.env` dosyaları kullanılır.**  

---

## **🔹 Node.js İçinde `process.env` Kullanımı**  
📌 **Yukarıdaki komutla tanımlanan değişkenlere şu şekilde erişebiliriz:**
```javascript
console.log(process.env.USER_ID);  // "239482"
console.log(process.env.USER_KEY); // "foobar"
```
✅ **Bu yöntemle, `process.env` üzerinden herhangi bir özel çevresel değişkeni okuyabilirsiniz.**  

---

## **🔹 Node.js 20 ile `.env` Dosyası Kullanımı**  
📌 **Node.js 20 sürümüyle birlikte `.env` dosyaları için deneysel bir destek getirildi.**  
Artık **`--env-file`** bayrağını kullanarak, `.env` dosyasındaki değişkenleri uygulamanıza dahil edebilirsiniz.

📌 **Örnek `.env` Dosyası:**
```env
PORT=3000
```

📌 **Node.js Dosyasında (`app.js`):**
```javascript
console.log(process.env.PORT); // "3000"
```

📌 **Komut satırında `.env` dosyasını yükleyerek `app.js` dosyasını çalıştırma:**
```bash
node --env-file=.env app.js
```
✅ **Bu komut, `.env` dosyasındaki tüm değişkenleri `process.env` içine yükler.**  

---

## **🔹 Birden Fazla `.env` Dosyası Kullanma**  
📌 **Birden fazla `.env` dosyasını aynı anda yükleyebilirsiniz.**  
Daha sonra belirtilen dosyadaki değişkenler, önceki dosyalardaki değişkenleri geçersiz kılar.

```bash
node --env-file=.env --env-file=.development.env app.js
```
✅ **Burada `.development.env` dosyası `.env` dosyasındaki değişkenleri geçersiz kılacaktır.**  

📌 **Önemli:**  
- **Eğer aynı değişken hem ortam değişkeni (`export` ile) hem de `.env` dosyasında tanımlanmışsa, ortam değişkeni (export edilen) öncelikli olur.**  

---

## **🔹 `.env` Dosyasının Eksik Olması Durumunda Hata Almayı Önleme**  
📌 **Eğer `.env` dosyanız eksikse, hata almak istemiyorsanız `--env-file-if-exists` bayrağını kullanabilirsiniz.**  

```bash
node --env-file-if-exists=.env app.js
```
✅ **Bu komut, `.env` dosyası varsa değişkenleri yükler, yoksa hata vermez.**  

---

# **📌 Konuyu Detaylı Açıklama**
## **1️⃣ Çevresel Değişkenler Nedir?**
Çevresel değişkenler (**environment variables**), **uygulamanın çalışma zamanında ihtiyaç duyduğu bazı yapılandırma bilgilerini dışarıdan yönetmek için kullanılan değişkenlerdir**.  
📌 **Örnek Kullanım:**
- **Veritabanı bağlantı bilgileri**
- **API anahtarları**
- **Sunucu yapılandırmaları (`PORT`, `URL` gibi)**
- **Debug veya Production ayarları**

📌 **Örnek:**
```bash
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/"
```
✅ **Bu değişkeni kod içinde `process.env.DATABASE_URL` ile kullanabiliriz.**

---

## **2️⃣ `process.env` Nedir ve Neden Kullanılır?**
📌 **`process.env`**, **Node.js içinde global bir nesnedir** ve **çevresel değişkenleri saklar**.  
📌 **Faydaları:**
- **Kodun esnek olmasını sağlar** (Sabit değerler yerine dışarıdan değiştirilebilir).
- **Güvenlik sağlar** (API anahtarlarını doğrudan kodda tutmazsınız).
- **Farklı ortamlara uyum sağlar** (Development, Test, Production).

📌 **Örnek:**
```javascript
console.log(process.env.NODE_ENV); // "production" veya "development"
```
✅ **Bu yöntemle, uygulama hangi ortamda çalıştığını bilir ve uygun ayarları yükler.**  

---

## **3️⃣ `.env` Dosyası ve `dotenv` Kullanımı**
📌 **Node.js’de `.env` dosyasını yüklemek için `dotenv` paketi kullanılır.**

📌 **Kurulum:**
```bash
npm install dotenv
```

📌 **Kullanım (`server.js` içinde):**
```javascript
import dotenv from "dotenv";
dotenv.config(); // .env dosyasını yükler

console.log(process.env.API_KEY);
```

📌 **.env Dosyası (`.env`):**
```env
API_KEY=123456789abcdef
```
✅ **Bu sayede, `.env` dosyasındaki değişkenleri `process.env` üzerinden okuyabiliriz.**  

---

## **4️⃣ `.env` Dosyasını `git` İçin Gizleme**
🚨 **Güvenlik açısından `.env` dosyanızı asla `git`'e yüklememelisiniz!**  
📌 **`.gitignore` dosyanıza şu satırı ekleyin:**
```
.env
```
✅ **Böylece `.env` dosyanız GitHub’a yüklenmeyecektir.**  

---

# **📌 Özet: Node.js’te Çevresel Değişkenleri Kullanma**
| **Adım** | **Açıklama** |
|----------|-------------|
| **1. Çevresel değişkenleri terminalde tanımla** | `USER_ID=239482 USER_KEY=foobar node app.js` |
| **2. `process.env` ile oku** | `console.log(process.env.USER_ID);` |
| **3. `.env` dosyasını oluştur** | `API_KEY=123456789abcdef` |
| **4. `.env` dosyasını yükle (`dotenv`)** | `npm install dotenv` ve `dotenv.config();` |
| **5. `.gitignore` içine `.env` ekle** | `.env dosyası git'e yüklenmeyecek` |

🚀 **Sonuç:**  
Node.js projelerinde **çevresel değişkenleri kullanarak güvenliği artırabilir, esnekliği sağlayabilir ve ortam yapılandırmalarını kolaylaştırabilirsin!** ✅


## **📌 Node.js `process.env` ve Diğer `process` Özellikleri Açıklaması**  

Node.js **`process`** nesnesi, çalıştırılan **Node.js sürecini (process) yönetmek ve izlemek için** kullanılan bir nesnedir.  
Bu nesne, **çevresel değişkenlere erişim, bellek kullanımı, işlem kimliği (PID), sistem platform bilgileri ve daha birçok işlevi** sağlar.

---

# **📌 `process.env` ile Çevresel Değişkenleri Kullanma**
📌 **`process.env`**, **çalışan Node.js uygulamasının ortam değişkenlerini** içeren bir nesnedir.

📌 **Örnek:**
```javascript
console.log(process.env);
```
✅ **Bu kod, terminalde tüm çevresel değişkenleri listeleyecektir.**

📌 **Örnek `.env` Dosyası:**
```env
PORT=3000
API_KEY=12345abcdef
```

📌 **Node.js içinde `dotenv` ile Kullanımı:**
```javascript
import dotenv from "dotenv";
dotenv.config();

console.log(`Port: ${process.env.PORT}`);
console.log(`API Key: ${process.env.API_KEY}`);
```
✅ **Bu kod, `.env` dosyasındaki değerleri okuyarak uygulamada kullanılmasını sağlar.**

📌 **Terminalde `.env` olmadan değişken tanımlamak:**
```bash
export PORT=3000
node app.js
```
✅ **Bu yöntemle, `.env` dosyası olmadan da çevresel değişkenleri belirleyebilirsiniz.**

---

# **📌 `process` Nesnesinin Diğer Kullanışlı Özellikleri**

## **1️⃣ `process.exit()` - Çıkış Kodu ile Süreci Durdurma**
📌 **`process.exit([code])`**, Node.js uygulamasını belirli bir çıkış koduyla durdurur.

📌 **Örnek Kullanım:**
```javascript
import { exit } from "node:process";

console.log("Çıkış yapılıyor...");
exit(1); // 1 -> Hata kodu
```
✅ **Kod çalıştıktan sonra `exit(1)` çağrıldığında, uygulama hata kodu ile sonlanır.**  

📌 **Çıkış Kodları:**
| Çıkış Kodu | Açıklama |
|------------|---------|
| `0` | Başarıyla çıkış yaptı |
| `1` | Genel hata (Uncaught Exception) |
| `2` | Kullanım hatası |
| `5` | Fatal Error (Örneğin, bellek hatası) |
| `9` | Geçersiz Argüman |
| `128+` | Sinyal ile çıkış (Örneğin, `SIGKILL` ile `128+9=137` olur) |

---

## **2️⃣ `process.pid` - İşlem Kimliği (Process ID)**
📌 **`process.pid`**, **çalışan Node.js sürecinin kimliğini (PID) döndürür**.

📌 **Örnek Kullanım:**
```javascript
console.log(`Bu sürecin PID'si: ${process.pid}`);
```
✅ **Bu kod, çalışan Node.js sürecinin kimliğini terminale yazdırır.**

📌 **PID'nin Kullanım Alanları:**
- **Çalışan süreci manuel olarak sonlandırmak (`kill <PID>`)**
- **Performans izleme ve hata ayıklama**
- **Sistemle ilgili işlemler yapmak**

---

## **3️⃣ `process.platform` - İşletim Sistemini Tespit Etme**
📌 **`process.platform`**, Node.js'in hangi işletim sisteminde çalıştığını döndürür.

📌 **Olası Değerler:**
| Platform | Açıklama |
|----------|---------|
| `win32` | Windows |
| `linux` | Linux |
| `darwin` | macOS |
| `aix` | IBM AIX |
| `freebsd` | FreeBSD |

📌 **Örnek Kullanım:**
```javascript
console.log(`Bu sistemde çalışan platform: ${process.platform}`);
```
✅ **Kod çalıştığında, hangi işletim sisteminde çalıştığını terminale yazdırır.**

---

## **4️⃣ `process.argv` - Komut Satırı Argümanlarını Okuma**
📌 **`process.argv`**, **çalıştırılan Node.js komutunun ve parametrelerinin listesini içerir.**

📌 **Örnek Kullanım (`app.js` dosyası için):**
```javascript
console.log(process.argv);
```
📌 **Terminalde çalıştırma:**
```bash
node app.js hello world
```
📌 **Çıktı:**
```
['node', 'app.js', 'hello', 'world']
```
✅ **Bu özellik, CLI araçları yazarken önemlidir!**

---

## **5️⃣ `process.memoryUsage()` - Bellek Kullanımını İzleme**
📌 **`process.memoryUsage()`**, **çalışan Node.js sürecinin ne kadar bellek kullandığını döndürür**.

📌 **Örnek Kullanım:**
```javascript
console.log(process.memoryUsage());
```
📌 **Çıktı Örneği:**
```json
{
  rss: 4935680,
  heapTotal: 1826816,
  heapUsed: 650472,
  external: 49879,
  arrayBuffers: 9386
}
```
✅ **Bu özellik, performans izleme ve bellek sızıntılarını önleme için kullanılır.**

---

## **6️⃣ `process.uptime()` - Node.js Sürecinin Çalışma Süresi**
📌 **`process.uptime()`**, **Node.js sürecinin kaç saniyedir çalıştığını döndürür**.

📌 **Örnek Kullanım:**
```javascript
console.log(`Çalışma süresi: ${process.uptime()} saniye`);
```
📌 **Bu yöntem genellikle performans analizleri ve uptime izleme için kullanılır.**

---

## **7️⃣ `process.execPath` - Node.js Yürütülebilir Dosyasının Konumu**
📌 **`process.execPath`**, **Node.js'in yüklü olduğu yolu döndürür**.

📌 **Örnek Kullanım:**
```javascript
console.log(`Node.js yolu: ${process.execPath}`);
```
✅ **Bu özellik, sistemde yüklü olan Node.js’in tam yolunu bulmak için kullanılır.**

---

# **📌 Özet: `process` Nesnesinin Önemli Özellikleri**
| Özellik | Açıklama |
|----------|---------|
| **`process.env`** | Çevresel değişkenleri yönetir. |
| **`process.exit(code)`** | Belirtilen kod ile süreci sonlandırır. |
| **`process.pid`** | Node.js sürecinin kimliğini (PID) döndürür. |
| **`process.platform`** | İşletim sistemi bilgisini döndürür. |
| **`process.argv`** | Komut satırı argümanlarını içerir. |
| **`process.memoryUsage()`** | Bellek kullanımını gösterir. |
| **`process.uptime()`** | Node.js sürecinin çalışma süresini döndürür. |
| **`process.execPath`** | Node.js yürütülebilir dosyasının tam yolunu döndürür. |

🚀 **Sonuç:**  
Node.js `process` nesnesi, **çevresel değişkenlerden bellek kullanımına, işletim sistemi bilgisinden çalışma süresine kadar birçok önemli bilgiyi sunar**.  
Özellikle **çevresel değişkenler (`process.env`), bellek kullanımı (`memoryUsage()`), işlem süresi (`uptime()`) gibi özellikler performans izleme, hata ayıklama ve yapılandırma yönetimi için kritik öneme sahiptir**. ✅