# HTTPsstatuscodes, Fehlerbehandlung, Cors/ Montag 03.03.25

## Lernziele :

1. Was eine `HTTP-Anfrage` ausmacht ?

- Methode, URL, Header, Body

2. Was eine `HTTP-Anwort` ausmacht ?

- Statuszeile
- Header
- Body

3. Was sind `HTTP-Statuscodes` ?

- Der Statuscode gibt den Status der Antwort an

- 200 OK
- 301 Dauerhaft verschoben:
  -Eine Anfrage auf http://example.com wird auf https://example.com weitergeleitet.

- 400 Ungültige Anfrage :

  - Eine POST-Anfrage auf https://example.com/login ohne erforderliche Felder wie Benutzername oder Passwort.

- 401 Nicht autorisiert:

  - Der Zugriff auf eine API ohne gültiges Token.

- 404 Nicht gefunden :

- 500 Interner Serverfehler:
  - Ein Fehler auf dem Server, der nicht näher spezifiziert ist.

4. Was ist `HTTP 418 Statuscode` ?

5. Was ist `Cors` ?

### Resources :

- [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- [Error Handling Express](https://expressjs.com/en/guide/error-handling.html)

- [Cors package npm](https://www.npmjs.com/package/cors)

- [Cors Express](https://expressjs.com/en/resources/middleware/cors.html)

- [Learn cors in 100 Seconds](https://www.youtube.com/watch?v=4KHiSt0oLJ0)

### Tasks :

- [be-server-car-api](https://classroom.github.com/a/ZS6Fc10w)
