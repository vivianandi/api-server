'use strict';

const express = require('express');
const { Cats } = require('../models/index.model.js');

const router = express.Router();

router.get('/', getCats);
router.get('/:id', getCat);
router.post('/', createCat);
router.put('/:id', updateCat);
router.delete('/:id', deleteCat);

async function getCats(req, res) {
  let allCats = await Cats.read();
  res.status(200).json(allCats);
}

async function getCat(req, res) {
  const id = parseInt(req.params.id);
  let catRecord = await Cats.read(id);
  res.status(200).json(catRecord);
}

async function createCat(req, res) {
  let newCat = req.body;
  let storedCat = await Cats.create(newCat);
  res.status(200).json(storedCat);
}

async function updateCat(req, res) {
  let id = request.params.id;
  let data = request.body;
  let updatedRecord = await Model.update(id, data);
  response.status(200).json(updatedRecord);
}

async function deleteCat(req, res) {
  const id = parseInt(req.params.id);
  let deleteCat = await Cats.delete(id);
  res.status(200).json(deleteCat);
}

module.exports = router;