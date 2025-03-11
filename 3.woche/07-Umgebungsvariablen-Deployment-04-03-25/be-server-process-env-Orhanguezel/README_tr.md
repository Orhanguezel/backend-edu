# Umgebungsvariablen in node.js

Dieses Projekt ermöglicht es dir, die Verwendung von Umgebungsvariablen mit `process.env` in Node zu üben.

## Aufgaben

Führe die folgenden Aufgaben in der Datei `server.js` aus

### Aufgabe 1 - Spielen mit process.env

1. Verwende in der Datei `server.js` `console.log`, um den Inhalt der Variablen `process.env` anzuzeigen
2. Experimentiere, indem du die folgenden Variablen zur `process.env` Variable hinzufügst:

```text
SERVER_NAME = 'Papagei 5000'
SERVER_CPU = 'Archimedes MMX'
SERVER_URL = 'http://localhost:5000/'
SERVER_LOG = 'LOG.txt'
```

### Aufgabe 2 - Dokumentation

Als Softwareentwickler wirst du viel Zeit mit dem Lesen von Dokumentationen verbringen müssen. Lies die folgenden Dokumentationen:

- [Wie man Umgebungsvariablen aus Node.js liest](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [process.env](https://nodejs.org/docs/latest/api/process.html#processenv)

### Aufgabe 3 - Konfigurieren von .env

1. Erstelle die Datei `.env`
2. Füge die Werte, die du zuvor zu `process.env` hinzugefügt hast, in die Datei `.env` ein
3. Entferne die Änderungen, die du in deiner JavaScript-Datei an `process.env` vorgenommen hast.

- Verwende `console.log`, um die folgende Nachricht in der Konsole auszugeben, und fülle die Werte mit den Werten aus der Datei `.env` aus:

> "Hallo! Ich bin {SERVER_NAME}! Ich habe eine {SERVER_CPU}, und meine URL lautet {SERVER_URL}. Ich führe ein Protokoll aller Aktivitäten in {SERVER_LOG}."

### Aufgabe 4 - .gitignore

Wenn du den Befehl `git status` ausführst, wirst du feststellen, dass `.git` die Datei `.env` kennt

Wir können nicht zulassen, dass die Datei `.env` zu git hinzugefügt wird

1. Erstelle die Datei `.gitignore`
2. Füge den Namen der Datei, die du hier ignorieren möchtest, hinzu
3. Führe den Befehl `git status` erneut aus - du solltest feststellen, dass die Datei `.env` nicht mehr da ist
