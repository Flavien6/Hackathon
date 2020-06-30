"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var emploisController = require('../controllers/Emplois');

var service = 'emplois';

// get emplois or search emplois
router.get('/'+service, emploisController.find);

// get emploi
router.get('/'+service+'/:id', emploisController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create emploi(s) a single emploi object will create one emploi while an array of emplois will create multiple emplois
router.post('/'+service, emploisController.create);

// update all records that matches the query
router.put('/'+service, emploisController.update);

// update a single record
router.patch('/'+service+'/:id', emploisController.updateOne);

// delete all records that matches the query
router.delete('/'+service, emploisController.delete);

// Delete a single record
router.delete('/'+service+'/:id', emploisController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', emploisController.restore);

module.exports = router;
