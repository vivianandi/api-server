# API Server
This project is an Express server designed to manage and handle routes for dogs and cats entities, demonstrating basic routing, middleware usage, and error handling in a Node.js application. The server allows manipulation and retrieval of dog and cat records through RESTful endpoints.

## Getting Started

### Prerequisites
- Node.js
- npm
- A PostgreSQL database

### Installing
1. First, clone the repository to your local machine
2. Then, navigate to the project directory and install the required packages: `npm install`

### Running the Server
To start the server, run: `node index.js`

This will start the server on the port specified in your environment variables (.env file)

## Functionality
### Routes
`GET /`: Returns a simple welcome message

Dog and Cat Routes:
`GET /dogs`, `POST /dogs`, `GET /dogs/:id`, `PUT /dogs/:id`, `DELETE /dogs/:id`
`GET /cats`, `POST /cats`, `GET /cats/:id`, `PUT /cats/:id`, `DELETE /cats/:id`

### Middleware
**Logger Middleware:** Logs every request showing the HTTP method, path accessed, query parameters, and request body.

### Error Handling
**404 Not Found:** Any undefined routes will trigger a 404 error with a detailed message

**500 Server Error:** Handles scenarios where essential parameters are missing or an internal server malfunction, providing detailed diagnostics

## Testing
The tests are written using Jest and Supertest. They check the functionality of all routes, including error handling and middleware effectiveness.

To run the tests, execute: `npm test`

### Test Cases
- 404 for Invalid URL: Verifies that accessing a non-existent route returns a 404 status, indicating the resource was not found

- 500 for Server Errors: Ensures that accessing the /broken route, which is designed to trigger an error, returns a 500 status, signaling an internal server error

- 201 for Adding a Dog Record: Checks that posting a valid new dog record to /dogs returns a 201 status, indicating successful creation, and validates the content of the created record

- 200 for Retrieving Dog Records: Confirms that a GET request to /dogs returns a 200 status and an array of dog records, ensuring data retrieval works correctly

- 200 for Retrieving a Specific Dog Record: Tests that a GET request to /dogs/1 returns a 200 status and the correct dog record, verifying accurate data fetch by ID

- 200 for Updating a Dog Record: Verifies that updating a dog record via PUT to /dogs/1 returns a 200 status and the correctly updated data

- 204 for Deleting a Dog Record: Ensures that deleting a dog record via DELETE to /dogs/{id} returns a 204 status, confirming the record is removed without returning any content

## UML
![UML Diagram](./img/uml3.png)

## Deployment
External Database on Render - postgres://postgresql_server_gokm_user:zgIKbTc2iCnS0FZ5fvc1IrUH7gAHlPb4@dpg-coq45cv79t8c7389iu00-a.oregon-postgres.render.com/postgresql_server_gokm

## Code Review
Started lab 4 and saw slack message too late, did not do a code review