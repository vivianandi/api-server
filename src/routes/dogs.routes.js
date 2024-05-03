'use strict';

const express = require('express');
const { Dogs } = require('../models/index.model.js');

const router = express.Router();

router.get('/', getDogs);
router.get('/:id', getDog);
router.post('/', createDog);
router.put('/:id', updateDog);
router.delete('/:id', deleteDog);

async function getDogs(req, res) {
  let allDogs = await Dogs.read();
  res.status(200).json(allDogs);
}

async function getDog(req, res) {
  const id = parseInt(req.params.id);
  let dogRecord = await Dogs.read(id);
  res.status(200).json(dogRecord);
}

async function createDog(req, res) {
  let newDog = req.body;
  let storedDog = await Dogs.create(newDog);
  res.status(201).json(storedDog);
}

/* CHANGE THIS ONE
async function updateDog(req, res) {
  const id = parseInt(req.params.id);
  const updatedDogObj = req.body;
  let fetchedDog = await Dogs.findOne({ where: { id: id } });
  let updatedDog = await fetchedDog.update(updatedDogObj);
  res.status(200).json(updatedDog);
}
*/

//change to this one 
async function updateDog(req, res) {
  let id = request.params.id;
  let data = request.body;
  let updatedRecord = await Model.update(id, data);
  response.status(200).json(updatedRecord);
}

async function deleteDog(req, res) {
  const id = parseInt(req.params.id);
  let deleteDog = await Dogs.delete(id);
  res.status(204).json(deleteDog);
}

module.exports = router;