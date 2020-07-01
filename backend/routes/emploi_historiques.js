"use strict";
var express = require("express");
var router = express.Router();
var emploi_historiquesController = require("../controllers/Emploi_historiques");

var service = "emploi_historiques";

// get emploi historiques or search emploi historiques
router.get("/" + service, emploi_historiquesController.find);

// create emploi historique(s) a single emploi historique object will create one emploi historique while an array of emploi historiques will create multiple emploi historiques
router.post("/" + service, emploi_historiquesController.create);

// update all records that matches the query
router.put("/" + service + "/:id", emploi_historiquesController.updateOne);

// Delete a single record
router.delete("/" + service + "/:id", emploi_historiquesController.deleteOne);

module.exports = router;
