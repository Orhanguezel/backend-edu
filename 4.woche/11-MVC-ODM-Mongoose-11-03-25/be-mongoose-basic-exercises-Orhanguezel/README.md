# Basic Mongoose exercises

This exercise will allow you to practice basic operations on a MongoDB database with Mongoose.

## Tasks

The file [scores.json](./scores.json) contains the scores on an arcade machine.

### Task 1

1. Install the dependencies with `npm i`
2. Create the files;
   - `db.js`
   - `models.js`
   - `write.js`
   - `read.js`

### Task 2

We will use the file `db.js` to handle our database setup and connection.

In `db.js`;

1. Create an asynchronous function called `connect` which will connect to MongoDB
2. Use `console.log()` to log the connection messages
3. Export the `connect` function

### Task 3

In `model.js`;

1. Create a **Schema** which matches the JSON data in [scores.json](./scores.json)
2. Create a **Model** for your **Schema**
3. Export your model as `Scores`

### Task 4

In `write.js`;

1. Import:
   - the `connect` function
   - the `Scores` model
2. Create a `for` loop which iterates `900` times
3. For each iteration of the `for` loop:
   - Generate a random string of 3 characters, for example: "DAB" or "MDK"
   - Generate a random date value in milliseconds, for example: 1718870775478 or 1718871662675
   - Generate a random score, as a number from 1 to 1000, for example: 390 or 113
   - Using the `Scores` model, insert the values you generated into the database

### Task 5

In `read.js`;

1. Import:
   - the `connect` function
   - the `Scores` model
2. Using the `Scores.find()` method, answer the following questions;
   - did any players score `1`?
   - did any players score `2`?
   - did any players score `1000`?
   - did any players score `999`?
   - did any players score `500`?
