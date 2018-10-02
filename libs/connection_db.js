var mongoose = require('mongoose');

var db;

module.exports = function(){  
    mongoose.connect('mongodb://localhost:27017/aprendendoNode', { useNewUrlParser: true });
    
    return mongoose;
}