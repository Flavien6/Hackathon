"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var emploi_historiquesController = require('../controllers/Emploi_historiques');

var service = 'emploi historiques';

// get emploi historiques or search emploi historiques
router.get('/'+service, emploi_historiquesController.find);

// get emploi historique
router.get('/'+service+'/:id', emploi_historiquesController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create emploi historique(s) a single emploi historique object will create one emploi historique while an array of emploi historiques will create multiple emploi historiques
router.post('/'+service, emploi_historiquesController.create);

// update all records that matches the query
router.put('/'+service, emploi_historiquesController.update);

// update a single record
router.patch('/'+service+'/:id', emploi_historiquesController.updateOne);

// delete all records that matches the query
router.delete('/'+service, emploi_historiquesController.delete);

// Delete a single record
router.delete('/'+service+'/:id', emploi_historiquesController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', emploi_historiquesController.restore);

module.exports = router;
