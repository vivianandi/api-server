'use strict';

// const { DataTypes } = require('sequelize');
// const { dbConnect } = require('./index.model');

const Dogs = (dbConnect, DataTypes) => {
  return dbConnect.define('Dogs', {
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogBreed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogMood: {
      type: DataTypes.STRING
    },
  });
};

module.exports = Dogs;