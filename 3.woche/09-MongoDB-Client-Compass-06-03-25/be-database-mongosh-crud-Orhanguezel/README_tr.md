# MongoDB CRUD İşlemleri

Bu alıştırma, MongoDB’de dört temel veri işlemini (`mongosh` kullanarak Create, Read, Update, Delete) uygulamalı olarak yapmanı sağlayacaktır.

## Yapacağın şeyler:

Aşağıdaki görevleri yerine getir ve kullandığın komutları doğrudan bu README dosyasına yaz.

---

### Görev 1: Veritabanı Oluştur

`mongosh` kullanarak yeni bir veritabanı oluştur veya ona bağlan. Veritabanının adı: `mongoCrud`.

---

### Görev 2: Tek bir belge (ve collection) oluştur

`tasks` isimli collection’a aşağıdaki belgeyi ekle:

```json
{ lernen: "JS", completed: true }
```

---

### Görev 3: Birden fazla doküman ekle

Aşağıdaki belgeleri tek bir komut kullanarak `tasks` collection’una ekle:

```json
[
  { lernen: "JS", completed: true },
  { lernen: "Html", completed: true },
  { lernen: "React", completed: true },
  { lernen: "Typescript", completed: false }
]
```

---

### Görev 4: tasks collection’undaki tüm verileri oku

Tüm belgeleri listele.

---

### Görev 5: Belirli belgeleri oku

Sadece `completed: true` değerine sahip belgeleri listele.

---

### Görev 4: Dokümanı Güncelle (updateOne)

`lernen: "Html"` olan dokümanı güncelle ve completed durumunu `false` yap.

---

### Görev 5: Birden fazla dokümanı güncelle (updateMany)

`completed: false` olan tüm dokümanları bul ve bunların completed değerlerini `true` olarak güncelle.

---

### Görev 6: Bir dokümanı sil (deleteOne)

`lernen: "Html"` olan dokümanı sil.

---

### Görev 6: Tüm dokümanları sil (deleteMany)

`tasks` collection'ındaki bütün belgeleri sil. Hangi komutu kullandın?

---

### Bonus Görevler:

**Bonus Görev 1:**

- Yeni bir veritabanı oluştur: `developers`
- İçinde `profiles` isimli collection oluştur.
- Aşağıdaki belgeyi ekle:

```js
{
  name: 'Justiina Puupää',
  job: 'Web Developer',
  address: {
    country : 'Spain',
    code: 1111
  }
}
```

---

## Yanıtlarını Buraya Yaz:

Her komutu buraya yaz ve uygulama sonuçlarını not al. Görevleri sırasıyla ve eksiksiz tamamla. 🚀