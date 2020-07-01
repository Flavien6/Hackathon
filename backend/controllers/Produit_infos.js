"use strict";
var ProduitInfos = require("../models").PRODUIT_INFO;
var service = "ProduitInfos";
var ProduitInfosController = {};

ProduitInfosController.find = function (req, res, next) {
    ProduitInfos.findAll()
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 404, message: "Could not find data" });
            } else res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

ProduitInfosController.findOne = function (req, res, next) {
    var question = ProduitInfos.findByPk(req.params.id);

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

ProduitInfosController.create = function (req, res, next) {
    var data = req.body;
    let question = ProduitInfos.create(data);

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

ProduitInfosController.updateOne = function (req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    var _query = {};
    var id = req.params.id;
    var data = req.body;
    _query.where = ProduitInfos.where = { id: id };
    ProduitInfos.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

ProduitInfosController.deleteOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;

    _query.where = { id: id };
    // Find match
    ProduitInfos.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = ProduitInfosController;
