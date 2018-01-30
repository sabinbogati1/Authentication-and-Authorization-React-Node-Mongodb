//const config = require("./config");

var mongoose = require("mongoose");
//var db_url = "mongodb://127.0.0.1:27017/convergetreeevent";


module.exports = function(config){

    mongoose.connect(config.mongodb.url);

    mongoose.connection.on("error", function(err){
        console.log("Error occured while connecting to db");
    });


    mongoose.connection.once("open", function(done){
        console.log("SuccessFully connecting to db");
    })


}