# Erkundung von HTTP-Methoden mit einer Auto-API

In diesem Projekt erstellen wir unsere eigene Auto-API, mit den HTTP-Methoden **GET**, **POST**, **PATCH**, **DELETE**

Wir werden auch mit Request-Parametern arbeiten und mit den korrekten HTTP-Antwortstatuscodes antworten.

## Was du machen wirst

Dieses Projekt ermöglicht dir die Übung von:

> HTTP-Methoden und Antwortcodes

## Aufgaben

Für diese Aufgaben sollst du deinen Hauptserver-Code in der Datei `server.js` und Endpunkte in `routes/cars.js` schreiben.

### Aufgabe 1 - Vorbereitung

1. Initialisiere npm in deinem Projekt
   `npm init -y`
2. Setze den `package.json` Typ auf Modul
3. Installiere das express.js npm Paket
   `npm i express`
4. Erstelle eine Datei für deinen Server (`server.js`)
5. Erstelle eine Datei für deine Endpunktrouten; `mkdir routes; touch routes/cars.js`

### Aufgabe 2 

- Richte einen grundlegenden Express-Server ein, der auf Port 3000 hört
- Richte `cars.js` so ein, dass es alle Anfragen an `/cars` behandelt

### Aufgabe 3 - Initialisiere ein Array von Auto-Objekten

Du kannst wählen, welche Eigenschaften dein Objekt enthalten soll, aber es sollte mindestens eine **id** und einen **Namen** (name) haben.

```javascript
const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];
```

### Aufgabe 4 - Erstelle einen GET-Endpunkt mit dem Pfad '/cars'

Erstelle einen **GET** Endpunkt für den Pfad `/cars`. Dies sollte eine json `response` mit dem Statuscode **200** und dem Array der Autos zurückgeben.

### Aufgabe 5 - Erstelle einen GET-Endpunkt mit dem Pfad '/cars/:id'

Erstelle einen **GET** Endpunkt für den Pfad `/cars/:id`. Dies sollte:

- Eine json `response` mit einem Auto (entsprechend des id Parameters) und
- Einen Statuscode **200** zurückgeben

Aber;

- Wenn ein fehlerhafter id-Parameter angegeben wurde, sollte es den Statuscode **400** (Bad Request) zurückgeben
- Wenn eine id angegeben wurde, aber sie nicht im Array gefunden werden kann, gib den Statuscode **404** zurück

### Aufgabe 6 - Erstelle einen POST-Endpunkt mit dem Pfad '/cars'

Erstelle einen **POST** Endpunkt für den Pfad `/cars/create`. Es sollte:

- Ein Auto-Objekt zum Array der Autos hinzufügen
- Eine json `response` mit dem neu hinzugefügten Auto-Objekt und Statuscode **200** zurückgeben
- Der Inhalt (engl. "Body") der Anfrage kann wie im folgenden Beispiel aussehen;

```json
{
  "id": 4,
  "name": "Renault"
}
```

### Aufgabe 7 - Erstelle einen PATCH-Endpunkt mit dem Pfad '/cars/:id'

Erstelle einen **PATCH** Endpunkt für den Pfad `/cars/update/:id`. Es sollte:

- Ein vorhandenes Auto im Array finden (mit der id) und aktualisieren
- Eine json `response` mit der Liste der Autos (einschließlich des neu hinzugefügten) zurückgeben
- Einen Statuscode von **200**

Aber;

- Wenn ein fehlerhafter id-Parameter angegeben wurde, sollte es den Statuscode **400** (Bad Request) zurückgeben.
- Wenn eine id angegeben wurde, aber sie nicht im Array gefunden werden kann, gib den Statuscode **404** zurück.

### Aufgabe 8 - Erstelle einen DELETE-Endpunkt mit dem Pfad '/cars/:id'

Erstelle einen **DELETE** Endpunkt für den Pfad `/cars/:id`. Dies sollte:

- Das Auto finden (mit der id) und löschen
- Eine json `response` mit der Liste der Autos (ohne das gelöschte Auto) zurückgeben
- Einen Statuscode **200**

Aber;

- Wenn ein fehlerhafter id-Parameter angegeben wurde, sollte es den Statuscode **400** (Bad Request) zurückgeben.
- Wenn eine id angegeben wurde, aber sie nicht im Array gefunden werden kann, gib den Statuscode **404** zurück.
