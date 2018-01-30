const RoleModel = require("./../models/role");
function Role(){

    this.getAll=(req,res) =>{

        RoleModel.find({}, (err,result)=>{
			if(err){
				return res.send();
			}
			else{
				res.status(200).json(result);
			}
		})


    }


}


module.exports = new Role();