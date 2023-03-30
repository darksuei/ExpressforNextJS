const mongoose = require('mongoose');
const {inventorySchema} = require('../schemas/schemas');

// CREATE INVENTORY MODEL
const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = { Inventory }