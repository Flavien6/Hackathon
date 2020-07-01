"use strict";
var express = require('express');
var router = express.Router();
var commandesController = require('../controllers/Commandes');

var service = 'commandes';

// get commandes or search commandes
router.get('/'+service, commandesController.find);

// get commande
router.get('/'+service+'/:id', commandesController.findOne);

// create commande(s) a single commande object will create one commande while an array of commandes will create multiple commandes
router.post('/'+service, commandesController.create);

// update all records that matches the query
router.put('/'+service+'/:id', commandesController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', commandesController.deleteOne);

module.exports = router;
