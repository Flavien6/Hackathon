"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var secteursController = require('../controllers/Secteurs');

var service = 'secteurs';

// get secteurs or search secteurs
router.get('/'+service, secteursController.find);

// get secteur
router.get('/'+service+'/:id', secteursController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create secteur(s) a single secteur object will create one secteur while an array of secteurs will create multiple secteurs
router.post('/'+service, secteursController.create);

// update all records that matches the query
router.put('/'+service, secteursController.update);

// update a single record
router.patch('/'+service+'/:id', secteursController.updateOne);

// delete all records that matches the query
router.delete('/'+service, secteursController.delete);

// Delete a single record
router.delete('/'+service+'/:id', secteursController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', secteursController.restore);

module.exports = router;
