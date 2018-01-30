const AdminModel = require("./../models/admin");
var jwt = require("jsonwebtoken");



function createToken(data){
    var token = jwt.sign({
        _id:data._id,
        email:data.email
    },"secret",{
        expiresIn: "2h"
    })

    return token;
}

function LogIn(){
    this.login=(req,res)=>{

     //console.log(" LOgin Page :" , req.body);

     AdminModel.findOne({
         email:req.body.email

     }, (err,user) =>{
         if(err){
             console.log("Error Occured During Login in BaackEnd");
         }

         if(user){
            console.log("User: " , user);
            var token = createToken(user);
            res.json({
                user:user,
                token:token
            });
         }
         else{
             console.log("User of Such Email is not Found");
         }



        //  if(user){

        //     console.log("You have SucessFully Logged In");
        //  }
     })

    }
}


module.exports = new LogIn();