var express = require('express');
var router = express.Router();
var model = require('../models');

/* GET users listing. */
router.get('/health', require('./health.controller'));

module.exports = router;