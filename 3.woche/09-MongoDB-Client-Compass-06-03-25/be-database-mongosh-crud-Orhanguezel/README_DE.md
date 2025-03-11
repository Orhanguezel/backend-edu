# Mongo Crud

Diese Übung ermöglicht es Dir, die vier grundlegenden Datenoperationen in MongoDB mit `mongosh` zu üben (Create, Read, Update, Delete).

## Was Du tun wirst:

Bitte schreibe die Befehle, die Du direkt hier in der Readme-Datei verwendest.

<u style="color:red">Tipp:</u> Die [Mongo Docs](https://www.mongodb.com/docs/mongodb-shell/crud/) können Dir sehr bei der Aufgabe helfen.

## Aufgaben

### Aufgabe 1. Datenbank erstellen:

Erstelle eine Datenbank namens `tasks-todo`.

### Aufgabe 2. Dokument (und Sammlung) erstellen

Füge das folgende Dokument in eine Sammlung namens `tasks` ein:

```json
{ lernen: `JS`, completed: true }
```

### Aufgabe 3. Viele Dokumente erstellen:

Füge die folgenden Dokumente mit einem einzigen Befehl in eine Sammlung namens `tasks` ein:

- `{ lernen: "Html" , completed: true }`
- `{ lernen: "React", completed: true }`
- `{ lernen: "Mysql" , completed: false }`
- `{ lernen: "MongoDB" , completed: false }`
- `{ lernen: "Typescript" , completed: false }`

### Aufgabe 4. Alle Daten in der tasks-Sammlung lesen

Liste alle Dokumente auf

### Aufgabe 5. Nur bestimmte Dokumente lesen

Liste alle Dokumente mit `completed: true` auf

### Aufgabe 6. Dokument aktualisieren

Aktualisiere dieses Dokument:

``` json
{ lernen : "MongoDB", completed: false }
```

Zu:

```json
{ lernen : "MongoDB", completed: true }
```

### Aufgabe 7. Mehrere Dokumente aktualisieren

Aktualisiere jedes Dokument, das:

```json
completed: false
```

hat, zu:

```json
completed: true
```

### Aufgabe 8. Dokument löschen

Lösche das Dokument, das hat:

```json
lernen: "Html"
```

### Aufgabe 9. Alle Dokumente löschen

Welchen Befehl hast Du verwendet?

### Aufgabe 10. Die tasks-Sammlung löschen

Welchen Befehl hast Du verwendet?

### Aufgabe 11. Die tasks-toDo-Datenbank löschen

Welchen Befehl hast Du verwendet?

### Bonus-Aufgabe

1. Erstelle eine neue Datenbank mit dem Namen `personnel`

2. Erstelle eine <u>developers</u> Sammlung

3. Füge dieses Dokument ein:

```js
{
    name: 'Justiina Puupää',
    job: 'Web Developer',
    address: {
        country : 'Spain',
        code: 1111
    }
}
```

4. Aktualisiere das Land auf Deutschland
