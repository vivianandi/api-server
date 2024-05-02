'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const validator = require('./middleware/validator.js');
const dogRoutes = require('./routes/dogs.routes.js');
const catRoutes = require('./routes/cats.routes.js');

// Middleware to enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Custom validator middleware
app.use(validator);

// Basic route
app.get('/', (req, res) => res.send('Welcome to my home page'));

// Routes for dog and cat entities
app.use(dogRoutes);
app.use(catRoutes);

// Endpoint to intentionally trigger an error for testing purposes
app.get('/broken', (req, res, next) => next('whoops!'));

// Error handling for undefined routes and server errors
app.use('*', notFoundHandler);
app.use(errorHandler);

// Function to start the server on a given port
function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };
