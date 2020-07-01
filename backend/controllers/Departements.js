"use strict";
var Departements = require("../models").DEPARTEMENT;
var service = "Departements";
var DepartementsController = {};

DepartementsController.find = function (req, res, next) {
    console.log(req.query);

    Departements.findAll()
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

DepartementsController.findOne = function (req, res, next) {
    var question = Departements.findByPk(req.params.id);

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

DepartementsController.create = function (req, res, next) {
    var data = req.body;
    let question = Departements.create(data);

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

DepartementsController.updateOne = function (req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    var _query = {};
    var id = req.params.id;
    var data = req.body;
    _query.where = Departements.where = { id: id };
    Departements.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

DepartementsController.deleteOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;

    _query.where = { id: id };
    // Find match
    Departements.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = DepartementsController;
