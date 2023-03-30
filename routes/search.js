var express = require('express');
var router = express.Router();
const searchController = require('../controllers/main');

/* GET users listing. */
router.get('/', searchController.search);

module.exports = router;
