"use strict";
var Commandes = require("../models").COMMANDE;
var service = "Commandes";
var CommandesController = {};

CommandesController.find = function (req, res, next) {
    console.log(req.query);

    Commandes.findAll()
        .then(function (resp) {
            //console.log(resp)
            if (!resp) {
                next({ statusCode: 404, message: "Could not find data" });
            } else res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

CommandesController.findOne = function (req, res, next) {
    var question = Commandes.findByPk(req.params.id);

    question
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 404, message: "Could not find data" });
            } else res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

CommandesController.create = function (req, res, next) {
    var data = req.body;
    let question = Commandes.create(data);

    question
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 500, message: "Server Error !" });
            } else res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

CommandesController.updateOne = function (req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    var _query = {};
    var id = req.params.id;
    var data = req.body;
    _query.where = Commandes.where = { id: id };
    Commandes.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

CommandesController.deleteOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;

    _query.where = { id: id };
    // Find match
    Commandes.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = CommandesController;
