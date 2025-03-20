## **Mongoose Queries (Sorgular) Açıklaması**  

Mongoose, MongoDB ile etkileşim kurmak için kullanılan bir **ODM (Object Data Modeling)** kütüphanesidir.  
Bir MongoDB koleksiyonundaki belgeleri (documents) **CRUD (Create, Read, Update, Delete) işlemleriyle** yönetmek için çeşitli **sorgu metodları** sağlar.  

---

## **📌 Mongoose'de Query (Sorgu) Nedir?**  
Mongoose'de bir **query (sorgu)**, veritabanında veri çekmek, güncellemek veya silmek için kullanılan bir nesnedir.  

Bir **query nesnesi**, çalıştırılmadan önce **zincirleme (chaining) ile yapılandırılabilir** ve `.exec()` veya `await` ile çalıştırıldığında verileri getirir.

### **Örnek:**
```js
const Person = mongoose.model("Person", yourSchema);

// `find()` ile bir sorgu oluşturuyoruz ama henüz çalıştırmadık!
const query = Person.find({ age: { $gt: 25 } });

// `exec()` veya `await` ile çalıştırıyoruz
const result = await query.exec();
console.log(result);
```

Burada `.find({ age: { $gt: 25 } })` ile **25 yaşından büyük kişileri** sorguluyoruz, ancak **henüz çalıştırmadık**.  
Gerçekten verileri almak için `.exec()` fonksiyonunu veya `await` kullanmamız gerekiyor.

---

## **📌 Mongoose'de CRUD Query Metodları**  

Mongoose, aşağıdaki temel **CRUD işlemleri** için çeşitli query metodları sağlar:

| **İşlem** | **Metodlar** |
|-----------|-------------|
| **Create (Oluşturma)** | `Model.create()` |
| **Read (Okuma)** | `Model.find()`, `Model.findOne()`, `Model.findById()` |
| **Update (Güncelleme)** | `Model.updateOne()`, `Model.updateMany()`, `Model.findByIdAndUpdate()` |
| **Delete (Silme)** | `Model.deleteOne()`, `Model.deleteMany()`, `Model.findByIdAndDelete()` |

---

## **📌 1️⃣ Okuma (Read) Query'leri**  

### **🔹 Model.find()**
**Bir koleksiyondaki tüm belgeleri veya belirli kriterlere uyan belgeleri getirir.**  
- Eğer parametre verilmezse **tüm belgeleri döndürür.**
- Eğer **filtre (query object)** verilirse, sadece filtreye uyan belgeleri döndürür.

```js
// Tüm kişileri getir
const allPersons = await Person.find();

// 25 yaşından büyük kişileri getir
const olderPersons = await Person.find({ age: { $gt: 25 } });

// Sadece `name` ve `age` alanlarını getir
const selectedFields = await Person.find({}, "name age");
```

---

### **🔹 Model.findOne()**
**Belirli bir kriteri sağlayan tek bir belgeyi getirir.**  
- Eğer birden fazla belge eşleşirse, **ilk bulunanı döndürür.**
- Eğer hiç belge bulunmazsa **null döner.**

```js
const person = await Person.findOne({ "name.last": "Doe" });
console.log(person);
```

---

### **🔹 Model.findById()**
**Belirtilen `_id` değerine sahip tek bir belgeyi getirir.**  
- `_id` değeri MongoDB'nin **ObjectId** tipinde olmalıdır.

```js
const person = await Person.findById("65c1d24f9f1a2c6a5b8e7e20");
console.log(person);
```

---

## **📌 2️⃣ Güncelleme (Update) Query'leri**  

### **🔹 Model.updateOne()**
**Belirli bir belgeyi günceller.**  
- İlk eşleşen belgeyi günceller.
- `{ new: true }` kullanılırsa **güncellenmiş belgeyi döndürür.**

```js
await Person.updateOne({ name: "John" }, { age: 30 });
```

---

### **🔹 Model.updateMany()**
**Birden fazla belgeyi günceller.**

```js
await Person.updateMany({ age: { $lt: 18 } }, { isMinor: true });
```

---

### **🔹 Model.findByIdAndUpdate()**
**Belirtilen `_id` değerine sahip belgeyi günceller ve döndürür.**  

```js
const updatedPerson = await Person.findByIdAndUpdate(
  "65c1d24f9f1a2c6a5b8e7e20",
  { age: 35 },
  { new: true } // Güncellenmiş belgeyi döndür
);
console.log(updatedPerson);
```

---

## **📌 3️⃣ Silme (Delete) Query'leri**  

### **🔹 Model.deleteOne()**
**Belirli bir kriteri sağlayan **ilk** belgeyi siler.**

```js
await Person.deleteOne({ name: "John" });
```

---

### **🔹 Model.deleteMany()**
**Tüm eşleşen belgeleri siler.**

```js
await Person.deleteMany({ age: { $lt: 18 } });
```

---

### **🔹 Model.findByIdAndDelete()**
**Belirtilen `_id` değerine sahip belgeyi siler ve döndürür.**

```js
const deletedPerson = await Person.findByIdAndDelete("65c1d24f9f1a2c6a5b8e7e20");
console.log(deletedPerson);
```

---

## **📌 4️⃣ Sorgu Kullanımı - Promises ve Async/Await**  

Mongoose'de sorgular **"thenable"** nesnelerdir, yani **`.then()` ve `await` ile çalıştırılabilirler.**  

### **🔹 `await` Kullanımı**
```js
const persons = await Person.find({ age: { $gt: 25 } });
console.log(persons);
```

### **🔹 `.then()` Kullanımı**
```js
Person.find({ age: { $gt: 25 } }).then((persons) => {
  console.log(persons);
});
```

> 📌 **Not:** `.then()` çağrıldığında sorgu çalıştırılır. Aynı sorguya **birden fazla `.then()` çağrılırsa hata verir!**

```js
const query = Person.find();
await query.then(() => console.log("Executed 1"));
// await query.then(() => console.log("Executed 2")); // ❌ HATA!
```

---

## **📌 5️⃣ `populate()` Kullanımı (Referanslı Belgeleri Getirme)**  

MongoDB'de **ilişkili verileri `populate()` ile çekebiliriz.**  
Eğer bir belgenin içinde başka bir koleksiyona ait **ID referansı** varsa, `populate()` ile o veriyi çekebiliriz.

### **Örnek:**  

```js
const animal = await Animal.findOne({ name: "Bobby" }).populate("owner");
console.log(animal);
```

> **Bu işlem SQL’deki `JOIN` gibi çalışır.**

---

## **📌 6️⃣ Query Builder Kullanımı**  
Query'leri daha esnek bir şekilde yazabiliriz.

### **🔹 Normal JSON ile Sorgu:**
```js
await Person.find({
  occupation: /host/,
  "name.last": "Ghost",
  age: { $gt: 17, $lt: 66 },
  likes: { $in: ["vaporizing", "talking"] },
})
  .limit(10)
  .sort({ occupation: -1 })
  .select({ name: 1, occupation: 1 })
  .exec();
```

### **🔹 Query Builder ile Sorgu:**
```js
await Person.find({ occupation: /host/ })
  .where("name.last")
  .equals("Ghost")
  .where("age")
  .gt(17)
  .lt(66)
  .where("likes")
  .in(["vaporizing", "talking"])
  .limit(10)
  .sort("-occupation")
  .select("name occupation")
  .exec();
```

> **Bu yöntemle query daha okunaklı hale gelir.**

---

### **📌 Sonuç**
- **Mongoose query'leri** ile **CRUD işlemleri** yapılabilir.  
- **Referanslı veriler `populate()` ile çekilebilir.**  
- **Sorgular `await`, `.exec()`, `.then()` ile çalıştırılabilir.**  
- **Query builder ile esnek ve okunaklı sorgular yazılabilir.** 🚀