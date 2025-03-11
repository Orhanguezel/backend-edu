# CSV Converter

Dies ist eine Übung von Problemlösung. Du wirst recherchieren und herauszufinden, wie man eine bestimmte Bibliothek verwendet und wie man in eine Datei schreibt.

Erstelle ein Programm, das [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)-Dateien in JSON-Dateien umwandelt, indem es die [`csvtojson`](https://www.npmjs.com/package/csvtojson)-Bibliothek verwendet. Die Bibliotheksbeispiele verwenden `CommonJS` für Module, aber Du kannst stattdessen einfach `import csv from "csvtojson"` verwenden.

## Anforderungen

Siehe die Anwendungsbeispiele unten.

- Das Programm sollte ein oder zwei Argumente akzeptieren. Wenn keine Argumente übergeben werden, sollte das Programm den Prozess beenden und eine Nachricht (siehe unten) an den Benutzer ausgeben.

- Wenn nur ein Argument übergeben wird, sollte das Programm die Datei in diesem Pfad in eine JSON-Datei im selben Verzeichnis umwandeln.

- Wenn zwei Argumente übergeben werden, sollte das Programm die Datei in den Pfad im zweiten Argument schreiben.

- Wenn das Programm die Datei nicht lesen oder schreiben kann, sollte es eine Nachricht an den Benutzer ausgeben (siehe Beispiele).

## Beispiele

### Ein Argument übergeben (Source CSV)

```bash
$ node index.js demo.csv
> "JSON file saved at: demo.json"
```

### Zwei Argumente übergeben (Source CSV, target JSON)

```bash
$ node index.js demo.csv hello.json
> "JSON file saved at: hello.json"
```

### Keine Argumente übergeben

```bash
$ node index.js
> "Please provide a csv file to convert to JSON"
```

### Ein Fehler ist aufgetreten

```bash
$ node index.js demo.csv hello.json
> "Something went wrong, Could not write json to: hello.json"
```

## Bonus

Als Bonus-Forschungsaufgabe finde heraus, wie Du das Programm so einrichten kannst, dass Du es im Terminal mit einem einfachen Befehl verwenden kannst, egal wo Du bist, zum Beispiel:

```bash
$ # Wechsel zu ~/Downloads
$ cd ~/Downloads

$ # Lade die Weltbevölkerungsdaten-CSV herunter
$ curl https://datacatalogfiles.worldbank.org/ddh-published/0038126/DR0046428/POP.csv > pop.csv

$ # Konvertiere CSV zu JSON
$ csv2json pop.csv pop.json
```
