"use strict";
var express = require('express');
var router = express.Router();
var commande_lignesController = require('../controllers/Commande_lignes');

var service = 'commande_lignes';

// get commande lignes or search commande lignes
router.get('/'+service, commande_lignesController.find);

// get commande ligne
router.get('/'+service+'/:id', commande_lignesController.findOne);

// create commande ligne(s) a single commande ligne object will create one commande ligne while an array of commande lignes will create multiple commande lignes
router.post('/'+service, commande_lignesController.create);

// update all records that matches the query
router.put('/'+service + '/:id', commande_lignesController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', commande_lignesController.deleteOne);

module.exports = router;
