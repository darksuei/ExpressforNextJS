let path = require('path');

//Index Controller
module.exports.index = (req, res) => {
    res.render(path.join(__dirname,'..','views','index'), { title: 'Index Page' });
}

//Search Controller
module.exports.search = (req, res) => {
    res.render(path.join(__dirname,'..','views','index'), { title: 'Search Page' });
}

//Inventory Controller
module.exports.inventory = (req, res) => {
    res.render(path.join(__dirname,'..','views','index'), { title: 'Inventory Page' });
}

module.exports.nextauth = (req, res) => {
    res.json({x:'x'})
}
