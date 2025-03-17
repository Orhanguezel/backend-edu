### **📌 Mongoose'da `SchemaType` Nedir?**
Mongoose'da **SchemaType**, **bir şemanın (schema) içindeki bireysel alanların yapılandırmasını belirten bir nesnedir.**  
Yani, **bir alanın hangi türde olacağını, varsayılan değerini, doğrulamalarını (validation) ve diğer özelliklerini tanımlar.**  

Bir **şema (schema)** genel olarak bir **modelin** nasıl davranacağını tanımlarken, **SchemaType**, şema içindeki **tek bir alanın nasıl davranacağını belirler.**  

---

## **✅ `SchemaType` ile `Type` Arasındaki Fark**
- **SchemaType**, **Mongoose'un bir şemadaki belirli bir alan için kullandığı yapılandırma nesnesidir.**  
- **`type` sadece bir veri türünü belirtir.**  

📌 **Örnek:**
```javascript
const schema = new Schema({ name: String });

console.log(schema.path("name") instanceof mongoose.SchemaType); // true
console.log(schema.path("name") instanceof mongoose.Schema.Types.String); // true
console.log(schema.path("name").instance); // 'String'
```
✅ **`SchemaType` ile belirli bir alanın ayarlarını yönetebiliriz.**  
✅ **`schema.path("name")`, belirli bir alanın yapılandırmasını döndürür.**  

---

## **✅ Mongoose Desteklediği `SchemaType` Türleri**
| **SchemaType** | **Açıklama** |
|--------------|-------------|
| **String** | Metin verileri tutar. |
| **Number** | Sayısal veriler tutar. |
| **Boolean** | `true` veya `false` değerlerini alır. |
| **Date** | Tarih ve saat verileri saklar. |
| **Buffer** | İkili (binary) veriler tutar (örneğin resimler). |
| **Mixed** | Herhangi bir veri türünü kabul eder. |
| **ObjectId** | MongoDB’de başka bir belgeye referans tutar. |
| **Array** | Liste şeklinde veri saklar. |
| **Decimal128** | Daha hassas ondalıklı sayılar için kullanılır. |
| **Map** | Anahtar-değer (key-value) çiftleri tutar. |
| **UUID** | Benzersiz kimlikler oluşturur. |
| **BigInt** | Büyük sayıları saklar. |
| **Double** | 64-bit kayan noktalı sayılar kullanır. |
| **Int32** | 32-bit tam sayılar tutar. |

📌 **Örnek Kullanım:**
```javascript
const schema = new Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  birthDate: Date,
  profilePicture: Buffer,
  metadata: Schema.Types.Mixed,
  userId: Schema.Types.ObjectId,
  scores: [Number],
  settings: { type: Map, of: String }
});
```

---

## **✅ `type` Anahtar Kelimesi (`The type Key`)**
Mongoose, **`type` anahtar kelimesini** gördüğünde bir **SchemaType** olarak yorumlar.  

📌 **Örnek:**
```javascript
const schema = new Schema({
  name: { type: String },
  nested: {
    firstName: { type: String },
    lastName: { type: String }
  }
});
```
✅ **`type` kullanıldığında, Mongoose bu alanın bir `SchemaType` olduğunu anlar.**  

---

## **✅ `SchemaType` Seçenekleri (`SchemaType Options`)**
Her alan için **ekstra özellikler tanımlamak** mümkündür.

### **📌 Genel `SchemaType` Seçenekleri**
| **Seçenek** | **Açıklama** |
|------------|-------------|
| **`required`** | Alanın zorunlu olup olmadığını belirler. |
| **`default`** | Varsayılan bir değer atar. |
| **`unique`** | Değerlerin benzersiz olmasını sağlar. |
| **`validate`** | Özel bir doğrulama fonksiyonu ekler. |
| **`get`** | Değer alındığında bir işlem uygular. |
| **`set`** | Değer kaydedilirken bir işlem uygular. |
| **`immutable`** | Alanın değiştirilemez olmasını sağlar. |
| **`transform`** | JSON’a dönüştürülürken özel bir işlem yapar. |

📌 **Örnek Kullanım:**
```javascript
const schema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  age: { type: Number, min: 18, max: 99, default: 18 },
  email: { type: String, match: /.+\@.+\..+/ },
  isActive: { type: Boolean, default: true }
});
```

✅ **`required: true` → Alanın zorunlu olmasını sağlar.**  
✅ **`unique: true` → Benzersiz olmasını sağlar.**  
✅ **`trim: true` → String değerin başındaki ve sonundaki boşlukları siler.**  
✅ **`min: 18, max: 99` → Sayısal değerler için alt ve üst sınır belirler.**  
✅ **`match: /.+\@.+\..+/` → Email formatını kontrol eder.**  

---

## **✅ `SchemaType` Özellikleri**
Mongoose, bazı **özel işlemler için ek fonksiyonlar** sunar.

### **📌 Getters ve Setters**
**`get` ve `set` fonksiyonları**, **değeri alırken ve kaydederken özel işlemler yapmamızı sağlar.**  

📌 **Örnek:**
```javascript
const schema = new Schema({
  integerOnly: {
    type: Number,
    get: v => Math.round(v), // Sayıyı yuvarlar
    set: v => Math.round(v), // Kaydetmeden önce yuvarlar
    alias: "i"
  }
});

const Model = mongoose.model("Model", schema);
const doc = new Model();

doc.integerOnly = 2.99;
console.log(doc.integerOnly); // 3
console.log(doc.i); // 3
```
✅ **Get → `get: v => Math.round(v)` → Değer alındığında yuvarlanır.**  
✅ **Set → `set: v => Math.round(v)` → Kaydedilmeden önce yuvarlanır.**  
✅ **Alias → `alias: "i"` → Alternatif isim kullanmamızı sağlar.**  

---

## **✅ MongoDB `Indexes` ve `Unique` Kullanımı**
Mongoose'da **belirli alanlara indeksleme (index) ekleyebiliriz.**

📌 **Örnek:**
```javascript
const schema = new Schema({
  email: { type: String, unique: true, index: true }
});
```
✅ **`unique: true` → Email alanı benzersiz olmalıdır.**  
✅ **`index: true` → Veritabanında daha hızlı sorgu için indekslenir.**  

---

## **✅ `Maps` Kullanımı**
Map, **key-value (anahtar-değer) formatında verileri saklamak için** kullanılır.  

📌 **Örnek:**
```javascript
const schema = new Schema({
  socialMediaHandles: {
    type: Map,
    of: String
  }
});

const User = mongoose.model("User", schema);

const user = new User({
  socialMediaHandles: {
    github: "user123",
    twitter: "@user123"
  }
});

console.log(user.socialMediaHandles.get("github")); // "user123"
```
✅ **Map, JSON nesnesi gibi key-value (anahtar-değer) formatında veri saklar.**  
✅ **`.get("github")` → Veriye erişmek için `get()` metodu kullanılır.**  

---

## **📌 Özet**
✅ **Mongoose'da `SchemaType`, belirli bir alanın yapılandırmasını belirler.**  
✅ **`type` anahtar kelimesi kullanılarak alan türü belirlenir.**  
✅ **Yerleşik doğrulamalar (`required`, `unique`, `min`, `max`, `match`) mevcuttur.**  
✅ **Özel doğrulamalar için `validate()` fonksiyonu kullanılabilir.**  
✅ **Getters, Setters, Maps, ve Index gibi gelişmiş özellikler eklenebilir.**  

🚀 **Mongoose'da `SchemaType` sayesinde verilerimizi daha güvenli ve esnek şekilde yönetebiliriz!** 🚀