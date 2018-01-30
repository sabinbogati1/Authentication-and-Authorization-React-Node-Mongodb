var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var serviceProviderSchema= new Schema({

    email: {
        type: String,
        unique: true
    },
    password: String,
    displayName:String,
    phoneNumber: Number,
    address:String,
    providedServiceType:String
},{
    timestamps:true
});


var serviceProviderModel = mongoose.model("serviceProvider",serviceProviderSchema);

module.exports = serviceProviderModel;