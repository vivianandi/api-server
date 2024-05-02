const { Sequelize, DataTypes } = require('sequelize');

// Adjust these variables as necessary for your environment
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI, {
  dialect: 'postgres', // Add this line to specify the dialect
  logging: false       // Optional: Turn off logging
});
