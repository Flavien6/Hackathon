"use strict";
var express = require('express');
var router = express.Router();
var localisationsController = require('../controllers/Localisations');

var service = 'localisations';

// get localisations or search localisations
router.get('/'+service, localisationsController.find);

// get localisation
router.get('/'+service+'/:id', localisationsController.findOne);

// create localisation(s) a single localisation object will create one localisation while an array of localisations will create multiple localisations
router.post('/'+service, localisationsController.create);

// update all records that matches the query
router.put('/'+service+'/:id', localisationsController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', localisationsController.deleteOne);

module.exports = router;
