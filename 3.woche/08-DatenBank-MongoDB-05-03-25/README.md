# DatenBank, MongoDB / Mittwoch 05.05.25

## Lernziele :

1. Was ist eine `Datenbank`?

- Eine Datenbank ist eine strukturierte Sammlung von Daten
- Datenbanken speichern, greifen auf und manipulieren riesige Mengen an Informationen zu

2. `Datenbank` vs. `Server` ?

- ein Server ist ein Computer, der anderen Computern Dienste bereitstellt.

3. Datenbanktypen - `SQL` vs `NoSQL` ?

**SQL**

- Sehr verbreitet
- Basieren auf der SQL-Sprache
- Sehr strukturierte Daten

- Wenn Sie eine relationale Datenbank benötigen.
- Wenn Sie Daten in Tabellen speichern müssen.
- Wenn Sie komplexe Abfragen durchführen müssen.
- Wenn Sie Daten in einem strukturierten Format speichern müssen.
- Wenn Sie Daten auf einem einzelnen Server speichern müssen.

**NoSQL-Datenbanken**

- Im Grunde genommen jede Datenbank, die nicht SQL ist

- Wenn Sie eine nicht-relationale Datenbank benötigen.
- Wenn Sie Daten in Dokumenten speichern müssen.
- Wenn Sie einfache Abfragen durchführen müssen.
- Wenn Sie Daten in einem unstrukturierten Format speichern müssen.

4. Warum eine `Datenbank` verwenden?

-Eine Datenbank wird verwendet, um Daten zu speichern. Es ist eine gute Praxis, eine Datenbank zur Speicherung von Daten zu verwenden, da dies den Zugriff, die Verwaltung und die Aktualisierung der Daten erleichtert. Es ist auch eine gute Praxis, eine Datenbank zur Speicherung sensibler Informationen wie Passwörter, API-Schlüssel usw. zu verwenden.

5. Wie verwendet man eine `Datenbank`?

- Um eine Datenbank zu verwenden, müssen Sie einen Datenbank-Server installieren. Es gibt zwei Arten von Datenbank-Servern: lokale und entfernte Server.
- Um eine Datenbank zu verwenden, müssen Sie eine Verbindung zum Datenbank-Server herstellen und Operationen wie Einfügen, Aktualisieren, Löschen usw. ausführen.

6. Lokale vs. entfernte `Datenbank`.

- Ein lokaler Datenbank-Server wird auf Ihrem Computer installiert, während ein entfernter Datenbank-Server auf einem entfernten Server installiert wird. Ein lokaler Datenbank-Server eignet sich gut für Entwicklung und Tests, während ein entfernter Datenbank-Server für die Produktion geeignet ist.

7. **MongoDB**

- MongoDB ist eine auf Dokumenten basierende NoSQL-Datenbank

  - Du speicherst Daten, die als Dokumentensammlungen organisiert sind

- Die Dokumente sind eigentlich nicht JSON

- Sie sind BSON

- [Bson MongoDB](https://www.mongodb.com/resources/languages/bson#bson-specifications-and-bson-types)

8. `IDS` in MongoDB.

- Es gibt zwei Hauptwege, IDs zu erstellen

  - Automatisch inkrementierte Zahl

    - `{ id: 1 }`
    - `{ id: 2 }`
    - `{ id: 3 }`

  - Vollständig zufällige Strings
    - `{ id: "62255c53-3984-4c55-8a80-5ab2be6b176c" }`
    - `{ id: "053693df-9112-4305-84f2-0ad8f367acb8" }`
    - `{ id: "59b7b4d9-3737-4c69-b2f3-dcba35790f43" }`

> Die 12-Byte-ObjectId besteht aus:
>
> - Einem 4-Byte-Zeitstempel, der die Erstellungszeit der ObjectId darstellt
> - Einem 5-Byte-Zufallswert, der pro Prozess generiert wird, einzigartig für Maschine und Prozess
> - Einem 3-Byte-inkrementierenden Zähler, der mit einem zufälligen Wert initialisiert wird

### Resources :

- [Was ist ein DB](https://www.youtube.com/watch?v=hRulZhTtUTg)

- [SQL vs NOSQL](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

- [MongoDB](https://www.mongodb.com/)

- [MongoDB Video Introduction](https://www.youtube.com/watch?v=-bt_y4Loofg)

- [MongoDB Installation](https://www.mongodb.com/docs/manual/installation/)

- [DatenBank Folien](./assets/MongoDB.pdf)

- [MongoDb shell](https://www.mongodb.com/docs/mongodb-shell/run-commands/)

### Tasks :

1. `MongoDB Shell starten`
   Öffne das Terminal und starte den MongoDB Shell mit folgendem Befehl:

```js
mongosh;
```

2. Neue Datenbank `namens library` erstellen

3. Neue `title` erstellen

4. Dokument in die Collection einfügen

Beispiel :

```js
title : "Etwas",
author : "Etwas",
publishedYear : 1994
```

5. Zweites Dokument einfügen

6. Alle Dokumente abrufen

7. erste Dokument löschen

8. zweite Dokument aktualieseren
