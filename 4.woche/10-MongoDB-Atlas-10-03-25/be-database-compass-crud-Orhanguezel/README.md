# MongoDB CRUD with MongoDB Compass

This exercise will help you practice using the Compass tool, by connecting to a MongoDB database and performing each of the CRUD operations (create, read, update, delete).

## Tasks

### Task 1 - Create

1. Create a database with the name `dci`
2. Create the collection `faculty` in the `dci` database
3. Insert one document into `faculty` collection

```json
{
    "name": "Hans",
    "age": 35,
    "gender": "M",
    "exp": 10,
    "subjects": ["JavaScript"],
    "type": "Full Time",
    "qualification": "Masters"
},
```

### Task 2 - Create

- Use the file [members.json](./members.json) to insert multiple documents in the `faculty` collection

### Task 3 - Read

1. Return all the documents in the `faculty` collection
2. Get the total number (count) of documents

### Task 4 - Read

1. Return all the documents where `qualification` is `Ph.D`
2. Return all the documents where `exp` is between `8` to `12` years

### Task 5 - Read

1. Return all documents where `subjects` includes either `Python` or `Java`
2. Return all documents where `subjects` includes `Java` and `exp` is more than `8`
3. Return all the documents where `type` is `Part Time` or `subjects` includes `Java`

### Task 6 - Read

- Return all documents, but only show the `name` and `qualification` fields

### Task 7 - Update

- Update all documents by incrementing the `age` and `exp` by 1

### Task 8 - Update

- Update the document that matchs the following criteria;

```json
{ "name": "Lina" }
```

So that the document has the updated fields;

```json
{
  "type": "Part Time",
  "qualification": "Ph.D"
}
```

### Task 9 - Update

- Update all documents so that each teacher also has `MongoDB` in their list of `subjects`

### Task 10 - Delete

1. Delete all documents where the `exp` is less than `10`
2. Delete all documents where `type` is `Part Time`
3. Delete all documents where `qualification` is `Ph.D`

Which documents remain in the collection?
