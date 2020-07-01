'use strict'
var CommandeLignes = require('../models').COMMANDE_LIGNE
var debug = require('debug')('CommandeLignesController')

var service = 'CommandeLignes'
var CommandeLignesController = {}

CommandeLignesController.find = function (req, res, next) {
    var query = {}
    query.where = {}

    if (req.query.produit_id != undefined) {
        query.where.produit_id = req.query.produit_id
    }

    if (req.query.commande_id != undefined) {
        query.where.commande_id = req.query.commande_id
    }

    CommandeLignes.findAll(query)
        .then(function (resp) {
            //console.log(resp)
            if (!resp) {
                next({ statusCode: 404, message: 'Could not find data' });
            }
            else
                res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: 'Unknown Error !' });
        });
}

CommandeLignesController.create = function (req, res, next) {
    var data = req.body;
    let question = CommandeLignes.create(data);

    question
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 500, message: 'Server Error !' });
            }
            else
                res.status(200).json(resp);
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: 'Unknown Error !' });
        });
}

CommandeLignesController.updateOne = function (req, res, next) {
    var id = req.params.id;
    var data = req.body;


    var _query = {};
    _query.where = {}

    if (req.query.produit_id != undefined) {
        _query.where.produit_id = req.query.produit_id
    }

    if (req.query.commande_id != undefined) {
        _query.where.commande_id = req.query.commande_id
    }

    CommandeLignes.update(data, _query)
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 500, message: 'Server Error !' });
            }
            else
                res.status(200).json({ statusCode: 200, message: 'OK !' });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: 'Unknown Error !' });
        });
}

CommandeLignesController.deleteOne = function (req, res, next) {
    var _query = {};
    _query.where = {}

    if (req.query.produit_id != undefined) {
        _query.where.produit_id = req.query.produit_id
    }

    if (req.query.commande_id != undefined) {
        _query.where.commande_id = req.query.commande_id
    }

    // Find match
    CommandeLignes.destroy(_query)
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 404, message: 'No data Found !' });
            }
            else
                res.status(200).json({ statusCode: 200, message: 'OK !' });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: 'Unknown Error !' });
        });
}

module.exports = CommandeLignesController