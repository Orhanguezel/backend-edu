# Server Middleware

In dieser Übung wirst du Express Middleware schreiben, um zu überprüfen, ob ein Benutzer über 18 ist, und um die Benutzereingabe zu bereinigen.

## Was du machen wirst

Du wirst einen Server mit zwei Endpunkten erstellen, die beide **POST** Anfragen akzeptieren.

Beide Endpunkte erwarten ein JSON-Objekt mit Benutzerdaten, die von den Middleware-Funktionen, die du erstellst, verarbeitet werden.

### Beispiel JSON

```json
{
  "firstName": "steve",
  "lastName": "stevenson",
  "age": "129",
  "fbw": "36",
  "profession": "Musician",
  "favoriteBands": [
    "Radiohead",
    "Motorhead",
    "Machinehead",
    "The talking heads"
  ],
  "email": "steve@metallica.com"
}
```

## Aufgaben

### Aufgabe 1 - Vorbereitung

1. Initialisiere npm in deinem Projekt mit `npm init -y`
2. Installiere das express.js npm Paket `npm i express`
3. Erstelle die Datei `server.js`

### Aufgabe 2 - Einrichten deines Servers

Erstelle deinen **express.js** Server in der `server.js` Datei

### Aufgabe 3 - Erstellen des validateUser Endpunkts

Erstelle einen Endpunkt, der;

1. Auf den Pfad `/validateUser` reagiert
2. Auf **POST** Anfragemethoden reagiert

### Aufgabe 4 - Erstellen von Middleware

1. Erstelle eine **Middleware-Funktion**, die überprüft, ob das Objekt **Werte** für die Schlüssel `firstName`, `lastName`, `age`, `fbw` und `email` enthält
2. Erstelle eine **Middleware-Funktion**, die überprüft, ob der Benutzer über **18** Jahre alt ist
3. Wenn eine der Middleware fehlschlägt, solltest du eine Antwort mit einer **Fehler**meldung senden, die erklärt, warum der Benutzer nicht gültig ist

   **Beispiel für eine Fehlerantwort**

   ```json
   {
     "message": "We can not validate your user. They are  below 18 years of age"
   }
   ```

### Aufgabe 5 - Anwenden der Middleware

1. Wende alle Middleware, die du in **Aufgabe 4** erstellt hast, auf den **validateUser** Endpunkt an

2. Wenn die Anfrage erfolgreich durch die Middleware geht, sollte **validateUser** eine Antwort mit einer **Erfolg**meldung senden

   **Beispiel für eine Erfolgsantwort**

   ```json
   {
     "message": "This user is valid!"
   }
   ```

### Aufgabe 6 - Erstellen des sanitizeUser Endpunkts

Erstelle einen Endpunkt, der;

1. Auf den Pfad `/sanitizeUser` reagiert
2. Auf **POST** Anfragemethoden reagiert

### Aufgabe 7 - Erstellen von Middleware

1. Erstelle eine **Middleware-Funktion**, die dafür sorgt, dass `firstName` und `lastName` mit einem Großbuchstaben beginnen
2. Erstelle eine **Middleware-Funktion**, die das Array `favoriteBands` alphabetisch sortiert
3. Erstelle eine **Middleware-Funktion**, die `age` und `fbw` in Zahlen umwandelt

### Aufgabe 8 - Anwenden der Middleware

1. Wende alle Middleware, die du in **Aufgabe 7** erstellt hast, auf den **sanitizeUser** Endpunkt an

2. Wenn die Anfrage erfolgreich durch die Middleware geht, sollte **sanitizeUser** eine Antwort mit den aktualisierten **POST** Daten senden

   **Beispielantwort**

   ```json
   {
     "firstName": "Steve",
     "lastName": "Stevenson",
     "age": 129,
     "fbw": 36,
     "profession": "Musician",
     "favoriteBands": [
       "Machinehead",
       "Motorhead",
       "Radiohead",
       "The Talking Heads"
     ],
     "email": "steve@steve.com"
   }
   ```
