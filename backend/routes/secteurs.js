"use strict";
var express = require('express');
var router = express.Router();
var secteursController = require('../controllers/Secteurs');

var service = 'secteurs';

// get secteurs or search secteurs
router.get('/'+service, secteursController.find);

// get secteur
router.get('/'+service+'/:id', secteursController.findOne);

// create secteur(s) a single secteur object will create one secteur while an array of secteurs will create multiple secteurs
router.post('/'+service, secteursController.create);

// update all records that matches the query
router.put('/'+service+'/:id', secteursController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', secteursController.deleteOne);

module.exports = router;
