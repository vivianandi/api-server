const { Sequelize, DataTypes } = require('sequelize');

// Determine the DATABASE_URL based on the environment
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

// Configure sequelize options based on the environment
let sequelizeOptions = {
  dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres', // Specify the dialect
};

if (process.env.NODE_ENV === 'test') {
  sequelizeOptions.storage = 'memory'; // For SQLite in-memory database
}

// Initialize sequelize with the database URL and options
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

// Require model files
const catModel = require('./cats.model.js');
const dogModel = require('./dogs.model.js');

module.exports = {
  db: sequelize,
  Cats: catModel(sequelize, DataTypes),
  Dogs: dogModel(sequelize, DataTypes),
};
