# **Express.js ile Basit Bir Sunucu**

Bu proje, **Express.js** kullanarak basit bir sunucu kurma pratiği yapmanı sağlayacaktır.

## **Görevler**

Express.js framework’ü ile **dört farklı endpoint** (uç nokta) oluşturacaksın.

Bu **endpoints** yalnızca **GET** isteklerine yanıt verecek ve bir **string** döndürecektir.

---

### **Görev 1 - Hazırlık**

1. Express.js npm paketini yükle:  
   ```bash
   npm i express
   ```
2. `server.js` dosyasını oluştur.

---

### **Görev 2 - Sunucunu Kur**

Aşağıdaki kodu kullanarak Express.js sunucunu oluştur:

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("Sunucu dinleniyor... 🐒");
});
```

---

### **Görev 3 - GET '/hello'**

- `/hello` yoluna yapılan GET isteğine yanıt veren bir **endpoint** oluştur.
- Aşağıdaki metni yanıt olarak döndürmelidir:

```text
Sana da merhaba!
```

---

### **Görev 4 - GET '/time'**

- `/time` yoluna yapılan GET isteğine yanıt veren bir **endpoint** oluştur.
- Şu anki **tarih ve saati** yanıt olarak döndürmelidir.

> Kaynaklar:
> 
> [Date Object [tr]](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

### **Görev 5 - GET '/random'**

- `/random` yoluna yapılan GET isteğine yanıt veren bir **endpoint** oluştur.
- Yanıt olarak **rastgele bir sayı** döndürmelidir.

> Kaynaklar:
> 
> [Math.random() [tr]](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

---

### **Görev 6 - GET '/fact'**

- `/fact` yoluna yapılan GET isteğine yanıt veren bir **endpoint** oluştur.
- Aşağıdaki bilgiyi yanıt olarak döndürmelidir:

```text
JavaScript yaklaşık 10 günde oluşturuldu!
```

🚀 **Hazırsan kodlamaya başla!** 🎯