# Schema, Validator, Verschachtelt Schema/ Montag 17.03.25

## Lernziele :

1. Was war nochmal die Rolle von `Schemas`?

- Sie definieren die Form von Dokumenten in einer Sammlung
  - Sie generieren das Modell für uns

2. Was sind `Schemas Typen` ?

- String
- Number
- Boolean

  ```js
  const userSchema = new Schema({
    accountNumber: Number, // kurzform von {type : Number}
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
  });
  ```

3. Was sind `Schema Type Options` ?

- `default` setzt den Standardwert
- `unique` macht die Feldwerte einzigartig für die Sammlung

```js
const userSchema = new Schema(
  {
    accountNumber: Number,
    email: {
      type: String,
      required: true,
      unique: true, // Erlaube nicht mehrere Benutzer mit der gleichen E-Mail
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false, // Neue Benutzer sind standardmäßig nicht verifiziert
    },
    roles: {
      type: [String], // Ein Benutzer kann gleichzeitig viele Rollen haben
      required: true,
      default: ["user"],
    },
  },
  { timestamps: true }
);
```

4. Wie **Validieren** wir `Schemas` ?

```js
hobbies: {
      type: [String],
      enum: ["tennis", "basketball", "swimming"],
    },
```

5. Unter Dokumente.

```js

const addressSchema = new Schema({
    street: String,
    zip: String,
    city: String,
    country: String
}, { _id: false }) // Das ist eine Schema-Option, um keine _id zu generieren

const userSchema = new Schema({
    ...
    address: [addressSchema] // Ein Benutzer kann mehrere Adressen haben
}, { timestamps: true })
```

### Resources :

- [SchemaTypes](https://mongoosejs.com/docs/schematypes.html)

- [SchemaTypeOptions](https://mongoosejs.com/docs/schematypes.html#schematype-options)

- [Built-in Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)

- [Subdocuments](https://mongoosejs.com/docs/subdocs.html)

### Tasks :

- []()
