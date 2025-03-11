# **CSV Dönüştürücü (CSV Converter)**

Bu, belirli bir kütüphaneyi nasıl kullanacağını araştırmanı ve bir dosyaya nasıl yazacağını öğrenmeni gerektiren bir problem çözme alıştırmasıdır.

`[csvtojson](https://www.npmjs.com/package/csvtojson)` kütüphanesini kullanarak **CSV dosyalarını JSON formatına dönüştüren** bir program oluştur.  
Bu kütüphane örneklerinde **CommonJS** modül sistemi kullanılıyor, ancak sen **`import csv from "csvtojson"`** kullanabilirsin.

---

## **📌 Gereksinimler (Requirements)**  

Aşağıdaki kullanım örneklerini incele.  

✅ **Program şu kurallara uygun olmalıdır:**  
1. **Bir veya iki parametre alabilir.**  
   - Eğer **hiçbir parametre verilmezse**, program kullanıcıya bir mesaj yazdırarak çıkış yapmalıdır.  

2. **Eğer sadece bir parametre verilirse:**  
   - Program, **bu CSV dosyasını JSON formatına çevirerek aynı dizine kaydetmelidir.**  

3. **Eğer iki parametre verilirse:**  
   - Program, **CSV dosyasını belirtilen JSON dosyası adına kaydetmelidir.**  

4. **Program, dosya okuma veya yazma hatasıyla karşılaşırsa:**  
   - Kullanıcıya hata mesajı göstermelidir.  

---

## **📌 Kullanım Örnekleri (Examples)**  

### **1️⃣ Tek Argüman Verildiğinde (Kaynak CSV)**  
```bash
$ node index.js demo.csv
> "JSON file saved at: demo.json"
```
✅ **CSV dosyası (`demo.csv`), aynı dizinde `demo.json` olarak kaydedildi.**

---

### **2️⃣ İki Argüman Verildiğinde (Kaynak CSV ve JSON Çıkışı)**  
```bash
$ node index.js demo.csv hello.json
> "JSON file saved at: hello.json"
```
✅ **CSV dosyası (`demo.csv`), belirtilen isimde (`hello.json`) kaydedildi.**

---

### **3️⃣ Hiçbir Argüman Verilmezse**  
```bash
$ node index.js
> "Please provide a csv file to convert to JSON"
```
🚨 **Kullanıcıdan en az bir dosya ismi bekleniyor, ancak sağlanmadı.**

---

### **4️⃣ Hata Durumu**  
```bash
$ node index.js demo.csv hello.json
> "Something went wrong, Could not write json to: hello.json"
```
🚨 **Program, JSON dosyasına yazamadı ve kullanıcıyı bilgilendirdi.**

---

## **🎯 Bonus Görev**  
Bir araştırma görevi olarak, programı **terminalde her yerden çalıştırabilmek** için nasıl ayarlayabileceğini öğren.  

📌 **Hedef:**  
Programı şu şekilde çalıştırabilmelisin:
```bash
$ csv2json pop.csv pop.json
```
**Terminalde herhangi bir klasörden çalıştırılabilir olmalı.**  

🚀 **Bunu nasıl yapacağını araştır ve çözümünü uygula!** 🎯