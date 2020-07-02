"use strict";
var express = require("express");
var router = express.Router();
var chatCtrl = require("../controllers/Chat");

router.get("/supersecret/chat/:code", chatCtrl);

module.exports = router;
