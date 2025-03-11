# Arbeiten mit Daten

Der Zweck dieser Übung ist es, grundlegende Datei I/O und Express Endpunkte zu üben, indem ein einfacher Server erstellt wird, um Tierbeobachtungen zu notieren und aufzulisten.

## Was Du tun wirst

Deine Aufgabe ist es, einen einfachen Server zu erstellen, um Tierbeobachtungen zu notieren und aufzulisten.

## Aufgaben

### Aufgabe 1

- Füge die `express` Abhängigkeit hinzu
- Erstelle `.gitignore` und stelle sicher, dass `node_modules` nicht in git enthalten ist
- Erstelle `server.js` und füge einen einfachen Express-Server ohne Endpunkte hinzu, der auf Port 7771 hört

### Aufgabe 2

- Füge einen GET-Endpunkt hinzu, um den Inhalt von `sightings.txt` abzurufen
    - `GET http://localhost:7771/`
    - Lies den Text in der Datei `sightings.txt` und sende ihn in der Antwort an den Client

### Aufgabe 3

- Füge einen POST-Endpunkt hinzu, damit der Client neue "species" im Body der Anfrage senden kann
    - `POST http://localhost:7771/`
    - Extrahiere die neue Tierart aus dem Body der POST-Anfrage
    - Füge diese Information zusammen mit dem heutigen Datum in die Datei `sightings.txt` ein
    - Die neue Zeile sollte wie folgt formatiert sein: `YYYY-MM-DD,Name der Art`
    - Beispiel: `2024-07-24,Neue Art`

- *Hinweis:* Du kannst `new Date()` verwenden, um ein Datumsobjekt des aktuellen Datums zu erhalten
    - Das Formatieren von Daten kann komplex sein, vielleicht fragst Du Copilot oder ChatGPT?
    - Oder, natürlich, recherchiere auf [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
