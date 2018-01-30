var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({

    email: {
        type: String,
        unique: true
    },
    password: String,
    displayName: String,
    phoneNumber: Number,
    role: String,
    isActive: Boolean

},{
    timestamps:true
});


var AdminModel = mongoose.model("admin",adminSchema);

module.exports = AdminModel;