# Basit Kullanıcı Yönetimi API'si  

Kullanıcıları yönetmek için bir API oluşturun. API, kullanıcıları listeleme, oluşturma, güncelleme ve silme işlemlerini gerçekleştirecek uç noktalara sahip olacak.  

---

## **Görevler**  

### **Görev 1**  

- `express` paketini bağımlılık olarak yükleyin.  
- `server.js` dosyasını düzenleyerek sunucunun **5000** numaralı portta çalışmasını sağlayın.  

---

### **Görev 2**  

- Bir **kullanıcı dizisi (array)** oluşturun.  
- Diziyi aşağıdaki gibi bazı başlangıç verileriyle doldurun:  

```js
const users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "Sağlığım ve moralim iyi durumda.",
  },
];
```

---

### **Görev 3**  

- **Tüm kullanıcıları döndüren bir GET `/user` endpointi** oluşturun.  

**Çıktı:**  

```json
// GET /user için çıktı
[
  {
    "id": 1,
    "name": "Jane Austen",
    "status": "Sağlığım ve moralim iyi durumda."
  }
]
```

---

### **Görev 4**  

- **Belirtilen ID’ye sahip bir kullanıcıyı döndüren bir GET `/user/:id` endpointi** oluşturun.  

> **İpucu:** `id` değerini yakalamak için `param` özelliğini kullanmalısınız.  

**Çıktı:**  

```json
// GET /user/1 için çıktı
{
  "id": 1,
  "name": "Jane Austen",
  "status": "Sağlığım ve moralim iyi durumda."
}
```

---

### **Görev 5**  

- **Yeni bir kullanıcı ekleyen bir POST `/user` endpointi** oluşturun.  
- Yeni kullanıcının bilgileri **istek gövdesinden (`request body`) alınmalı.**  
- Kullanıcıya **otomatik olarak yeni bir ID atanmalı.**  

**Girdi:**  

```json
// POST /user
{
  "name": "Daria Morgendorffer",
  "status": "Ben seçici bir şekilde ilgilenen bir bireyim."
}
```

**Çıktı:**  

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "Ben seçici bir şekilde ilgilenen bir bireyim."
}
```

---

### **Görev 6**  

- **Belirtilen ID’ye sahip bir kullanıcıyı güncelleyen bir PATCH `/user/:id` endpointi** oluşturun.  
- Güncellenecek kullanıcıyı **`id` parametresine göre bulun**.  
- Yeni bilgiler **istek gövdesinden (`request body`) alınmalı.**  

**Girdi:**  

```json
// PATCH /user/2
{
  "status": "Ben asosyal değilim. Sadece insanları sevmiyorum."
}
```

**Çıktı:**  

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "Ben asosyal değilim. Sadece insanları sevmiyorum."
}
```

---

## **Ekstra Görevler (Bonus)**  

- **PATCH endpointinde sadece `status` alanının güncellenmesine izin verin.**  
- **Kullanıcıları silmek için bir DELETE endpointi ekleyin.**  
- **Kullanıcıları bellekte (`in-memory`) saklamak yerine bir dosyada veya veritabanında tutun.**  