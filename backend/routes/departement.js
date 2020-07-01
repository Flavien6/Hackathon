"use strict";
var express = require('express');
var router = express.Router();
var departementCtrl = require('../controllers/Departement');

var service = 'departement';

// get clients or search clients
router.get('/' + service, departementCtrl.find);

// get client
router.get('/' + service + '/:id', departementCtrl.findOne);

// create client(s) a single client object will create one client while an array of clients will create multiple clients
router.post('/' + service, departementCtrl.create);

// update all records that matches the query
router.put('/' + service + '/:id', departementCtrl.updateOne);

// Delete a single record
router.delete('/' + service + '/:id', departementCtrl.deleteOne);

module.exports = router;