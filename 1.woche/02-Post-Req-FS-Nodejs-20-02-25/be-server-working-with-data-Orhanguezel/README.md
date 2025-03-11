# Working with data

The purpose of this exercise is to practice basic file I/O and Express endpoints, by creating a simple server for recording and listing animal sightings.

## Tasks

### Task 1

- Add the `express` dependency
- Create a `.gitignore` file and make sure the `node_modules` folder is not included in your git repository
- Create the file `server.js` and add a simple Express server without endpoints listening on port `7771`

### Task 2

Add a **GET** endpoint for retrieving the contents of `sightings.txt`

- `GET http://localhost:7771/`
- Read the text in the file `sightings.txt` and send it in the response to the client

### Task 3

Add a **POST** endpoint so that the client can send new "species" in the body of the request

- `POST http://localhost:7771/`
- Extract the new animal species from the the body of the **POST** request
- Add this information, along with today's date into the file `sightings.txt`
- The new line should be formatted like this: `YYYY-MM-DD,Name of species`
- Example: `2024-07-24,New species`

> **Hint**: You can use `new Date()` to get a date object of the current date
>
> - Formatting dates can be complex, try asking Copilot or ChatGPT for help
> - Or research this topic on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
