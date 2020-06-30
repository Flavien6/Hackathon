"use strict";
var express = require('express');
var router = express.Router();
var validator = require('../services/validator');
var clientsController = require('../controllers/Clients');

var service = 'clients';

// get clients or search clients
router.get('/'+service, clientsController.find);

// get client
router.get('/'+service+'/:id', clientsController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }, validator,

// create client(s) a single client object will create one client while an array of clients will create multiple clients
router.post('/'+service, clientsController.create);

// update all records that matches the query
router.put('/'+service, clientsController.update);

// update a single record
router.patch('/'+service+'/:id', clientsController.updateOne);

// delete all records that matches the query
router.delete('/'+service, clientsController.delete);

// Delete a single record
router.delete('/'+service+'/:id', clientsController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', clientsController.restore);

module.exports = router;