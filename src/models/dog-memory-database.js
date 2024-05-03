'use strict';

//just example of the database
let data = {
  1: { dogName: "Rex", dogBreed: "Labrador", dogMood: "Happy" },
  2: { dogName: "Bella", dogBreed: "Beagle", dogMood: "Excited" },
};

function findAll() {
  return Object.values(data);
}

function findOne(id) {
  return data[id];
}

function create(record) {
  record.id = Math.random();
  data[record.id] = record;
  return data[record.id];
}

function update(id, record) {
  data[id] = record;
  return data[id];
}

function destroy(id) {
  const deletedData = data[id];
  delete data[id];
  return deletedData; // Return the deleted record for confirmation
}

module.exports = { findAll, findOne, create, update, destroy };
