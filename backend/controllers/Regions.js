"use strict";
var Regions = require("../models").REGION;
var service = "Regions";
var RegionsController = {};

RegionsController.find = function (req, res, next) {
    console.log(req.query);

    Regions.findAll()
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

RegionsController.findOne = function (req, res, next) {
    var question = Regions.findByPk(req.params.id);

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

RegionsController.create = function (req, res, next) {
    var data = req.body;
    let question = Regions.create(data);

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

RegionsController.updateOne = function (req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    var _query = {};
    var id = req.params.id;
    var data = req.body;
    _query.where = Regions.where = { id: id };
    Regions.update(data, _query)
        .then(function (resp) {
            if (!resp || resp == 0) {
                next({ statusCode: 404, message: "Could not find data" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

RegionsController.deleteOne = function (req, res, next) {
    var _query = {};
    var id = req.params.id;

    _query.where = { id: id };
    // Find match
    Regions.destroy(_query)
        .then(function (resp) {
            if (!resp) {
                next({ statusCode: 404, message: "No data Found !" });
            } else res.status(200).json({ statusCode: 200, message: "OK !" });
        })
        .catch(function (err) {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};

module.exports = RegionsController;
