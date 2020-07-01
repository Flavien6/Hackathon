"use strict";
var express = require('express');
var router = express.Router();
var entrepotsController = require('../controllers/Entrepots');

var service = 'entrepots';

// get entrepots or search entrepots
router.get('/'+service, entrepotsController.find);

// get entrepot
router.get('/'+service+'/:id', entrepotsController.findOne);

// create entrepot(s) a single entrepot object will create one entrepot while an array of entrepots will create multiple entrepots
router.post('/'+service, entrepotsController.create);

// update all records that matches the query
router.put('/'+service+'/:id', entrepotsController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', entrepotsController.deleteOne);

module.exports = router;
