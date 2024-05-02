'use strict'

require('dotenv').config();
console.log('Database URL:', process.env.DATABASE_URL);

const server = require('./src/server.js');
const { db } = require('./src/models/index.model.js');

console.log(db); // Check what is being imported
db.sync()
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch(console.error);
