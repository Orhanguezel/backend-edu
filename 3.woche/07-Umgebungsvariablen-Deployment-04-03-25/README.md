# Umgebungsvariablen (enviroment variable), Deployment / Dienstag 04-03-25

## Lernziele :

1. Verstehen, was eine `.env-Datei` ist ?

- Eine .env-Datei dient dazu, sensible oder konfigurierbare Daten wie API-Schlüssel, Passwörter oder Ports in einer separaten Datei zu speichern. Diese Datei wird nicht direkt im Code eingebunden, sondern nur zur Laufzeit gelesen.

> Beispiel

```js
PORT = 3000;
API_KEY = 123456789;
DB_PASSWORD = geheim;
```

2. Warum `Umgebungsvariablen` wichtig sind

- Trennung von Code und Konfiguration

- Sicherheit sensibler Daten

- Einfache Konfigurationsänderung ohne Codeänderung

- Unterstützung unterschiedlicher Umgebungen (Entwicklung, Test, Produktion)

3. Zugriff auf Umgebungsvariablen mit `process.env`

4. **Sicherheitsaspekte** bei der Nutzung von `Umgebungsvariablen`

- .env-Dateien niemals in Git oder andere Versionskontrollen hochladen

- Eine .gitignore-Datei erstellen mit folgendem Inhalt:

  > .env

- Sensible Daten wie Passwörter oder API-Schlüssel niemals direkt im Code speichern

5. Regeln zur Definition von Schlüssel-Wert-Paaren in `.env-Dateien`

- Jede Zeile enthält genau ein Schlüssel-Wert-Paar im Format SCHLÜSSEL=WERT

- Schlüssel dürfen nur Buchstaben, Zahlen und den Unterstrich \_ enthalten (z.B. API_KEY)

- Kommentare beginnen mit # und werden ignoriert.

- Werte können beliebige Zeichenketten sein

- Leere Zeilen werden ignoriert

- Variablenüberschreibungen (doppelte Schlüssel) nehmen den zuletzt definierten Wert an

- Zeichenketten mit Leerzeichen oder Sonderzeichen müssen in Anführungszeichen gesetzt werden:

> GREETING="Hallo Welt"

6. Nutzung des `dotenv-Pakets` in Node.js

> npm i dotenv

```js
require('dotenv`).config();
import 'dotenv/config';

process.env.PORT
```

7. Nutzung von `Umgebungsvariablen` ohne dotenv-Paket

> node --env-file=.env server.js

8. Deploy server auf Render.

9. `Umgebungsvariablen` auf Render.

### Resources :

- [Render](https://render.com/)

- [.env Nodejs](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

- [dotenv NPM](https://www.npmjs.com/package/dotenv)

- [Video Lernen .env](https://www.youtube.com/watch?v=1NvJhiEdxo8)

### Tasks :

- [be-server-process-env](https://classroom.github.com/a/mkaHlQW9)

- [be-server-weather-cli](https://classroom.github.com/a/QDnJxGwH)