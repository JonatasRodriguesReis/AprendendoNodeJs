module.exports =function(){
    var db = require('./../libs/connection_db')();
    var Schema = require('mongoose').Schema;
    var task = new Schema({
        title : String,
        description: String,
        status : Boolean
    });

    return db.model('tasks',task);
}