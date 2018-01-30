const AdminModel = require("./../models/admin");
const ClientModel = require("./../models/client");
const ServiceProviderModel = require("./../models/serviceProvider");
const config = require("./../config");
require("./../db")(config);

function Auth(){
    this.testing=(req,res) =>{
        console.log(" req", req);
        res.send("You are officially in auth route");
    }

    this.adminSignup=(req,res) =>{
        console.log("You are officially in sign up form", req.body);
        //res.send("You are officially in sign up form", req.body);

        var newAdmin = new AdminModel();
        newAdmin.email = req.body.email;
        newAdmin.password = req.body.password;
        newAdmin.displayName = req.body.displayName;
        newAdmin.phoneNumber = req.body.phoneNumber;
        newAdmin.role = req.body.role;
        newAdmin.isActive = true;


        newAdmin.save( (err,SavedAdmin) =>{
                    if(err){
                        console.log("Error occured in saving Admin signup: ",err);
                    }
                    else{

                        console.log("Admin SuccessFully Saved to database");
                        console.log(SavedAdmin);

                    }
        } )



    }



    this.clientSignup= (req,res)=>{

        var newClient = new ClientModel();
        newClient.email = req.body.email;
        newClient.password = req.body.password;
        newClient.displayName = req.body.displayName;
        newClient.phoneNumber = req.body.phoneNumber;
        newClient.address = req.body.address;
        newClient.isActive = true;


        newClient.save( (err,SavedClient) =>{
                    if(err){
                        console.log("Error occured in saving Admin signup: ",err);
                    }
                    else{

                        console.log("Client SuccessFully Saved to database");
                        console.log(SavedClient);

                    }
        } )


    }

    this.serviceProviderSignup= (req,res)=>{

        var newServiceProvider= new ServiceProviderModel();
        newServiceProvider.email = req.body.email;
        newServiceProvider.password = req.body.password;
        newServiceProvider.displayName = req.body.displayName;
        newServiceProvider.phoneNumber = req.body.phoneNumber;
        newServiceProvider.address = req.body.address;
        newServiceProvider.providedServiceType = req.body.providedServiceType;
        //newServiceProvider.isActive = true;


        newServiceProvider.save( (err,SavedServiceProvider) =>{
                    if(err){
                        console.log("Error occured in saving Admin signup: ",err);
                    }
                    else{

                        console.log("Client SuccessFully Saved to database");
                        console.log(SavedServiceProvider);

                    }
        } )


    }





}


module.exports = new Auth();