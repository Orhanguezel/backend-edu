Aşağıda, MongoDB'de **`cats`** adlı bir veritabanı oluşturup, içinde **kedileri** saklayan bir koleksiyon oluşturacağız ve aşama aşama MongoDB komutlarını çalıştıracağız. 

### **📌 AŞAMA 1: `cats` Veritabanını Kullan**
Öncelikle `cats` adlı veritabanını kullan veya oluştur:

```sh
use cats
```

Bu komut, **`cats`** adlı bir veritabanına geçiş yapar. Eğer böyle bir veritabanı yoksa, MongoDB bunu otomatik olarak oluşturur.

---

### **📌 AŞAMA 2: `cats` Koleksiyonuna Kedileri Ekle**
Koleksiyona bazı kedi belgeleri (`documents`) ekleyelim.

#### **1. Tek bir kedi ekleme (`insertOne`)**
```sh
db.cats.insertOne({ name: "Missy", age: 5 })
```

Bu komut, `cats` koleksiyonuna `name` ve `age` alanlarını içeren bir belge ekler.

#### **2. Birden fazla kedi ekleme (`insertMany`)**
```sh
db.cats.insertMany([
    { name: "Kissy", age: 3 },
    { name: "Purr", age: 7 },
    { name: "Snuffle", age: 4 },
    { name: "Boog", age: 2 },
    { name: "Maul", age: 9 },
    { name: "Gorthalax Bonechewer", age: 6 }
])
```

Bu komut, **birden fazla** kedi belgesini aynı anda koleksiyona ekler.

---

### **📌 AŞAMA 3: `cats` Koleksiyonundaki Verileri Listele**
#### **1. Tüm kedileri listele (`find()`)**
```sh
db.cats.find().pretty()
```

Bu komut, `cats` koleksiyonundaki tüm belgeleri okunabilir bir biçimde (`pretty`) ekrana yazdırır.

#### **2. Belirli bir kediyi bul (`findOne()`)**
```sh
db.cats.findOne({ name: "Boog" })
```

Bu komut, adı `"Boog"` olan ilk belgeyi getirir.

Örnek çıktı:
```json
{
  "_id": ObjectId("65e7a4c2b7b9f3d8c89b1234"),
  "name": "Boog",
  "age": 2
}
```

#### **3. Sadece kedilerin isimlerini listele (`find() & projection`)**
```sh
db.cats.find({}, { name: 1, _id: 0 })
```

Bu komut, yalnızca **`name`** alanlarını gösterir.

Örnek çıktı:
```json
[
  { "name": "Missy" },
  { "name": "Kissy" },
  { "name": "Purr" },
  { "name": "Snuffle" },
  { "name": "Boog" },
  { "name": "Maul" },
  { "name": "Gorthalax Bonechewer" }
]
```

---

### **📌 AŞAMA 4: Kedileri Güncelle**
#### **1. Tek bir kediyi güncelle (`updateOne`)**
```sh
db.cats.updateOne({ name: "Boog" }, { $set: { age: 4 } })
```

Bu komut, adı `"Boog"` olan kedinin yaşını `4` olarak günceller.

#### **2. Tüm kedilerin yaşını 1 artır (`updateMany`)**
```sh
db.cats.updateMany({}, { $inc: { age: 1 } })
```

Bu komut, koleksiyondaki tüm kedilerin yaşını **1 artırır**.

---

### **📌 AŞAMA 5: Kedileri Sil**
#### **1. Belirli bir kediyi sil (`deleteOne`)**
```sh
db.cats.deleteOne({ name: "Purr" })
```

Bu komut, adı `"Purr"` olan **ilk belgeyi** siler.

#### **2. Tüm kedileri sil (`deleteMany`)**
```sh
db.cats.deleteMany({})
```

Bu komut, **koleksiyondaki tüm belgeleri siler.** Dikkatli olun!

---

### **📌 AŞAMA 6: İstatistik ve Sorgular**
#### **1. Koleksiyondaki toplam kedi sayısını öğren (`countDocuments`)**
```sh
db.cats.countDocuments()
```

Bu komut, `cats` koleksiyonunda kaç belge olduğunu gösterir.

#### **2. Ortalama yaş hesapla (`aggregate`)**
```sh
db.cats.aggregate([
    { $group: { _id: null, ortalamaYas: { $avg: "$age" } } }
])
```

Bu komut, kedilerin yaş ortalamasını hesaplar.

#### **3. Kedileri yaşlarına göre sıralı listele (`sort`)**
```sh
db.cats.find().sort({ age: 1 })
```

Bu komut, kedileri **yaşlarına göre artan sırayla** listeler.

---

### **📌 AŞAMA 7: `cats` Koleksiyonunu veya `cats` Veritabanını Sil**
#### **1. Koleksiyonu tamamen sil (`drop()`)**
```sh
db.cats.drop()
```

Bu komut, `cats` koleksiyonunu tamamen siler.

#### **2. Tüm veritabanını sil (`dropDatabase()`)**
```sh
db.dropDatabase()
```

Bu komut, **`cats` veritabanını tamamen siler.** Dikkatli olun!

---

### **📌 SONUÇ**
Bu adımları takip ederek MongoDB'de `cats` adlı bir veritabanı oluşturup, **CRUD (Create, Read, Update, Delete) işlemlerini** başarıyla gerçekleştirebilirsiniz. 🚀