# Using middleware to log requests to an API

A **server log** is a text document that contains all registered activities on a server. It can give you details of how, when, and who accessed your application.

## Tasks

To simulate a server in the real world, you will create some server endpoints to handle requests from a client. In the real world, the server will also keep track of all requests to the server. You will write a middleware function to do this.

A helper function has already been written for you which writes data to the file system.

### Task 1 - Endpoints

In the file `server.js`, create the following endpoints. They can return anything you like.

- Method: `GET`, path: `"/travel"`
- Method: `GET`, path `"/search"`
- Method: `POST`, path `"/subscribe"`
- Method: `POST`, path `"/createBooking"`
- Method: `PATCH`, path `"/update"`

### Task 2 - Documentation

Read and learn about the following Express **request** object properties;

1. [ip](http://expressjs.com/en/4x/api.html#req.ip)
2. [method](http://expressjs.com/en/4x/api.html#req.method)
3. [originalUrl](http://expressjs.com/en/4x/api.html#req.originalUrl)

### Task 3 - Middleware

Create a new file `logger.js`. This is where you will write your middleware. Within `logger.js`;

- Create a middleware function called `logger`

### Task 4 - Middleware (continued)

Inside your middleware function `logger`;

1. Using the information you learned from the documentation, assign a string to a variable which includes;

   - the **ip** of the client
   - the **method** or type of request
   - the original **request url**
   - You can separate each piece of information with a pipe `|` character.

   For example:

   ```text
   127.0.0.1 | GET | /travel
   ```

2. Use your variable as an argument to execute the helper function `appendToLogFile` in [helpers.js](/helpers.js). This will save the data to the file `log.txt`
3. Export your middleware function

> 👽 Important! The `next()` function should be the **last** instruction in the function!

### Task 5 - app.use()

Now is the time to use your middleware! We must add it to our middleware "chain". Inside `server.js`;

1. Import your middleware function
2. Mount your middleware into your express application with the `app.use()` function. This should be written **before** the rest of your endpoints.

### Task 6 - Testing

- Test your API by creating some requests to your server endpoint to generate data for your log
- Review the log file `log.text` and see what data was created!
