'use strict';

const express = require('express');
const { Cats } = require('../models/index.model.js');

const router = express.Router();

router.get('/cats', getCats);
router.get('/cats/:id', getCat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.delete('/cats/:id', deleteCat);

async function getCats(req, res) {
  let allCats = await Cats.findAll();
  res.status(200).json(allCats);
}

async function getCat(req, res) {
  const id = parseInt(req.params.id);
  let catRecord = await Cats.findOne({ where: { id: id } });
  res.status(200).json(catRecord);
}

async function createCat(req, res) {
  let newCat = req.body;
  let storedCat = await Cats.create(newCat);
  res.status(200).json(storedCat);
}

async function updateCat(req, res) {
  const id = parseInt(req.params.id);
  const udpatedCatObj = req.body;
  let fetchedCat = await Cats.findOne({ where: { id: id } });
  let updatedCat = await fetchedCat.update(udpatedCatObj);
  res.status(200).json(updatedCat);
}

async function deleteCat(req, res) {
  const id = parseInt(req.params.id);
  let deleteCat = await Cats.destroy({ where: { id: id } });
  res.status(200).json(deleteCat);
}

module.exports = router;