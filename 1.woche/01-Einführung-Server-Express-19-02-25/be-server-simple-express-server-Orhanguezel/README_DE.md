# Ein fast einfacher Server in Express.js

Mit diesem Projekt kannst Du üben, einen Server einzurichten, der einfache Anfragen in Express.js bearbeitet

## Was Du tun wirst

Du wirst einen Server mit vier **Endpunkten** einrichten und dabei das Express.js-Framework verwenden.

Die Endpunkte werden nur auf **GET**-Anfragen antworten und einen **String** als Antwort senden.

**Aufgaben

### Aufgabe 1 - Vorbereitung

1. Installiere das express.js npm-Paket `npm i express`.
2. Erstelle eine Datei für Deinen Server (`server.js`)

### Aufgabe 2 - Einrichten Deines Servers

Verwende das folgende Code-Snippet, um Deinen Server einzurichten:

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
```

### Aufgabe 3 - Füge eine GET-Anfrage zu '/hello' hinzu

1. Erstelle einen Endpunkt, der auf den Pfad `/hello` antwortet.
2. Diese Middleware sollte eine **Antwort** mit dem folgenden String senden:

```text
Hello to you too!
```

### Aufgabe 4 - Füge eine GET-Anfrage zu '/time' hinzu

1. Erstelle einen Endpunkt, der auf den Pfad `/time` antwortet.
2. Diese Middleware sollte eine `Antwort` mit der aktuellen Uhrzeit und dem Datum im [ISO-Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgeben (`2011-10-05T14:48:00.000Z`)

> Recherche:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Datumsobjekt [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Aufgabe 5 - Füge eine GET-Anfrage zu '/random' hinzu

1. Erstelle einen Endpunkt, der auf den Pfad `/random` antwortet.
2. Diese Middleware sollte eine **Antwort** mit einer Zufallszahl senden.

> Recherche:
>
> [Math.random() [de]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Aufgabe 6 - Füge eine GET-Anfrage zu '/fact' hinzu

1. Erstelle einen Endpunkt, der auf den Pfad `/fact` antwortet.
2. Diese Middleware sollte eine **Antwort** mit dem folgenden String senden:

```text
JavaScript was created in about 10 days!
```
