"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var produit_infosController = require('../controllers/Produit_infos');

var service = 'produit infos';

// get produit infos or search produit infos
router.get('/'+service, produit_infosController.find);

// get produit info
router.get('/'+service+'/:id', produit_infosController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create produit info(s) a single produit info object will create one produit info while an array of produit infos will create multiple produit infos
router.post('/'+service, produit_infosController.create);

// update all records that matches the query
router.put('/'+service, produit_infosController.update);

// update a single record
router.patch('/'+service+'/:id', produit_infosController.updateOne);

// delete all records that matches the query
router.delete('/'+service, produit_infosController.delete);

// Delete a single record
router.delete('/'+service+'/:id', produit_infosController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', produit_infosController.restore);

module.exports = router;
