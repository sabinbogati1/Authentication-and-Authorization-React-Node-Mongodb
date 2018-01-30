var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var roleSchema = new Schema ({
    roleType:String
},{
    timestamps:true
});

var RoleModel = mongoose.model("role",roleSchema);
module.exports = RoleModel;