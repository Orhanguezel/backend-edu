# Environment variables in node.js

This project will allow to you practise using environment variables with `process.env` in Node.

## Tasks

Perform the following tasks inside the `server.js` file

### Task 1 - Playing with process.env

1. Inside the file `server.js`, use `console.log` to display the contents of the `process.env` variable
2. Experiment by add the following variables to the `process.env` variable:

```text
SERVER_NAME = 'Papagei 5000'
SERVER_CPU = 'Archimedes MMX'
SERVER_URL = 'http://localhost:5000/'
SERVER_LOG = 'LOG.txt'
```

### Task 3 - Documentation

As a software developer, you will have to spend a lot of time reading documentation. Read the following;

- [How to read environment variables from nodejs](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [process.env](https://nodejs.org/docs/latest/api/process.html#processenv)

### Task 3 - Configuring .env

1. Create the file `.env`
2. Add the values you previously added to `process.env` into the `.env` file
3. Remove the changes you made in your JavaScript file to `process.env`.

- Use `console.log` to print the following message in the console, filling in the values with the values from the `.env` file:

> "Hallo! Ich bin {SERVER_NAME}! Ich habe eine {SERVER_CPU}, und meine URL lautet {SERVER_URL}. Ich führe ein Protokoll aller Aktivitäten in {SERVER_LOG}."

### Task 4 - .gitignore

If you run the command `git status`, you will notice that `.git` is aware of the `.env` file

We can't allow the `.env` file to be added to git

1. Create the file `.gitignore`
2. Add the name of the file you want to ignore here
3. Run the `git status` command again - you should notice that the `.env` file is no longer there
