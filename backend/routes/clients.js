"use strict";
var express = require('express');
var router = express.Router();
var clientsController = require('../controllers/Clients');

var service = 'clients';

// get clients or search clients
router.get('/'+service, clientsController.find);

// get client
router.get('/'+service+'/:id', clientsController.findOne);

// create client(s) a single client object will create one client while an array of clients will create multiple clients
router.post('/'+service, clientsController.create);

// update all records that matches the query
router.put('/'+service+'/:id', clientsController.updateOne);

// Delete a single record
router.delete('/'+service+'/:id', clientsController.deleteOne);

module.exports = router;