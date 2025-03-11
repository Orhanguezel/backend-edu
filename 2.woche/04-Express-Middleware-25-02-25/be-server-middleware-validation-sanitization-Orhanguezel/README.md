# Validation and sanitization middleware

In this particular exercise, you will be writing Express middleware to validate that a user is above 18, and to sanitize the user input.

## Tasks

You will be creating a server with two endpoints, both of which will be accepting **POST** requests.

Both of these endpoints will be expecting a JSON object with user data, which will be processed by the middleware functions you create.

#### Example JSON

```json
{
  "firstName": "Steve",
  "lastName": "Stevenson",
  "age": "129",
  "fbw": "36",
  "profession": "Musician",
  "email": "steve@metallica.com"
}
```

### Task 1 - Getting ready

1. Initialize `express` as a dependency for your project
2. Create the file `server.js`
3. Create a server in the `server.js` file

### Task 2 - Creating the validateUser endpoint

Create an endpoint which;

1. Responds to the path `/validateUser`
2. Responds to **POST** request methods

### Task 3 - Creating middleware

1. Create a **middleware function** that checks the object contains **values** for the keys `firstName`, `lastName`, `age`, `fbw` and `email`
2. Create a **middleware function** that will check if the user is above **18** years old
3. If any of the middleware checks fail, you should send a response with an **error** message that says why the user is not valid

   **Example failure response**

   ```json
   {
     "message": "We can not validate your user. They are  below 18 years of age"
   }
   ```

### Task 4 - Applying the middleware

1. Apply all the middleware you created in **Task 3** to the **validateUser** endpoint

2. If the request passes successfully through the middleware, **validateUser** should send a response with a **success** message

   **Example success response**

   ```json
   {
     "message": "This user is valid!"
   }
   ```

### Task 5 - Creating the sanitizeUser endpoint

Create an endpoint which;

1. Responds to the path `/sanitizeUser`
2. Responds to **POST** request methods

### Task 6 - Creating middleware

1. Create a **middleware function** that makes the `firstName` and `lastName` start with a capital letter
2. Create a **middleware function** that will convert `age` and `fbw` to numbers

### Task 7 - Applying the middleware

1. Apply all the middleware you created in **Task 6** to the **sanitizeUser** endpoint

2. If the request passes successfully through the middleware, **sanitizeUser** should send a response with the updated **POST** data

   **Example response**

   ```json
   {
     "firstName": "Steve",
     "lastName": "Stevenson",
     "age": 129,
     "fbw": 36,
     "profession": "Musician",
     "email": "steve@steve.com"
   }
   ```
