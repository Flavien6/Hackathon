"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var inventairesController = require('../controllers/Inventaires');

var service = 'inventaires';

// get inventaires or search inventaires
router.get('/'+service, inventairesController.find);

// get inventaire
router.get('/'+service+'/:id', inventairesController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create inventaire(s) a single inventaire object will create one inventaire while an array of inventaires will create multiple inventaires
router.post('/'+service, inventairesController.create);

// update all records that matches the query
router.put('/'+service, inventairesController.update);

// update a single record
router.patch('/'+service+'/:id', inventairesController.updateOne);

// delete all records that matches the query
router.delete('/'+service, inventairesController.delete);

// Delete a single record
router.delete('/'+service+'/:id', inventairesController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', inventairesController.restore);

module.exports = router;
