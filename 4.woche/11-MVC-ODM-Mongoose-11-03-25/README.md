# mongoose, MVC ,ODM/ORM / Dienstag 11.03.25

## Lernziele :

1. Was ist `MVC` ?

- Model, View, Controller

- **Model** repräsentiert die Daten einer Anwendung
- **View** repräsentiert die Benutzeroberfläche
- **Controller** handhabt die Interaktion zwischen Views und Modellen

2. Was ist `ODM / ORM` ?

**ODM**

- Object Document Mapping
- In MongoDB "mappen" diese Bibliotheken eine `collection` zu einem `Model`

- Ein Model ist im Grunde wie eine JavaScript-Klasse - Anstatt `db.feedbacks.find()` zu machen - Würdest du `Feedback.find()` machen

        - Das größte ODM für MongoDB heißt Mongoose

3. Was ist `mongoose` ?

- Mongoose ist ein ODM, es mappt `Collections` zu Modellen

4. Warum `Mongoose` ?

- Sie ermöglichen es einem Programmierer, sich auf weniger auf einmal zu konzentrieren
  - Anstatt an Datenbank/Collection/Dokument denken zu müssen
  - Kannst du einfach an die Konzepte denken und die Details werden abstrahiert

5. Was ist `Models` ?

6. Was ist `Schema` ?

- Um Mongoose zu verwenden, müssen wir zuerst die Form unserer Daten definieren
- In Mongoose definieren wir dies, indem wir ein `Schema` erstellen

- Ein Schema ist ein Konfigurationsobjekt für ein Model
  - Es definiert die Form der Dokumente innerhalb einer MongoDB Collection
  - Es ist mit einer MongoDB Collection verbunden
  - Es definiert die Form der Dokumente innerhalb dieser Collection

7. Nutzung von MongoDB mit Mongoose

### Resources :

- [Mongoose](https://mongoosejs.com/)

- [Mongoose connection events](https://mongoosejs.com/docs/connections.html#connection-events)

- [Mongoose Video](https://www.youtube.com/watch?v=DZBGEVgL2eE)

- [Mongoose models](https://mongoosejs.com/docs/models.html)

- [Mongoose schemas](https://mongoosejs.com/docs/guide.html)

- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

- [MVC Video](https://www.youtube.com/watch?v=DUg2SWWK18I)

- [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping)

- [ODM](https://en.wikipedia.org/wiki/Object-document_mapping)

### Tasks :

- [be-mongoose-basic-exercises](https://classroom.github.com/a/RiJN2maD)
