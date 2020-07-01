const express = require('express');
const router = express.Router();
const fileSystem = require('fs');
const path = require('path');

const normalizedPath = path.join(__dirname, './');
var routeFiles = fileSystem.readdirSync(normalizedPath);

routeFiles.forEach(function (file) {
    var splitFileName = file.split('.');
    if (splitFileName[0] !== 'index') {
        console.log('./' + splitFileName[0] + '.' + splitFileName[1])
        router.use('/', require('./' + splitFileName[0] + '.' + splitFileName[1]));
    }
})

module.exports = router