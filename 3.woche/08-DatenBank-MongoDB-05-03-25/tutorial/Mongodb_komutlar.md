MongoDB'de kullanılan **temel ve ileri seviye komutları** aşağıda listeledim. **MongoDB Shell (`mongosh`)**, **Node.js (Mongoose)** ve **CLI (Command Line Interface)** üzerinden çalıştırabileceğin tüm MongoDB komutlarını içeren kapsamlı bir rehberdir.

---

## 📌 **MongoDB Shell (mongosh) Temel Komutlar**
### 🔹 **Bağlantı ve Veri Tabanı İşlemleri**
```bash
mongosh                      # MongoDB shell başlatır
use <databaseName>           # Belirtilen veri tabanına geçiş yapar
show dbs                     # Tüm veri tabanlarını listeler
db                           # Mevcut veri tabanının adını gösterir
db.dropDatabase()            # Mevcut veri tabanını siler
```

### 🔹 **Koleksiyon (Collection) İşlemleri**
```javascript
show collections             // Mevcut veri tabanındaki koleksiyonları listeler
db.createCollection("users") // Yeni bir koleksiyon oluşturur
db.users.drop()              // Koleksiyonu siler
```

### 🔹 **Doküman (Belge) Ekleme**
```javascript
db.users.insertOne({ name: "Ali", age: 25 }) // Tek bir belge ekler
db.users.insertMany([{ name: "Veli", age: 30 }, { name: "Ayşe", age: 22 }]) // Birden fazla belge ekler
```

### 🔹 **Doküman Okuma (Veri Çekme)**
```javascript
db.users.find()                           // Tüm verileri listeler
db.users.find().pretty()                   // Verileri biçimlendirilmiş olarak listeler
db.users.findOne({ name: "Ali" })         // Belirtilen kritere uyan ilk belgeyi döner
db.users.find({ age: { $gt: 25 } })       // Yaşı 25'ten büyük olanları getirir
db.users.find({ age: { $gte: 25 } })      // Yaşı 25 ve üzeri olanları getirir
db.users.find({ age: { $lt: 25 } })       // Yaşı 25'ten küçük olanları getirir
db.users.find({}, { name: 1, _id: 0 })    // Sadece `name` alanını getirir, `_id`'yi göstermez
db.users.find().sort({ age: -1 })         // Yaşa göre azalan sırayla sıralar
db.users.find().limit(5)                  // İlk 5 kaydı getirir
db.users.find().skip(2).limit(5)          // İlk 2 kaydı atlayıp sonraki 5 kaydı getirir
```

### 🔹 **Doküman Güncelleme**
```javascript
db.users.updateOne({ name: "Ali" }, { $set: { age: 26 } })  // İlk eşleşen kaydı günceller
db.users.updateMany({ age: { $lt: 25 } }, { $set: { active: true } }) // Şartı sağlayan tüm kayıtları günceller
db.users.replaceOne({ name: "Ali" }, { name: "Ali", age: 30, city: "Ankara" }) // Tüm veriyi değiştirir
```

### 🔹 **Doküman Silme**
```javascript
db.users.deleteOne({ name: "Ali" })       // İlk eşleşen belgeyi siler
db.users.deleteMany({ age: { $lt: 25 } }) // Yaşı 25'ten küçük olan tüm belgeleri siler
```

---

## 📌 **MongoDB Query Operatörleri**
### 🔹 **Karşılaştırma Operatörleri**
| Operatör  | Açıklama |
|-----------|---------|
| `$eq`     | Eşittir (Equal) |
| `$ne`     | Eşit değildir (Not Equal) |
| `$gt`     | Büyük (Greater Than) |
| `$gte`    | Büyük veya eşit (Greater Than or Equal) |
| `$lt`     | Küçük (Less Than) |
| `$lte`    | Küçük veya eşit (Less Than or Equal) |
| `$in`     | Belirtilen değerlerden biriyle eşleşir |
| `$nin`    | Belirtilen değerlerden biriyle eşleşmez |

🔹 **Örnek Kullanım**
```javascript
db.users.find({ age: { $gte: 25, $lte: 30 } }) // Yaşı 25 ile 30 arasında olanları getirir
db.users.find({ city: { $in: ["Ankara", "İstanbul"] } }) // Şehir alanı Ankara veya İstanbul olanları getirir
```

---

### 🔹 **Mantıksal Operatörler**
| Operatör | Açıklama |
|----------|---------|
| `$and`   | Ve (AND) |
| `$or`    | Veya (OR) |
| `$not`   | Tersi (NOT) |
| `$nor`   | Ne bu ne de şu (NOR) |

🔹 **Örnek Kullanım**
```javascript
db.users.find({ $or: [{ age: { $gt: 30 } }, { city: "Ankara" }] }) // Yaşı 30'dan büyük olan veya Ankara'da yaşayanları getirir
db.users.find({ $and: [{ age: { $gt: 18 } }, { age: { $lt: 30 } }] }) // Yaşı 18 ile 30 arasında olanları getirir
```

---

### 🔹 **Diziler ile Çalışma (Array Queries)**
```javascript
db.products.find({ tags: "elektronik" }) // `tags` dizisinde 'elektronik' geçenleri getirir
db.products.find({ tags: { $all: ["elektronik", "bilgisayar"] } }) // `tags` içinde belirtilen tüm değerler geçenleri getirir
db.products.find({ tags: { $size: 3 } }) // `tags` dizisi tam olarak 3 elemanlı olanları getirir
```

---

## 📌 **MongoDB CLI Komutları (Terminal)**
### 🔹 **MongoDB Servisini Başlatma/Durdurma**
```bash
systemctl start mongod     # MongoDB başlat
systemctl stop mongod      # MongoDB durdur
systemctl restart mongod   # MongoDB yeniden başlat
systemctl status mongod    # MongoDB durumunu kontrol et
```

### 🔹 **Yedekleme ve Geri Yükleme**
```bash
mongodump --db database_name --out /backup_path  # Veri tabanını yedekle
mongorestore --db database_name /backup_path     # Yedeği geri yükle
```

---

## 📌 **Mongoose ile MongoDB Kullanımı (Node.js)**
### 🔹 **Bağlantı Oluşturma**
```javascript
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Bağlantısı Başarılı'))
.catch(err => console.error('MongoDB Bağlantı Hatası:', err));
```

### 🔹 **Schema ve Model Tanımlama**
```javascript
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", userSchema);
```

### 🔹 **CRUD İşlemleri**
```javascript
// Veri ekleme
const newUser = new User({ name: "Ali", age: 25, city: "Ankara" });
await newUser.save();

// Veri çekme
const users = await User.find();
console.log(users);

// Veri güncelleme
await User.updateOne({ name: "Ali" }, { age: 26 });

// Veri silme
await User.deleteOne({ name: "Ali" });
```

---

## 📌 **MongoDB'de İndeksleme ve Performans Optimizasyonu**
```javascript
db.users.createIndex({ name: 1 }) // İsme göre indeks oluştur
db.users.getIndexes() // Mevcut indeksleri listele
db.users.dropIndex("name_1") // Belirtilen indeksi kaldır
```

---

### **🎯 SONUÇ**
Bu MongoDB komutları, **veri tabanı yönetimi**, **CRUD işlemleri**, **sorgular**, **Mongoose kullanımı** ve **performans iyileştirmeleri** için kapsamlı bir rehber niteliğindedir. 🚀💡


**MongoDB'de `drop` komutları** veri tabanlarını, koleksiyonları ve indeksleri tamamen kaldırmak için kullanılır. İşte **`drop`** ile ilgili tüm önemli komutlar:

---

## 📌 **MongoDB'de `drop` Komutları**
### 🔹 **Veri Tabanını Silmek (`dropDatabase()`)**
Bir veri tabanını tamamen silmek için:
```javascript
use myDatabase  // Öncelikle silinecek veri tabanına geçiş yap
db.dropDatabase()  // Veri tabanını sil
```
✅ **Uyarı:** Bu komut, veri tabanını ve içindeki tüm koleksiyonları **geri dönüşü olmayacak şekilde** kaldırır!

---

### 🔹 **Koleksiyon Silmek (`drop()`)**
Bir koleksiyonu silmek için:
```javascript
db.users.drop()  // `users` koleksiyonunu tamamen siler
```
✅ **Uyarı:** Koleksiyonun içindeki tüm veriler silinir ve geri getirilemez!

---

### 🔹 **İndeks Silmek (`dropIndex()`)**
Belirli bir indeksin silinmesi:
```javascript
db.users.dropIndex("name_1")  // `name_1` indeksini siler
```
Tüm indeksleri görmek için:
```javascript
db.users.getIndexes()  // Mevcut indeksleri listeler
```

✅ **Uyarı:** `dropIndex()` komutu performansı etkileyebilir. Eğer bir indeks kaldırılırsa, ilgili sorgular daha yavaş çalışabilir.

---

### 🔹 **Tüm Koleksiyonlardaki Veriyi Silmek (`deleteMany()`)**
Koleksiyonu tamamen silmek yerine, sadece içindeki tüm verileri temizlemek için:
```javascript
db.users.deleteMany({})  // `users` koleksiyonundaki tüm belgeleri siler
```
✅ **Avantaj:** Koleksiyon yapısı korunur, sadece içindeki veriler kaldırılır.

---

## 📌 **Özet**
| Komut | Açıklama |
|--------|----------------------|
| `db.dropDatabase()` | Tüm veri tabanını siler |
| `db.collection.drop()` | Belirtilen koleksiyonu tamamen kaldırır |
| `db.collection.dropIndex("index_adı")` | Belirtilen indeksi siler |
| `db.collection.deleteMany({})` | Koleksiyonun içindeki tüm belgeleri siler, ancak koleksiyonu silmez |

Bu komutlar, **MongoDB’de veri yönetimi** ve **temizlik işlemleri** için kritik öneme sahiptir. 🚀


Evet! MongoDB ile ilgili ek olarak kullanabileceğin **önemli yönetim, yedekleme, yetkilendirme ve performans** komutlarını da ekliyorum. Bunlar özellikle büyük projelerde ve production ortamında oldukça önemlidir. 🚀

---

## **📌 MongoDB'de Ekstra Komutlar**
Aşağıda **drop işlemleri dışında** veri tabanı yönetimi, yedekleme, kullanıcı yönetimi ve performansla ilgili komutlar yer alıyor.

---

### **📌 1. Veri Tabanı Yönetimi Komutları**
#### **🔹 Mevcut veri tabanlarını listeleme**
```javascript
show dbs
```
#### **🔹 Aktif veri tabanını görüntüleme**
```javascript
db
```
#### **🔹 Yeni bir veri tabanı oluşturma (otomatik)**
```javascript
use myNewDatabase
```
_(Not: MongoDB’de bir veri tabanı, en az bir koleksiyon oluşturulana kadar kaydedilmez!)_

#### **🔹 Mevcut veri tabanındaki koleksiyonları listeleme**
```javascript
show collections
```

---

### **📌 2. Koleksiyon Yönetimi Komutları**
#### **🔹 Koleksiyon oluşturma**
```javascript
db.createCollection("users")
```
#### **🔹 Koleksiyon hakkında bilgi alma**
```javascript
db.users.stats()
```
#### **🔹 Koleksiyonun şemasını gösterme**
```javascript
db.users.findOne()
```
#### **🔹 Koleksiyon adını değiştirme**
```javascript
db.users.renameCollection("members")
```
✅ **Dikkat:** `renameCollection` işlemi yalnızca **veri tabanı içinde çalışır**, farklı veri tabanına taşıma işlemi yapmaz.

---

### **📌 3. Veri Ekleme, Güncelleme ve Silme Komutları**
#### **🔹 Tek bir belge ekleme**
```javascript
db.users.insertOne({ name: "Ahmet", age: 25, city: "Istanbul" })
```
#### **🔹 Birden fazla belge ekleme**
```javascript
db.users.insertMany([
  { name: "Mehmet", age: 30, city: "Ankara" },
  { name: "Ayşe", age: 27, city: "Izmir" }
])
```
#### **🔹 Belge güncelleme (`updateOne` ve `updateMany`)**
```javascript
db.users.updateOne({ name: "Ahmet" }, { $set: { age: 26 } })
```
```javascript
db.users.updateMany({ city: "Istanbul" }, { $set: { country: "Turkey" } })
```
#### **🔹 Belge silme**
```javascript
db.users.deleteOne({ name: "Mehmet" }) // Tek belge siler
db.users.deleteMany({ city: "Ankara" }) // Şehri Ankara olan tüm belgeleri siler
```

---

### **📌 4. Veri Sorgulama ve Filtreleme Komutları**
#### **🔹 Tüm belgeleri getirme**
```javascript
db.users.find()
```
#### **🔹 Belirli alanları getirme**
```javascript
db.users.find({}, { name: 1, age: 1, _id: 0 })  // Sadece isim ve yaş getirir, _id hariç
```
#### **🔹 Belirli bir şartı sağlayan verileri getirme**
```javascript
db.users.find({ age: { $gt: 25 } })  // Yaşı 25'ten büyük olanları getir
db.users.find({ city: "Istanbul", age: { $lt: 30 } }) // Şehri İstanbul olan ve yaşı 30'dan küçük olanları getir
```
#### **🔹 Belirli bir alanı içeren veya içermeyen belgeleri getirme**
```javascript
db.users.find({ name: { $exists: true } })  // İsmi olan belgeleri getir
db.users.find({ phone: { $exists: false } }) // Telefon numarası olmayanları getir
```

---

### **📌 5. Indexleme ve Performans Komutları**
#### **🔹 Belirli bir alan için indeks oluşturma**
```javascript
db.users.createIndex({ name: 1 })  // İsme göre artan sıralama ile indeks oluştur
db.users.createIndex({ age: -1 })  // Yaşa göre azalan sıralama ile indeks oluştur
```
#### **🔹 Mevcut indeksleri görüntüleme**
```javascript
db.users.getIndexes()
```
#### **🔹 Bir indeksi silme**
```javascript
db.users.dropIndex("name_1")  // name alanı için oluşturulan indeksi sil
```

---

### **📌 6. Kullanıcı ve Yetkilendirme Komutları**
#### **🔹 Kullanıcı oluşturma (Yetkilendirme Açıkken)**
```javascript
db.createUser({
  user: "admin",
  pwd: "password123",
  roles: [{ role: "readWrite", db: "myDatabase" }]
})
```
#### **🔹 Mevcut kullanıcıları listeleme**
```javascript
show users
```
#### **🔹 Kullanıcıyı silme**
```javascript
db.dropUser("admin")
```

---

### **📌 7. Yedekleme ve Geri Yükleme Komutları**
#### **🔹 Veri tabanını yedekleme (`mongodump`)**
```bash
mongodump --db=myDatabase --out=/backup/mongoBackup
```
#### **🔹 Yedeği geri yükleme (`mongorestore`)**
```bash
mongorestore --db=myDatabase /backup/mongoBackup/myDatabase
```

---

### **📌 8. Log ve Durum Kontrolleri**
#### **🔹 MongoDB bağlantısını kontrol etme**
```javascript
db.runCommand({ connectionStatus: 1 })
```
#### **🔹 MongoDB sunucu durumunu görüntüleme**
```javascript
db.serverStatus()
```
#### **🔹 MongoDB kullanım istatistiklerini alma**
```javascript
db.stats()
```

---

## **📌 Özet**
| Komut | Açıklama |
|--------|----------------------|
| `show dbs` | Tüm veri tabanlarını göster |
| `use myDatabase` | Belirli bir veri tabanına geç |
| `db.createCollection("users")` | Yeni bir koleksiyon oluştur |
| `db.users.insertOne({...})` | Tek bir belge ekle |
| `db.users.find()` | Koleksiyondaki tüm belgeleri getir |
| `db.users.updateOne({...})` | Bir belgeyi güncelle |
| `db.users.deleteOne({...})` | Bir belgeyi sil |
| `db.users.createIndex({name: 1})` | İndeks oluştur |
| `db.users.getIndexes()` | Mevcut indeksleri göster |
| `db.dropDatabase()` | Veri tabanını tamamen sil |
| `db.users.drop()` | Koleksiyonu tamamen sil |
| `db.createUser({...})` | Yeni kullanıcı ekle |
| `db.runCommand({ connectionStatus: 1 })` | Bağlantı durumunu kontrol et |
| `mongodump --db=myDatabase --out=/backup/mongoBackup` | Veri tabanını yedekle |
| `mongorestore --db=myDatabase /backup/mongoBackup/myDatabase` | Yedeği geri yükle |

---

## **Sonuç 🎯**
MongoDB'de veri yönetimi için **CRUD işlemlerinden (Create, Read, Update, Delete) indekslemeye, yetkilendirmeden yedeklemeye** kadar birçok komut kullanılır. Özellikle **production ortamında**, **yetkilendirme, indeksleme ve yedekleme işlemlerine dikkat etmek** önemlidir.

✅ **Günlük kullanımda en sık kullanılan komutlar:**
- `db.collection.find()` → Veri çekmek için
- `db.collection.insertOne()` → Yeni veri eklemek için
- `db.collection.updateOne()` → Veri güncellemek için
- `db.collection.deleteOne()` → Veri silmek için
- `db.collection.createIndex()` → Performansı artırmak için

Eğer büyük ölçekli bir MongoDB kullanıyorsan, **indeksleme, yedekleme ve kullanıcı yetkilendirme komutlarını** da öğrenmek önemlidir. 🚀

db