# Fehlerbehandlung Schema, Put und Patch MongoDB, Delete/ Dienstag 18.03.25

## Lernziele:

1. Was haben wir bis jetzt `Validatoren` in Schem gelernt ?

- required, minlength, maxlength, min, max, uniqe, enum

2. Wie wird `Errors` allgemein behandelt ?

- try ... catch, throw Error,

  ```js
  try {
    await Product.deleteOne({ _id: "bananas" });
  } catch (error) {
    // Do something
    res.json(error);
  }
  ```

  ```js
   app.delete("/users/:id", (req, res, next) =>{
       try {
           await Product.deleteOne({ _id: req.params.id })
           res.json({ "message": "success" })
       } catch (err) {
           next(err)
       }
   })

   app.use((err, req, res, next) => {
       console.error("Error!", err)
       res.status(500).json({ "error": "Internal server error" })
   })
  ```

3. Was `Soft` löschen und `hard` löschen ?

- Wenn du etwas aus der Datenbank löschst, ist es weg

- Anstelle eines solchen Löschens ist es üblich, ein _soft Löschen_ durchzuführen
- Eine Möglichkeit, ein soft Löschen durchzuführen:
  - Füge ein Datumsfeld namens `deleted` hinzu, das standardmäßig null ist
  - DELETE wird _tatsächlich_ nur das `deleted` auf die aktuelle Zeit setzen
  - In deinen GET Endpunkten, liste/nur Artikel mit `deleted == null` zurückgeben

4. Aktualisieren von Dokumenten aus `PUT` und `PATCH` mit **mongoose**.

- PUT ganze Dokument ersaetzen
- PATCH ein Field ersaetzen
- {runValidator : true, new : true} validieren den neue teil von Dokument, new : kriegt man das modifierte Dokument zurueck

### Resources :

- [Start Repo](https://github.com/dci-fbw-wd-24-d05/Start-Repo-Project)

- [mongoose Validation](https://mongoosejs.com/docs/validation.html#built-in-validators)

- [Update Document validating](https://mongoosejs.com/docs/documents.html#validating)

- [Model methods](https://mongoosejs.com/docs/api/model.html)

- [runValidator and upsert options](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>)

### Tasks :

- [be-mongoose-animal-shelter](https://classroom.github.com/a/kJIz8gpY)
