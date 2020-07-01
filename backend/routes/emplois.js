"use strict";
var express = require('express');
var router = express.Router();
var emploisController = require('../controllers/Emplois');

var service = 'emplois';

// get emplois or search emplois
router.get('/'+service, emploisController.find);

// get emploi
router.get('/'+service+'/:id', emploisController.findOne);

// create emploi(s) a single emploi object will create one emploi while an array of emplois will create multiple emplois
router.post('/'+service, emploisController.create);

// update all records that matches the query
router.put('/'+service+'/:id', emploisController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', emploisController.deleteOne);

module.exports = router;
