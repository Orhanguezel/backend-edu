# Verwendung von Middleware zum Protokollieren von Anfragen an eine API

Ein **Server-Log** ist ein Textdokument, das alle registrierten Aktivitäten auf einem Server enthält. Es kann dir Details darüber geben, wie, wann und wer auf deine Anwendung zugegriffen hat.

## Aufgaben

Um einen Server in der realen Welt zu simulieren, wirst du einige Server-Endpoints erstellen, um Anfragen von einem Client zu bearbeiten. In der realen Welt wird der Server auch alle Anfragen an den Server protokollieren. Du wirst eine Middleware-Funktion schreiben, um dies zu tun.

Eine Hilfsfunktion wurde bereits für dich geschrieben, die Daten auf das Dateisystem schreibt.

### Aufgabe 1 - Endpoints

Erstelle in der Datei `server.js` die folgenden Endpoints. Sie können alles zurückgeben, was du möchtest.

- Methode: `GET`, Pfad: `"/travel"`
- Methode: `GET`, Pfad `"/search"`
- Methode: `POST`, Pfad `"/subscribe"`
- Methode: `POST`, Pfad `"/createBooking"`
- Methode: `PATCH`, Pfad `"/update"`

### Aufgabe 2 - Dokumentation

Lies und lerne über die folgenden Express **request** Objekteigenschaften;

1. [ip](http://expressjs.com/en/4x/api.html#req.ip)
2. [method](http://expressjs.com/en/4x/api.html#req.method)
3. [originalUrl](http://expressjs.com/en/4x/api.html#req.originalUrl)

### Aufgabe 3 - Middleware

Erstelle eine neue Datei `logger.js`. Hier wirst du deine Middleware schreiben. Innerhalb von `logger.js`;

- Erstelle eine Middleware-Funktion namens `logger`

### Aufgabe 4 - Middleware (Fortsetzung)

Innerhalb deiner Middleware-Funktion `logger`;

1. Verwende die Informationen, die du aus der Dokumentation gelernt hast, und weise einer Variablen einen String zu, der Folgendes enthält;

   - die **ip** des Clients
   - die **Methode** oder Art der Anfrage
   - die ursprüngliche **Anfrage-URL**
   - Du kannst jedes Informationsstück mit einem Pipe `|` Zeichen trennen.

   Zum Beispiel:

   ```text
   127.0.0.1 | GET | /travel
   ```

2. Verwende deine Variable als Argument, um die Hilfsfunktion `appendToLogFile` in [helpers.js](/helpers.js) auszuführen. Dies wird die Daten in die Datei `log.txt` speichern
3. Exportiere deine Middleware-Funktion

> 👽 Wichtig! Die Funktion `next()` sollte die **letzte** Anweisung in der Funktion sein!

### Aufgabe 5 - app.use()

Jetzt ist es an der Zeit, deine Middleware zu verwenden! Wir müssen sie in unsere Middleware-"Kette" einfügen. Innerhalb von `server.js`;

1. Importiere deine Middleware-Funktion
2. Binde deine Middleware in deine Express-Anwendung mit der Funktion `app.use()` ein. Dies sollte **vor** den restlichen Endpoints geschrieben werden.

### Aufgabe 6 - Testing

- Teste deine API, indem du einige Anfragen an deinen Server-Endpoint erstellst, um Daten für dein Log zu generieren
- Überprüfe die Log-Datei `log.txt` und sieh nach, welche Daten erstellt wurden!
