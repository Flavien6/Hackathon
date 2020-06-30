"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var localisationsController = require('../controllers/Localisations');

var service = 'localisations';

// get localisations or search localisations
router.get('/'+service, localisationsController.find);

// get localisation
router.get('/'+service+'/:id', localisationsController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create localisation(s) a single localisation object will create one localisation while an array of localisations will create multiple localisations
router.post('/'+service, localisationsController.create);

// update all records that matches the query
router.put('/'+service, localisationsController.update);

// update a single record
router.patch('/'+service+'/:id', localisationsController.updateOne);

// delete all records that matches the query
router.delete('/'+service, localisationsController.delete);

// Delete a single record
router.delete('/'+service+'/:id', localisationsController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', localisationsController.restore);

module.exports = router;
