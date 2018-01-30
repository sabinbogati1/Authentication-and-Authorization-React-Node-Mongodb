var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clientSchema  = new Schema({

    email: {
        type: String,
        unique: true
    },
    password: String,
    displayName:String,
    phoneNumber: Number,
    address:String,
    isActive: Boolean
},{
    timestamps:true
});


var ClientModel = mongoose.model("client",clientSchema);

module.exports = ClientModel;