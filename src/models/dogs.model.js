'use strict';

const Dogs = (sequelize, DataTypes) => sequelize.define('Dogs', {
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

module.exports = Dogs;
