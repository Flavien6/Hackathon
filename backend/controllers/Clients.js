"use strict";
var Clients = require("../models").CLIENT;
var service = "Clients";
var ClientsController = {};

ClientsController.find = function (req, res, next) {
    console.log(req.query);

    Clients.findAll()
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

ClientsController.findOne = function (req, res, next) {
    var question = Clients.findByPk(req.params.id);

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

ClientsController.create = function (req, res, next) {
    var data = req.body;
    let question = Clients.create(data);

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

ClientsController.updateOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;
    var data = req.body;
    _query.where = Clients.where = { id: id };
    Clients.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

ClientsController.deleteOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;

    _query.where = { id: id };
    // Find match
    Clients.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = ClientsController;
