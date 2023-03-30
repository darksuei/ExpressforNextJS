const mongoose = require('mongoose');
const {Inventory} = require('../models/inventorymodel');

// CONNECTION URI TO MONGO DATABASE
const uri = 'mongodb://127.0.0.1:27017/provider_db';

// MAKE ASYNCHRONOUS DATABASE CONNECTION
mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true})
.then(result =>{
    console.log('Succesfully established connection to mongodb database.')
})
.catch(err=> console.log(err));

module.exports = Inventory;