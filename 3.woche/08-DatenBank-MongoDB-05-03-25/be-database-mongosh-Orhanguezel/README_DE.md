# Einige Übungen mit mongosh

Die MongoDB `mongosh` Shell ist sehr ähnlich wie die Node REPL. Dies ist eine Reihe von Mini-Übungen, um dir beim Lernen zu helfen.

## Aufgaben

Diese Aufgaben verwenden eine Datenbank namens "catsanctuary". Um zu starten, führe einfach `use catsanctuary` in mongosh aus.

Füge deine Antworten direkt hier in die README.md ein

### Aufgabe 1

- Was macht das Folgende, wenn du es ausführst?

    ```js
    const names = ["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"]
    names.forEach(name => {
        cats.insert({name, age: Math.ceil(Math.random()*20})
    })
    ```

    - Überlege, was der Code versuchen könnte zu tun
    - Behebe die Probleme mit dem obigen Code und führe ihn aus
    - HINWEIS: Nach dem Ausführen des Codes sollte `db.cats.countDocuments()` 7 zurückgeben

### Aufgabe 2

- Wie kannst du eine Liste aller Katzen ausdrucken?
- Was ist die ObjectID von Boog?
- Was gibt das zurück, wenn du es ausführst?

    ```js
    const oneCat = db.cats.findOne()
    oneCat._id.getTimestamp()
    ```

- Erkläre, was hier passiert

    ```js
    db.cats.find().map(x=>x.name)
    ```

- Angesichts der obigen Ergebnisse, wie würdest du den Namen und die Einfügezeit in die Datenbank aller Katzen ausdrucken?
- Wie würdest du das Durchschnittsalter aller Katzen berechnen?

### **Antwort 1**  

#### Alle Katzen zur Datenbank hinzufügen  

```js
const names = ["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"];

names.forEach(name => {
    db.cats.insertOne({ name: name, age: Math.ceil(Math.random() * 20) });
});
```

**Erklärung:**  
Dieser Code fügt sieben Katzen mit zufälligem Alter (zwischen 1 und 20) in die `cats`-Sammlung der MongoDB-Datenbank ein.  

Alternativ kann auch `insertMany()` verwendet werden:  

```js
db.cats.insertMany(
    names.map(name => ({ name: name, age: Math.ceil(Math.random() * 20) }))
);
```

Nach dem Einfügen sollte `db.cats.countDocuments()` die Zahl 7 zurückgeben.

---

### **Antwort 2**  

#### Alle Katzen auflisten  

```js
db.cats.find().pretty();
```

Dieser Befehl gibt alle Dokumente in der `cats`-Sammlung in einem lesbaren Format zurück.  

---

#### Die `ObjectID` von "Boog" finden  

```js
db.cats.findOne({ name: "Boog" });
```

Beispielausgabe:  

```json
{
  "_id": ObjectId("65e7a4c2b7b9f3d8c89b1234"),
  "name": "Boog",
  "age": 7
}
```

---

#### Den Erstellungszeitpunkt eines Dokuments abrufen  

```js
const oneCat = db.cats.findOne();
oneCat._id.getTimestamp();
```

**Erklärung:**  
- `db.cats.findOne();` gibt das erste Dokument aus der `cats`-Sammlung zurück.  
- `getTimestamp()` extrahiert das Erstellungsdatum aus der `ObjectID`.

---

#### Liste aller Katzennamen abrufen  

```js
db.cats.find().map(x => x.name);
```

Dieser Code gibt eine Liste mit allen Katzennamen in der Datenbank zurück.  

Beispielausgabe:  

```js
["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"]
```

---

#### Namen und Erstellungszeit aller Katzen ausgeben  

```js
db.cats.find().forEach(cat => {
    print(`Name: ${cat.name}, Erstellt am: ${cat._id.getTimestamp()}`);
});
```

---

#### Durchschnittsalter aller Katzen berechnen  

```js
db.cats.aggregate([
    { $group: { _id: null, durchschnittsalter: { $avg: "$age" } } }
]);
```

Dieser Code berechnet das Durchschnittsalter aller Katzen in der Sammlung.


