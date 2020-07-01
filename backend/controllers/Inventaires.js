"use strict";
var Inventaires = require("../models").INVENTAIRE;
var service = "Inventaires";
var InventairesController = {};

InventairesController.find = function (req, res, next) {
    var query = {};
    query.where = {};

    if (req.query.produit_id != undefined) {
        query.where.produit_id = req.query.produit_id;
    }

    if (req.query.entrepot_id != undefined) {
        query.where.entrepot_id = req.query.entrepot_id;
    }

    Inventaires.findAll(query)
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

InventairesController.create = function (req, res, next) {
    var data = req.body;
    let question = Inventaires.create(data);

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

InventairesController.updateOne = function (req, res, next) {
    var id = req.params.id;
    var data = req.body;

    var _query = {};
    _query.where = {};

    if (req.query.produit_id != undefined) {
        _query.where.produit_id = req.query.produit_id;
    }

    if (req.query.entrepot_id != undefined) {
        _query.where.entrepot_id = req.query.entrepot_id;
    }

    Inventaires.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

InventairesController.deleteOne = function (req, res, next) {
    var _query = {};
    _query.where = {};

    if (req.query.produit_id != undefined) {
        _query.where.produit_id = req.query.produit_id;
    }

    if (req.query.entrepot_id != undefined) {
        _query.where.entrepot_id = req.query.entrepot_id;
    }

    // Find match
    Inventaires.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = InventairesController;
