MongoDB Atlas ile ilgili detaylı bir eğitim vereceğim. Eğitim **bölüm bölüm** olacak ve her bölümde **adım adım** Atlas kullanımını, yapılandırmasını ve gelişmiş özelliklerini işleyeceğiz.

---

# **📌 MongoDB Atlas Eğitimi**  

## **📖 Bölüm 1: MongoDB Atlas Nedir ve Nasıl Kullanılır?**
### **🔹 1.1 MongoDB Atlas Nedir?**
- **MongoDB Atlas**, **MongoDB Inc.** tarafından sağlanan **tamamen yönetilen bir veritabanı hizmetidir (DBaaS - Database as a Service)**.
- **Bulut tabanlıdır** ve **AWS, Azure ve Google Cloud üzerinde** çalışabilir.
- **Manuel kurulum gerektirmez**, otomatik ölçekleme, yedekleme ve güvenlik sağlar.
- **Gerçek zamanlı veri analizi ve performans izleme** gibi gelişmiş özellikleri destekler.

### **🔹 1.2 MongoDB Atlas Hesabı Oluşturma**
1. [MongoDB Atlas Web Sitesine](https://www.mongodb.com/atlas) gidin.
2. **Sign Up** butonuna tıklayın.
3. **Google, GitHub veya e-posta ile kayıt olun**.
4. **Hesabınızı doğruladıktan sonra giriş yapın**.

---

## **📖 Bölüm 2: MongoDB Atlas Üzerinde Cluster (Küme) Oluşturma**
### **🔹 2.1 Cluster Nedir?**
- **Cluster**, birden fazla MongoDB sunucusunun birleşimidir.
- **Veri güvenliği**, **yük dengeleme**, **performans iyileştirme** gibi avantajları vardır.

### **🔹 2.2 Ücretsiz Bir Cluster (Sandbox) Oluşturma**
1. **MongoDB Atlas paneline giriş yapın**.
2. **"Create a New Cluster" butonuna tıklayın**.
3. **Ücretsiz (Free Shared) seçeneğini seçin**.
4. **AWS, Azure veya Google Cloud’dan birini seçin**.
5. **Bölgeyi (Region) seçin** (En yakın sunucuyu seçmek hız açısından avantajlıdır).
6. **Cluster adını belirleyin** (Örneğin: `myCluster`).
7. **"Create Cluster" butonuna tıklayın**.
8. **Cluster'ın aktif olması birkaç dakika sürebilir**.

---

## **📖 Bölüm 3: MongoDB Atlas’a Bağlanma**
### **🔹 3.1 Atlas Cluster'a Bağlantı İçin Kullanıcı Ekleme**
1. **Security -> Database Access** menüsüne girin.
2. **“Add New Database User” butonuna tıklayın**.
3. **Authentication Method olarak "Password" seçin**.
4. **Bir kullanıcı adı ve şifre belirleyin**.
5. **Yetkilendirme rolünü belirleyin** (`Read and Write` veya `Admin` seçilebilir).
6. **"Add User" butonuna tıklayın**.

### **🔹 3.2 IP Erişimi Ayarlama**
1. **Security -> Network Access** menüsüne gidin.
2. **"Add IP Address" butonuna tıklayın**.
3. **Tüm IP'lerden bağlanmak için** `0.0.0.0/0` ekleyebilirsiniz (Güvenlik açısından önerilmez!).
4. **Sadece kendi IP adresinizden bağlanmak için "Add Current IP" seçeneğini kullanın**.

### **🔹 3.3 Compass ile Bağlantı Kurma (GUI Arayüzü ile)**
1. **MongoDB Compass'ı [buradan](https://www.mongodb.com/try/download/compass) indirin ve kurun**.
2. **MongoDB Atlas -> Connect -> Connect with MongoDB Compass seçeneğine gidin**.
3. **Bağlantı URL'sini kopyalayın ve Compass’a yapıştırarak bağlanın**.

### **🔹 3.4 Node.js ile Bağlantı Kurma**
1. **MongoDB Atlas -> Connect -> Connect your application** seçeneğine gidin.
2. **Node.js bağlantı URL’sini kopyalayın**.
3. **Node.js projenize `mongoose` kütüphanesini ekleyin**:
   ```sh
   npm install mongoose
   ```
4. **Bağlantıyı sağlamak için aşağıdaki kodu kullanın**:
   ```js
   import mongoose from "mongoose";

   mongoose.connect("mongodb+srv://kullaniciadi:sifre@cluster.mongodb.net/myDatabase", {
       useNewUrlParser: true,
       useUnifiedTopology: true
   }).then(() => console.log("MongoDB Atlas'e başarıyla bağlandı!"))
     .catch(err => console.log("Bağlantı hatası:", err));
   ```

---

## **📖 Bölüm 4: MongoDB Atlas Üzerinde CRUD İşlemleri**
### **🔹 4.1 Koleksiyon (Collection) ve Doküman (Document) Yapısı**
MongoDB **belge tabanlı (document-oriented)** bir veritabanıdır. Geleneksel SQL veritabanları gibi **tablo ve satır** yerine **koleksiyon (collection) ve doküman (document)** kullanır.

### **🔹 4.2 Atlas Üzerinde CRUD İşlemleri**
#### **1️⃣ Create (Veri Ekleme)**
```js
db.users.insertOne({ name: "Ali", age: 25, city: "Ankara" })
```
```js
db.users.insertMany([
    { name: "Ayşe", age: 22, city: "İstanbul" },
    { name: "Mehmet", age: 30, city: "İzmir" }
])
```

#### **2️⃣ Read (Veri Okuma)**
```js
db.users.find().pretty()
db.users.findOne({ name: "Ali" })
```

#### **3️⃣ Update (Veri Güncelleme)**
```js
db.users.updateOne({ name: "Ali" }, { $set: { age: 26 } })
db.users.updateMany({}, { $inc: { age: 1 } })
```

#### **4️⃣ Delete (Veri Silme)**
```js
db.users.deleteOne({ name: "Ayşe" })
db.users.deleteMany({})
```

---

## **📖 Bölüm 5: MongoDB Atlas Güvenliği ve Yedekleme**
### **🔹 5.1 Veritabanı Güvenliği**
- **Güçlü bir şifre kullanın** ve `DATABASE_USER` yetkilerini gereksiz yere genişletmeyin.
- **IP kısıtlamalarını etkinleştirin**, herkese açık (`0.0.0.0/0`) erişimi sınırlandırın.
- **Şifreleri `.env` dosyasında saklayın**, kod içinde yazmayın.

### **🔹 5.2 Veritabanı Yedekleme**
- **MongoDB Atlas -> Backup -> Snapshot Scheduling** üzerinden otomatik yedekleme ayarlayın.
- **Manuel yedek almak için `mongodump` kullanabilirsiniz**:
   ```sh
   mongodump --uri "mongodb+srv://kullaniciadi:sifre@cluster.mongodb.net/myDatabase" --out backup/
   ```
- **Yedeği geri yüklemek için**:
   ```sh
   mongorestore --uri "mongodb+srv://kullaniciadi:sifre@cluster.mongodb.net/myDatabase" backup/
   ```

---

## **📖 Bölüm 6: MongoDB Atlas Performans Optimizasyonu**
### **🔹 6.1 Performans İzleme**
- **MongoDB Atlas -> Performance Advisor**'ı kullanarak sorgularınızı optimize edin.
- **İndeksleme (`Indexes`) kullanarak sorgularınızı hızlandırın**:
   ```js
   db.users.createIndex({ name: 1 })
   ```
- **Sharding (Bölme) ile büyük verileri ölçeklendirin**.

---

# **🎯 SONUÇ**
Bu eğitimde **MongoDB Atlas'ın kurulumu, kullanımı, bağlantı yöntemleri, CRUD işlemleri, güvenlik, yedekleme ve optimizasyon** gibi konuları ele aldık. 🚀  
Bir sonraki aşamada **MongoDB Atlas ile gelişmiş analizler ve büyük veri yönetimi** konularına geçebiliriz.