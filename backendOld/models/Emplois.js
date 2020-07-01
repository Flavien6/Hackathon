"use strict";

var db = require('../services/database').sql;
var queue = require('../services/queue');

var table = 'Emplois';
var debug = require('debug')(table);

// Define schema
var schemaObject = {
    // ++++++++++++++ Modify to your own schema ++++++++++++++++++
    name: {
        type: db._sequelize.STRING
    },
    someOtherStringData: {
        type: db._sequelize.STRING
    },
    toPop: {
        type: db._sequelize.INTEGER
    }
    // ++++++++++++++ Modify to your own schema ++++++++++++++++++
};


schemaObject.owner = {
    type: db._sequelize.STRING
};

schemaObject.createdBy = {
    type: db._sequelize.STRING
};

schemaObject.client = {
    type: db._sequelize.STRING
};

schemaObject.developer = {
    type: db._sequelize.STRING
};

schemaObject.tags = {
    type: db._sequelize.STRING
};

schemaObject._id = {
    type: db._sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
};


// Define the table
var Emplois = db.define(table, schemaObject, {
    // Don't really delete data
    // paranoid: true,
    // define indexes here
    indexes:[{
        fields:['tags']
    },
    {
        unique: true,
        fields:['_id']
    }]
});

Emplois.associate = function (models) {
    // models.Emplois.belongsTo(models.toPop, { foreignKey: 'toPop', sourceKey: '_id' });
};

// Emplois.hasMany(Emplois, {foreignKey: 'toPop', sourceKey: '_id'});

// Adding hooks
Emplois.afterCreate(function(user, options) {
    // Indexing for search
    var ourDoc = user.dataValues;
    ourDoc.isSQL = true;
    ourDoc.model = table;

    // Dump it in the queue
    queue.create('searchIndex', ourDoc)
    .save();
});

Emplois.search = function(string){
    return Emplois.findAll({
        where: {
            tags: {
                $like: '%'+string
            }
        }
    });
};

Emplois.sync();

Emplois.transaction = db.transaction;

module.exports = Emplois;
// ToDo: Test transactions
