"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var employesController = require('../controllers/Employes');

var service = 'employes';

// get employes or search employes
router.get('/'+service, employesController.find);

// get employe
router.get('/'+service+'/:id', employesController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create employe(s) a single employe object will create one employe while an array of employes will create multiple employes
router.post('/'+service, employesController.create);

// update all records that matches the query
router.put('/'+service, employesController.update);

// update a single record
router.patch('/'+service+'/:id', employesController.updateOne);

// delete all records that matches the query
router.delete('/'+service, employesController.delete);

// Delete a single record
router.delete('/'+service+'/:id', employesController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', employesController.restore);

module.exports = router;
