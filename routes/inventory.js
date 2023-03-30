var express = require('express');
var router = express.Router();
const inventoryController = require('../controllers/main');

/* GET users listing. */
router.get('/', inventoryController.inventory);

module.exports = router;
