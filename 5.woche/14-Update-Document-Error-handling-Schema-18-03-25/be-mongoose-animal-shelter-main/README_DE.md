# Tierheim

Dies ist eine Full-Stack-Tierheim-Anwendung, oder zumindest wäre sie das, wenn sie fertig wäre! Der größte Teil des Frontends und einiges vom Backend sind bereits fertiggestellt. Hilf dem Tierheim, indem du den Code vervollständigst, damit diese armen Tiere adoptiert werden können. 🐶 🐱 🐀

## Aufgabe

Es gibt zwei Frontend-Dateien:

- [index.html](index.html) - die Seite, die den Kunden angezeigt wird
- [admin.html](admin.html) - die Admin-Oberfläche der Anwendung

Beide können mit dem VS Code Live Server ausgeführt werden.

Deine Aufgaben sind, die API für die Verwaltung der Tiere zu erstellen und den vorhandenen Frontend-Code zu erweitern, damit er funktioniert.

> Hinweis: Um zu sehen, was im Code fehlt, suche nach den `// TODO` Kommentaren

Diese Übung ist absichtlich schwierig und erfordert, dass du den Code liest und über die Anwendung nachdenkst. Du schaffst das!

## Anforderungen

- Suche nach den `// TODO` Kommentaren und vervollständige den Code
- Füge die folgenden Endpunkte hinzu

  - `GET /animal` - gibt alle Tiere zurück
  - `POST /animal` - erstellt ein neues Tier
  - `PUT /animal/:id` - aktualisiert ein Tier
  - `PATCH /animal/:id` - aktualisiert ein Tier
  - `DELETE /animal/:id` - entfernt ein Tier

## Hinweise

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
