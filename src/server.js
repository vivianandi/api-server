const express = require('express');
const cors = require('cors');
const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const validator = require('./middleware/logger.js');
const dogRoutes = require('./routes/dogs.routes.js');
const catRoutes = require('./routes/cats.routes.js');
const customerRoutes = require('./routes/customer.routes.js');

// Middleware to enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Custom validator middleware
app.use(validator);

// Basic route
app.get('/', (req, res) => res.send('Welcome to my home page'));

// Routes for dog and cat entities
app.use('/dogs', dogRoutes); // Ensure the path is specified if not defined within the route file
app.use('/cats', catRoutes); // Same as above
app.use('/customers', customerRoutes);

// Endpoint to intentionally trigger an error for testing purposes
app.get('/broken', (req, res, next) => next('whoops!'));

// 404 Handler should come after all route definitions
app.use(notFoundHandler); // This handles any undefined routes

// General error handler should be the last piece of middleware
app.use(errorHandler);

// Function to start the server on a given port
function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };
