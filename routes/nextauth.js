var express = require('express');
var router = express.Router();

const indexController = require('../controllers/main');

/* GET home page. */
router.get('/', indexController.nextauth );

module.exports = router;
