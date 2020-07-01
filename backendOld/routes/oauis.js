const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors');
const fileSystem = require('fs');
const path = require('path');

const normalizedPath = path.join(__dirname, './');
var routeFiles = fileSystem.readdirSync(normalizedPath);

router.use(cors());
router.use(bodyParser.json());

routeFiles.forEach(function (file) {
    currentRoute = currentRoute + 1;
    var splitFileName = file.split('.');
    if (splitFileName[0] !== 'index') {
        require('./' + splitFileName[0] + '.' + splitFileName[1]);
    }
})

exports = router