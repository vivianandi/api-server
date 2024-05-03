const { Sequelize, DataTypes } = require('sequelize');

// Determine the DATABASE_URL based on the environment
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// Configure sequelize options based on the environment
let sequelizeOptions = {
  dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres', // Specify the dialect
};

if (process.env.NODE_ENV === 'test') {
  sequelizeOptions.storage = 'memory'; // For SQLite in-memory database
}

// Initialize sequelize with the database URL and options
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const Collection = require('./collection.model.js');
const dogSchema = require('./dogs.model.js');
const dogModel = dogSchema(sequelize, DataTypes);

const catSchema = require('./cats.model.js');
const catModel = catSchema(sequelize, DataTypes);

const customerSchema = require('./customer.model.js');
const customerModel = customerSchema(sequelize, DataTypes);

const dogCollection = new Collection(dogModel);
const catCollection = new Collection(catModel);
const customerCollection = new Collection(customerModel);

// foreign key is the column name in the child table that references the sourceKey in the parent table
customerModel.hasMany(dogModel, { foreignKey: 'customerId', sourceKey: 'id' });
customerModel.hasMany(catModel, { foreignKey: 'customerId', sourceKey: 'id' });
dogModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });
catModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });

//ALSO CHANGE
module.exports = {
  db: sequelize,
  Dogs: dogCollection,
  Cats: catCollection,
  Customers: customerCollection
};
