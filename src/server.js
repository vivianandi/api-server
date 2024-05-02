'use strict';

const express = require('express');
const server = express();
const validator = require('./middleware/validator.js');
const handle404 = require('./handlers/404.js');
const handle500 = require('./handlers/500.js');
const dogRoutes = require('./routes/dogs.routes.js');
const catRoutes = require('./routes/cats.routes.js');

function start(PORT) {
  server.listen(PORT, () => console.log(`I am listing on PORT ${PORT}`));
}

server.use(validator);

server.use(express.json());

server.get('/', (req, res) => res.send('Welcome to my home page'));

server.use(dogRoutes);
server.use(catRoutes);

server.use('*', handle404);
server.use(handle500);

module.exports = { server, start };