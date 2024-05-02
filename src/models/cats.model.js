'use strict';

// const { DataTypes } = require('sequelize');
// const { dbConnect } = require('./index.model');

const Cats = (dbConnect, DataTypes) => {
  return dbConnect.define('Cats', {
    catName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    furColor: {
      type: DataTypes.STRING,
    },
    catMood: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};

module.exports = Cats;
