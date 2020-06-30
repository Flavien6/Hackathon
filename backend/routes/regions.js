"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var regionsController = require('../controllers/Regions');

var service = 'regions';

// get regions or search regions
router.get('/'+service, regionsController.find);

// get region
router.get('/'+service+'/:id', regionsController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create region(s) a single region object will create one region while an array of regions will create multiple regions
router.post('/'+service, regionsController.create);

// update all records that matches the query
router.put('/'+service, regionsController.update);

// update a single record
router.patch('/'+service+'/:id', regionsController.updateOne);

// delete all records that matches the query
router.delete('/'+service, regionsController.delete);

// Delete a single record
router.delete('/'+service+'/:id', regionsController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', regionsController.restore);

module.exports = router;
