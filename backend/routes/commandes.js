"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var commandesController = require('../controllers/Commandes');

var service = 'commandes';

// get commandes or search commandes
router.get('/'+service, commandesController.find);

// get commande
router.get('/'+service+'/:id', commandesController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create commande(s) a single commande object will create one commande while an array of commandes will create multiple commandes
router.post('/'+service, commandesController.create);

// update all records that matches the query
router.put('/'+service, commandesController.update);

// update a single record
router.patch('/'+service+'/:id', commandesController.updateOne);

// delete all records that matches the query
router.delete('/'+service, commandesController.delete);

// Delete a single record
router.delete('/'+service+'/:id', commandesController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', commandesController.restore);

module.exports = router;
