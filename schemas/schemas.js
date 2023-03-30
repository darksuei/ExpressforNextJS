const mongoose = require('mongoose');


// DEFINE A SCHEMA
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
    {
        "index": {type: Number, required:true},
        "firstname": {type: String, required:true},
        "lastname": {type: String, required:true}
      }
);
module.exports = {inventorySchema};