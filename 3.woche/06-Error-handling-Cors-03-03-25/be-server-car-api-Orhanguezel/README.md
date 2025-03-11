# Exploring HTTP methods with a Car API

In this project we will create our own Car API, using the HTTP methods **GET**, **POST**, **PATCH**, **DELETE**. You will also be working with request parameters, practise sending responses with different response codes.

## Tasks

For these tasks, you are expected to write your main server code in the file `server.js` and endpoints into `routes/cars.js`.

### Task 1 - Getting ready

1. Initialize your app with the `express` npm dependency
2. Create the file `server.js` for your server
3. Create the folder and file `routes/cars.js` for the endpoints

### Task 2

1. Create a basic express server listening to port `3000`
2. Set up `cars.js` to handle all requests to `/cars`

### Task 3 - Initialize an array of car objects

You can choose what properties your object will contain, but at the very least it should have an `id` and a `name`.

#### Example

```javascript
const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];
```

### Task 4 - GET endpoint with the path '/cars'

Create a **GET** endpoint for the path `/cars`

- This should return a JSON response with the the status code `200` and the array of cars

### Task 5 - GET endpoint with the path '/cars/:id'

Create a **GET** endpoint for the path `/cars/:id`. This should:

- Return a JSON response with a car by parameter `id` and
- A status code `200`
- If a faulty `id` parameter (such as "Cheese") was supplied, it should return status code `400` (Bad Request)
- If an `id` was supplied but it can't be found in the array return status code `404`

### Task 6 - POST endpoint with the path '/cars'

Create a **POST** endpoint for the path `/cars/create`. It should:

- Add a car object to the array of cars
- Return a JSON response with the newly added car object and status code `200`
- The body of the request should look similar to the example below;

```json
{
  "id": 4,
  "name": "Renault"
}
```

### Task 7 - PATCH endpoint with the path '/cars/:id'

Create a **PATCH** endpoint for the path `/cars/update/:id`. It should;

- Find and update an existing car in the array (using the `id`)
- Return a JSON response with the list of cars (including the newly added one)
- A status code of `200`
- If a faulty `id` parameter was supplied it should return status code `400` (Bad Request)
- If an `id` was supplied but it can't be found in the array return status code `404`

### Task 8 - DELETE endpoint with the path '/cars/:id'

Create a **DELETE** endpoint for the path `/cars/:id`. This should:

- Find and delete the car (using the `id`)
- Return a JSON `response` with the list of cars (excluding the car that was deleted)
- A status code `200`
- If a faulty `id` paramater was supplied it should return status code `400` (Bad Request)
- If an `id` was supplied but it can't be found in the array return status code `404`
