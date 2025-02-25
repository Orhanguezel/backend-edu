# Express Middleware / Dienstag 25.02.25

## Lernziele :

1. Was ist ein `Middleware` ?

- Middleware ist eine Funktion, die Zugriff auf das Request-Objekt (req), das Response-Objekt (res) und die next-Funktion im Request-Response-Zyklus einer Express-Anwendung hat. Die next-Funktion wird aufgerufen, um die nächste Middleware in der Kette auszuführen.

- `app.use(express.json())`
- `app.use(something)`

2. Warum `Middleware` verwenden?

- Middleware-Funktionen helfen dabei, den Code sauber und modular zu halten. kann :

- Das req- oder res-Objekt verändern.
- Den Request-Response-Zyklus beenden.
- Die nächste Middleware-Funktion aufrufen.

3. Wie verwendet man `Middleware`?

```js
app.use((req, res, next) => {
  console.log("Erste Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Zweite Middleware");
  next();
});
```

4. Arten von `Middleware` ?

   - Anwendungs-Middleware (app.use()) → Wird auf die gesamte App angewendet.
   - Router-Middleware (router.use()) → Gilt nur für bestimmte Routen.
   - Fehler-Middleware (err, req, res, next) → Fängt Fehler ab.
     Drittanbieter-Middleware (z. B. morgan, cors) → Bereitgestellt von externen Modulen.
   - Eingebaute Middleware (z. B. express.json()) → Verarbeitet JSON-Daten.

### Resources :

- [Using Middleware Express](https://expressjs.com/en/guide/using-middleware.html#using-middleware)

- [Video express middleware](https://www.youtube.com/watch?v=lY6icfhap2o)

### Tasks :

- [be-server-middleware-logger](https://classroom.github.com/a/LYrHxvjQ)

- []()
