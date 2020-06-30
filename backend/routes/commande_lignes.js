"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var commande_lignesController = require('../controllers/Commande_lignes');

var service = 'commande lignes';

// get commande lignes or search commande lignes
router.get('/'+service, commande_lignesController.find);

// get commande ligne
router.get('/'+service+'/:id', commande_lignesController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create commande ligne(s) a single commande ligne object will create one commande ligne while an array of commande lignes will create multiple commande lignes
router.post('/'+service, commande_lignesController.create);

// update all records that matches the query
router.put('/'+service, commande_lignesController.update);

// update a single record
router.patch('/'+service+'/:id', commande_lignesController.updateOne);

// delete all records that matches the query
router.delete('/'+service, commande_lignesController.delete);

// Delete a single record
router.delete('/'+service+'/:id', commande_lignesController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', commande_lignesController.restore);

module.exports = router;
