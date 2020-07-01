"use strict";
var EmploiHistoriques = require("../models").EMPLOI_HISTORIQUE;
var service = "EmploiHistoriques";
var EmploiHistoriquesController = {};

EmploiHistoriquesController.find = function (req, res, next) {
    var query = {};
    query.where = {};

    if (req.query.employe_id != undefined) {
        query.where.employe_id = req.query.employe_id;
    }

    if (req.query.emploi_id != undefined) {
        query.where.emploi_id = req.query.emploi_id;
    }

    if (req.query.departement_id != undefined) {
        query.where.departement_id = req.query.departement_id;
    }

    EmploiHistoriques.findAll(query)
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

EmploiHistoriquesController.create = function (req, res, next) {
    var data = req.body;
    let question = EmploiHistoriques.create(data);

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

EmploiHistoriquesController.updateOne = function (req, res, next) {
    var id = req.params.id;
    var data = req.body;

    var _query = {};
    _query.where = {};

    if (req.query.employe_id != undefined) {
        _query.where.employe_id = req.query.employe_id;
    }

    if (req.query.emploi_id != undefined) {
        _query.where.emploi_id = req.query.emploi_id;
    }

    if (req.query.departement_id != undefined) {
        _query.where.departement_id = req.query.departement_id;
    }

    EmploiHistoriques.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

EmploiHistoriquesController.deleteOne = function (req, res, next) {
    var _query = {};
    _query.where = {};

    if (req.query.employe_id != undefined) {
        _query.where.employe_id = req.query.employe_id;
    }

    if (req.query.emploi_id != undefined) {
        _query.where.emploi_id = req.query.emploi_id;
    }

    if (req.query.departement_id != undefined) {
        _query.where.departement_id = req.query.departement_id;
    }

    // Find match
    EmploiHistoriques.destroy(_query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = EmploiHistoriquesController;
