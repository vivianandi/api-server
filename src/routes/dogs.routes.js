'use strict';

const express = require('express');
const { Dogs } = require('../models/index.model.js');

const router = express.Router();

router.get('/dogs', getDogs);
router.get('/dogs/:id', getDog);
router.post('/dogs', createDog);
router.put('/dogs/:id', updateDog);
router.delete('/dogs/:id', deleteDog);

async function getDogs(req, res) {
  let allDogs = await Dogs.findAll();
  res.status(200).json(allDogs);
}

async function getDog(req, res) {
  const id = parseInt(req.params.id);
  let dogRecord = await Dogs.findOne({ where: { id: id } });
  res.status(200).json(dogRecord);
}

async function createDog(req, res) {
  let newDog = req.body;
  let storedDog = await Dogs.create(newDog);
  res.status(201).json(storedDog);
}

async function updateDog(req, res) {
  const id = parseInt(req.params.id);
  const updatedDogObj = req.body;
  let fetchedDog = await Dogs.findOne({ where: { id: id } });
  let updatedDog = await fetchedDog.update(updatedDogObj);
  res.status(200).json(updatedDog);
}

async function deleteDog(req, res) {
  const id = parseInt(req.params.id);
  let deleteDog = await Dogs.destroy({ where: { id: id } });
  res.status(204).json(deleteDog);
}

module.exports = router;