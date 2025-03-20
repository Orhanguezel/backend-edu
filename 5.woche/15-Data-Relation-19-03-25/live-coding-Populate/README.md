# Datenbeziehungen / Donnerstag 20.03.25

## Lernziele :

1. Was ist `Datenbeziehung` in mongoDB ?

2. Wie viel `Arten` von `Beziehungen` befindet in **MongoDB** ?

- **One to one** :

```javascript
// User Schema

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  // Define a relation to Profile
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
});

// Profile Schema

const profileSchema = new Schema({
  bio: String,
  // Define a relation to User
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);

const Profile = mongoose.model("Profile", profileSchema);

// Usage: Creating a user with a profile (this is a simplified example outside of an HTTP request context)

const createUserWithProfile = async (name, email, bio) => {
  const user = new User({ name, email });
  const profile = new Profile({ bio, user: user._id });

  user.profile = profile._id;

  await user.save();
  await profile.save();
  console.log("User and profile created with reference to each other");
};

// Usage: Retrieving a user with profile information (this is a simplified example outside of an HTTP request context)

const getUserWithProfile = async (userId) => {
  const user = await User.findById(userId).populate("profile");

  console.log("User with profile info:", user);
};
```

- One to many

- Many to Many

3. Was braucht man in MongoDB, um `Beziehung` zu erstellen ?

```js
const postSchema = new Schema({
  title: String,
  author: {
    ref: "User",
    type: Schema.Types.ObjectId, // { User }
  },
   populate("author")
});
```

4. Warum brauchen wir `Datenbeziehung` in **MongoDB** ?

1. Effiziente Datenabfrage

1. Datenorganisation

1. Wartbarkeit

1. Abbildung realer Beziehungen

1. Datenintegrität

1. Was ist `queries` in **Mongoose** ?

### Resources :

- [Populating results with refs](https://mongoosejs.com/docs/populate.html)

- [Query in monggose](https://mongoosejs.com/docs/queries.html)

### Tasks :

- []()
