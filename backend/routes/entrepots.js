"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var entrepotsController = require('../controllers/Entrepots');

var service = 'entrepots';

// get entrepots or search entrepots
router.get('/'+service, entrepotsController.find);

// get entrepot
router.get('/'+service+'/:id', entrepotsController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create entrepot(s) a single entrepot object will create one entrepot while an array of entrepots will create multiple entrepots
router.post('/'+service, entrepotsController.create);

// update all records that matches the query
router.put('/'+service, entrepotsController.update);

// update a single record
router.patch('/'+service+'/:id', entrepotsController.updateOne);

// delete all records that matches the query
router.delete('/'+service, entrepotsController.delete);

// Delete a single record
router.delete('/'+service+'/:id', entrepotsController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', entrepotsController.restore);

module.exports = router;
