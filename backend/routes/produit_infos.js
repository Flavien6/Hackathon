"use strict";
var express = require('express');
var router = express.Router();
var produit_infosController = require('../controllers/Produit_infos');

var service = 'produit infos';

// get produit infos or search produit infos
router.get('/'+service, produit_infosController.find);

// get produit info
router.get('/'+service+'/:id', produit_infosController.findOne);

// create produit info(s) a single produit info object will create one produit info while an array of produit infos will create multiple produit infos
router.post('/'+service, produit_infosController.create);

// update all records that matches the query
router.put('/'+service+'/:id', produit_infosController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', produit_infosController.deleteOne);

module.exports = router;
