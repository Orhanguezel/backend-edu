# Mongoose Übungen

Diese Übung handelt davon, wie man grundlegende Operationen auf einer MongoDB-Datenbank mit Mongoose durchführt.

## Aufgaben

Die Datei [scores.json](./scores.json) enthält die Scores an einem Arcade-Automaten.

### Aufgabe 1

1. Installiere die Abhängigkeiten mit `npm i`
2. Erstelle die Dateien;
   - `db.js`
   - `models.js`
   - `write.js`
   - `read.js`

### Aufgabe 2

Wir werden die Datei `db.js` verwenden, um unsere Datenbankkonfiguration und -verbindung zu verwalten.

In `db.js`;

1. Erstelle eine asynchrone Funktion namens `connect`, die eine Verbindung zu MongoDB aufbauen soll
2. Verwende `console.log()`, um Verbindungsnachrichten zu protokollieren
3. Exportiere die `connect`-Funktion

### Aufgabe 3

In `models.js`;

1. Erstelle ein **Schema**, das den JSON-Daten in [scores.json](./scores.json) entspricht
2. Erstelle ein **Modell** für dein **Schema**
3. Exportiere dein Modell als `Scores`

### Aufgabe 4

In `write.js`;

1. Importiere:
   - die `connect`-Funktion
   - das `Scores`-Modell
2. Erstelle eine `for`-Schleife, die `900` Mal durchläuft
3. Für jede Iteration der `for`-Schleife:
   - Generiere einen zufälligen String aus 3 Zeichen, zum Beispiel: "DAB" oder "MDK"
   - Generiere einen zufälligen Datumswert in Millisekunden, zum Beispiel: 1718870775478 oder 1718871662675
   - Generiere eine zufällige Punktzahl als Zahl zwischen 1 und 1000, zum Beispiel: 390 oder 113
   - Verwende das `Scores`-Modell, um die generierten Werte in die Datenbank einzufügen

### Aufgabe 5

In `read.js`;

1. Importiere:
   - die `connect`-Funktion
   - das `Scores`-Modell
2. Verwende die Methode `Scores.find()`, um folgende Fragen zu beantworten;
   - hat ein Spieler `1` Punkt erzielt?
   - hat ein Spieler `2` Punkte erzielt?
   - hat ein Spieler `1000` Punkte erzielt?
   - hat ein Spieler `999` Punkte erzielt?
   - hat ein Spieler `500` Punkte erzielt?
