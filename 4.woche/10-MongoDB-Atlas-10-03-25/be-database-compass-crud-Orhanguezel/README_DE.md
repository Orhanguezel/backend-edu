# MongoDB CRUD mit MongoDB Compass

Diese Übung hilft dir, den Umgang mit dem Compass-Tool zu üben, indem du dich mit einer MongoDB-Datenbank verbindest und jede der CRUD-Operationen (Erstellen, Lesen, Aktualisieren, Löschen) durchführst.

## Aufgaben

### Aufgabe 1 - Erstellen

1. Erstelle eine Datenbank mit dem Namen `dci`
2. Erstelle die Sammlung `faculty` in der `dci`-Datenbank
3. Füge ein Dokument in die Sammlung `faculty` ein

```json
{
    "name": "Hans",
    "age": 35,
    "gender": "M",
    "exp": 10,
    "subjects": ["JavaScript"],
    "type": "Full Time",
    "qualification": "Masters"
},
```

### Aufgabe 2 - Erstellen

- Verwende die Datei [members.json](./members.json), um mehrere Dokumente in die Sammlung `faculty` einzufügen

### Aufgabe 3 - Lesen

1. Gib alle Dokumente in der Sammlung `faculty` zurück
2. Ermittle die Gesamtanzahl (Anzahl) der Dokumente

### Aufgabe 4 - Lesen

1. Gib alle Dokumente zurück, bei denen die `qualification` `Ph.D` ist
2. Gib alle Dokumente zurück, bei denen die `exp` zwischen `8` und `12` Jahren liegt

### Aufgabe 5 - Lesen

1. Gib alle Dokumente zurück, bei denen `subjects` entweder `Python` oder `Java` enthält
2. Gib alle Dokumente zurück, bei denen `subjects` `Java` enthält und die `exp` mehr als `8` beträgt
3. Gib alle Dokumente zurück, bei denen der `type` `Part Time` ist oder `subjects` `Java` enthält

### Aufgabe 6 - Lesen

- Gib alle Dokumente zurück, zeige jedoch nur die Felder `name` und `qualification`

### Aufgabe 7 - Aktualisieren

- Aktualisiere alle Dokumente, indem du das `age` und die `exp` um 1 erhöhst

### Aufgabe 8 - Aktualisieren

- Aktualisiere das Dokument, das den folgenden Kriterien entspricht;

```json
{ "name": "Lina" }
```

So dass das Dokument die aktualisierten Felder hat;

```json
{
  "type": "Part Time",
  "qualification": "Ph.D"
}
```

### Aufgabe 9 - Aktualisieren

- Aktualisiere alle Dokumente, sodass jeder Lehrer auch `MongoDB` in seiner Liste der `subjects` hat

### Aufgabe 10 - Löschen

1. Lösche alle Dokumente, bei denen die `exp` weniger als `10` beträgt
2. Lösche alle Dokumente, bei denen der `type` `Part Time` ist
3. Lösche alle Dokumente, bei denen die `qualification` `Ph.D` ist

Welche Dokumente sind noch in der Sammlung übrig?
