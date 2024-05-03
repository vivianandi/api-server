'use strict';

const Cats = (sequelize, DataTypes) => sequelize.define('Cats', {
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

module.exports = Cats;

