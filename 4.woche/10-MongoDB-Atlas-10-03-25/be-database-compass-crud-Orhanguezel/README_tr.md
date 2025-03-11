# **MongoDB CRUD MongoDB Compass ile**  

Bu alıştırma, **MongoDB Compass aracını kullanarak** bir **MongoDB veritabanına bağlanmanı** ve **CRUD işlemlerini (Oluşturma, Okuma, Güncelleme, Silme) uygulamanı** sağlayacaktır.

---

## **Görevler**

### **Görev 1 - Oluşturma (Create)**  

1. `dci` adında bir veritabanı oluştur.  
2. `dci` veritabanı içinde `faculty` adında bir koleksiyon oluştur.  
3. `faculty` koleksiyonuna aşağıdaki belgeyi ekle:

```json
{
    "name": "Hans",
    "age": 35,
    "gender": "M",
    "exp": 10,
    "subjects": ["JavaScript"],
    "type": "Full Time",
    "qualification": "Masters"
}
```

---

### **Görev 2 - Toplu Veri Ekleme (Create)**  

- **[members.json](./members.json) adlı dosyayı kullanarak** `faculty` koleksiyonuna **birden fazla belge ekle**.

---

### **Görev 3 - Okuma (Read)**  

1. **`faculty` koleksiyonundaki tüm belgeleri listele.**  
2. **Toplam kaç belge olduğunu say (count).**  
3. db.faculty.countDocuments()


---

### **Görev 4 - Okuma (Read)**  

1. **"qualification" alanı `Ph.D` olan tüm belgeleri getir.**  
 
   
. { "qualification": "Ph.D" }  filter, compass
. db.faculty.find({ qualification: "Ph.D" }).pretty()
oder 
db.faculty.find(
    { qualification: "Ph.D" },
    { _id: 0, name: 1, qualification: 1 }
).pretty()

2. **"exp" (deneyim yılı) `8` ile `12` arasında olan tüm belgeleri getir.** 
   
. { "exp": { "$gte": 8, "$lte": 12 } }
. db.faculty.find({ exp: { $gte: 8, $lte: 12 } }).pretty()






---

### **Görev 5 - Okuma (Read)**  

1. **"subjects" (dersler) alanında `Python` veya `Java` bulunan tüm belgeleri getir.**  
. { "subjects": { "$in": ["Python", "Java"] } }
. db.faculty.find({ subjects: { $in: ["Python", "Java"] } }).pretty()


2. **"subjects" içinde `Java` olan ve `exp` değeri `8` yılın üzerinde olan tüm belgeleri getir.**
.  { "subjects": "Java", "exp": { "$gt": 8 } }
. db.faculty.find({ subjects: "Java", exp: { $gt: 8 } }).pretty()


3. **"type" (çalışma türü) `Part Time` olan veya "subjects" içinde `Java` bulunan tüm belgeleri getir.** 
. { "$or": [ { "type": "Part Time" }, { "subjects": "Java" } ] }
. db.faculty.find({ 
    $or: [ 
        { type: "Part Time" }, 
        { subjects: "Java" } 
    ] 
}).pretty()


---

### **Görev 6 - Belirli Alanları Getirme (Read - Projection)**  

- **Sadece "name" (isim) ve "qualification" (nitelik) alanlarını içeren tüm belgeleri getir.** 
-  { "_id": 0, "name": 1, "qualification": 1 }
-  db.faculty.find({}, { _id: 0, name: 1, qualification: 1 }).pretty()


---

### **Görev 7 - Güncelleme (Update)**  

- **Tüm belgelerde `age` ve `exp` değerlerini 1 artır.**
-   db.faculty.updateMany({}, { $inc: { age: 1, exp: 1 } })
-   db.faculty.updateMany({}, { $inc: { age: 1, exp: 1 } })



---

### **Görev 8 - Belirli Bir Belgeyi Güncelleme (Update)**  

- **Aşağıdaki kritere uyan belgeyi bul ve güncelle:**  

```json
{ "name": "Lina" }
db.faculty.updateOne(
    { name: "Lina" },
    { $set: { type: "Part Time", qualification: "Ph.D" } }
)

```

- **Güncellendikten sonra belge şu şekilde olmalı:**  

```json
{
  "type": "Part Time",
  "qualification": "Ph.D"
}
```

---

### **Görev 9 - Tüm Belgeleri Güncelleme (Update)**  

- **Tüm öğretmen belgelerine `MongoDB` dersini (subjects içine) ekle.** 
- { "$addToSet": { "subjects": "MongoDB" } }
- db.faculty.updateMany({}, { $addToSet: { subjects: "MongoDB" } })

 

---

### **Görev 10 - Silme (Delete)**  

1. **"exp" (deneyim yılı) `10`dan az olan tüm belgeleri sil.**  
 db.faculty.deleteMany({ exp: { $lt: 10 } })

3. **"type" (çalışma türü) `Part Time` olan tüm belgeleri sil.**  
 db.faculty.deleteMany({ type: "Part Time" })

5. **"qualification" `Ph.D` olan tüm belgeleri sil.**  
   db.faculty.deleteMany({ qualification: "Ph.D" })


**Son olarak, koleksiyonda hangi belgelerin kaldığını kontrol et.** 🚀