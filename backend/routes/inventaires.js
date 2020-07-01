"use strict";
var express = require('express');
var router = express.Router();
var inventairesController = require('../controllers/Inventaires');

var service = 'inventaires';

// get inventaires or search inventaires
router.get('/'+service, inventairesController.find);

// get inventaire
router.get('/'+service+'/:id', inventairesController.findOne);

// create inventaire(s) a single inventaire object will create one inventaire while an array of inventaires will create multiple inventaires
router.post('/'+service, inventairesController.create);

// update all records that matches the query
router.put('/'+service+'/:id', inventairesController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', inventairesController.deleteOne);

module.exports = router;
