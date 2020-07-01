"use strict";
var express = require('express');
var router = express.Router();
var employesController = require('../controllers/Employes');

var service = 'employes';

// get employes or search employes
router.get('/'+service, employesController.find);

// get employe
router.get('/'+service+'/:id', employesController.findOne);

// create employe(s) a single employe object will create one employe while an array of employes will create multiple employes
router.post('/'+service, employesController.create);

// update all records that matches the query
router.put('/'+service+'/:id', employesController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', employesController.deleteOne);

module.exports = router;
