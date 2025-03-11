# An almost simple server in Express.js

This project will allow you to practice setting up a server that will handle simple requests in Express.js.

## Tasks

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`
2. Create the file `server.js`

### Task 2 - Setting up your server

Use the following code to setup your server

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
```

### Task 3 - GET '/hello'

Create an endpoint that will respond to the path `/hello`

- It should send a **response** with a string. Use the following string;

```text
Hello to you too!
```

### Task 4 - GET '/time'

Create an endpoint that will respond to the path `/time`.

- It should return a `response` with the current time and date

> Research:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Date Object [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Task 5 - GET '/random'

Create an endpoint that will respond to the path `/random`.

- It should send a **response** with a random number

> Research:
>
> [Math.random() [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Task 6 - GET '/fact'

Create an endpoint that will respond to the path `/fact`.

- It should send a **response** with a string. Use the following string;

```text
JavaScript was created in about 10 days!
```
