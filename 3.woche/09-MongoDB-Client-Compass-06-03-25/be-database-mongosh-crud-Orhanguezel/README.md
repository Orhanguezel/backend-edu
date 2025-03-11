# MongoDB CRUD with mongosh

This exercise is about practicing the four primary data operations - Create, Read, Update, Delete (also known as "CRUD") in MongoDB using `mongosh`.

## Tasks

Please write down the commands you use directly here in the `README.md` file.

> Hint: the [Mongo Docs](https://www.mongodb.com/docs/mongodb-shell/crud/) can help you a lot with the task

### Task 1

Write commands to;

1. Create database called `organizer`
2. Create a collection called `todo`

> 🍩 The following tasks apply to the `todo` collection

### Task 2 - Create a Document and Collection

Write a command to;

- Insert the following document;

  ```json
  { "lernen": "JS", "completed": true }
  ```

### Task 3 - Creating many documents

Write a single command to;

- Insert the following documents;

  - `{ lernen: "Html" , completed: true }`
  - `{ lernen: "React", completed: true }`
  - `{ lernen: "Mysql" , completed: false }`
  - `{ lernen: "MongoDB" , completed: false }`
  - `{ lernen: "Typescript" , completed: false }`

### Task 4 - Reading documents

Write a command to;

- List all documents in the collection

### Task 5 - Reading documents

Write a command to;

- List all documents with `completed: true`

### Task 6 - Updating documents

Write a command to update all documents that match the following criteria;

```json
{ "lernen": "MongoDB", "completed": false }
```

So that they all show `completed` to be `true` like so;

```json
{ "lernen": "MongoDB", "completed": true }
```

### Task 7 - Updating documents

Write a command to update all documents that match the following criteria;

```json
{ "completed": false }
```

So that they all show `completed` to be `true` like so;

```json
{ "completed": true }
```

### Task 8 - Delete a document

Write a command to delete the document that matches the following criteria;

```json
{ "lernen": "Html" }
```

### Task 9 - Delete all the documents

Write a command to delete all the documents in the collection

- What command did you use?

### Task 10 - Delete the todo collection

Write a command to delete the `todo` collection

- What command did you use?

### Task 11 - Delete the todo-todo database

Write a command to delete the `organizer` database

- What command did you use?

### Bonus Task

1. Create a new database with the name `personnel`

2. Create a `developers` collection

3. Insert this Document:

```json
{
  "name": "Justiina Puupää",
  "job": "Web Developer",
  "address": {
    "country": "Spain",
    "code": 1111
  }
}
```

4. Update the country to Germany
