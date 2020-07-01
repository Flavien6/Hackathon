"use strict";
var express = require('express');
var router = express.Router();
var regionsController = require('../controllers/Regions');

var service = 'regions';

// get regions or search regions
router.get('/'+service, regionsController.find);

// get region
router.get('/'+service+'/:id', regionsController.findOne);

// create region(s) a single region object will create one region while an array of regions will create multiple regions
router.post('/'+service, regionsController.create);

// update all records that matches the query
router.put('/'+service+'/:id', regionsController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', regionsController.deleteOne);

module.exports = router;
