# Some mongosh exercises

The MongoDB `mongosh` shell is very similar to the Node REPL. This is a series of mini exercises to help you practice using the MongoDB shell.

## Tasks

These tasks will use a database called "catsanctuary". To start, just run `use catsanctuary` in mongosh.

Add your answers directly here into `README.md`

### Task 1

What does the following code do when you run it?

```js
const names = ["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"]
names.forEach(name => {
    cats.insert({name, age: Math.ceil(Math.random()*20})
})
```

- Think about what the code might be trying to do
- Fix the issues with the code above and run it

> Hint: After runnning the code, `db.cats.countDocuments()` should return 7

### Task 2

Looking at the following code;

```js
const oneCat = db.cats.findOne();
oneCat._id.getTimestamp();
```

- How can you print a list of all the cats?
- What is the ObjectID of Boog?
- What does this code return when you run it?

### Task 3

Look at the following code and explain in your own words what is it doing;

```js
db.cats.find().map((x) => x.name);
```

- How would you modify the above code sample in order to print the **name** and the **timestamp** of all documents in the cats collection?
- How would you calculate the average age of all cats?
