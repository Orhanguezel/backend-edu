# REST APIs, Postman, Crud operation / Monatg 24.02.25

## Lernziele :

1. Was ist ein `API` ?

- Application Programming Interface

- Eine Schnittstelle im Allgemeinen ist die Beziehung zwischen zwei Dingen (server , client).

2. Was sind `REST APIs` ?

- REST: Representational State Transfer

- Ein sehr, sehr verbreiteter Stil für die Gestaltung von APIs für das Web
  - Funktioniert gut zusammen mit dem HTTP-Protokoll

3. Was ist `params` ?

- `params` ist ein Objekt, das die Parameter aus der URL speichert.

> URL: http://localhost:4000/user/12

```js
app.get("/user/:value", (req, res) => {
  const { value } = req.params;
  console.log(value); // Ausgabe: 12
});
```

4. Was sind `Crud endpoints` ?

- REST APIs verwenden HTTP-Methoden, um die Konzepte von CRUD umzusetzen
  - Erstellen (Create)
    - `POST /comments`
  - Lesen (Read)
    - `GET /users`
  - Aktualisieren (Update)
    - `PUT /users/1`
    - `PATCH /users/1`

```json
{
  "id": 1,
  "name": "John",
  "role": "User"
}
```

`PUT /users/1` mit Nutzlast `{ id:1, role: "Admin" }`

- Die Nutzlast ersetzt den vorhandenen Benutzer - Wir hätten nur noch `{ id:1, role: "Admin" }` ohne Namen

`PATCH /users/1` mit Nutzlast `{ id:1, role: "Admin" }`

- Wir schauen uns die vorhandenen Daten an und aktualisieren die geänderten Werte - Wir hätten `{ id:1, name: "John", role: "Admin" }`

- Löschen (Delete)

- `DELETE /users`

5. Wie kann man mit `Json` in einem Server Antworten ?

- Wir verwenden `res.json()`, um eine JSON-Antwort zurückzugeben.

6. Wie kann einem **Server** `Json` verstehen ?

- middleware :

```js
app.use(express.json());
```

7. **Postman** oder **Insomnia** tool für requests ?

### Resources :

- [Was ist API](https://www.youtube.com/watch?v=s7wmiS2mSXY)

- [Was ist REST API](https://www.ibm.com/de-de/topics/rest-apis)

- [Params Express](https://expressjs.com/en/guide/routing.html)

- [Postman](https://www.postman.com/downloads/)

- [Insomnia](https://insomnia.rest/download)

### Tasks :

- []()

- []()
