import React, { Component } from 'react';
import axios from 'axios';
import {  Redirect, Route } from 'react-router-dom';
import AdminDashBoard from "./../Dashboard/AdminDashboard";
import ReportAdminDashboard from "./../Dashboard/ReportAdminDashboard";




class LogIn extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      token:"",
      redirectAdmin:false,
      redirectReportAdmin:false,
     redirectRoleNoteFound:false
    };
  }

  onChangeEmail(e){

    this.setState({
        email:e.target.value
    });

    console.log("Email :" , this.state.email);
  }


  onChangePassword(e){

    this.setState({
      password:e.target.value
    });

    console.log("PassWord :" , this.state.password);
  }



  onSubmit(){

    let email = this.state.email;
    let password = this.state.password;

    console.log("email: ", email);
    console.log("password: ", password);

    this.refs.email.value = '';
    this.refs.password.value = '';

    axios.post("/api/auth/login",{
      email: email,
      password: password,

    }).then((response)=>{
      console.log("Successfully Logged In ");
      console.log(" user:", response.data)

      console.log("USer ======> :" , response.data.user.role);
      console.log("Token ======> :" , response.data.token);

      this.setState({
        token:  response.data.token
      })

      console.log("Token : " , this.state.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);


      if(response.data.user.role === "Admin"){

        console.log("addddddmiinnnn ");

        this.setState({
          redirectAdmin:true
        })

      }
      else if(response.data.user.role === "Report Admin"){
        console.log("Report Admin Triggered....");
        this.setState({
          redirectReportAdmin:true
        })

        //return  <Redirect  to="/dashboard/ReportAdmin" />
      }


      else{
        redirectRoleNoteFound:true
      }

        //return <Redirect to="/signup/admin" />;


    }).catch((err)=>{
      console.log("Error in posting LogIn  form");
    })


  }




  render() {

    if(this.state.token && this.state.redirectReportAdmin){
      console.log("Render Admin");
      // return  <Route  path='/dashboard/ReportAdmin' component={ReportAdminDashboard}/>;
      return  <Redirect  to="/dashboard/ReportAdmin" />;
    }
     if(this.state.token && this.state.redirectAdmin){
      console.log("Render Report Admin");
      return  <Redirect to="/dashboard/admin" />;
    }

    return (




        <div>

      <div className="container">

<h4> WELCOME TO LOGIN FORM </h4>

  <div className="form-group">
    <label htmlFor="email">Enter Email / User Name:</label>
    {/* id="email" ref="email" onChange={this.onChangeEmail.bind(this)} */}
    <input type="text" className="form-control" id="email" onChange={this.onChangeEmail.bind(this)} ref="email"  />
  </div>
  <div className="form-group">
    <label htmlFor="password">Enter Password:</label>
    {/* ref="password" onChange={this.onChangePassword.bind(this)} */}
    <input type="password" className="form-control" id="password" onChange={this.onChangePassword.bind(this)} ref="password"  />
  </div>

  {/* onClick={this.onSubmit.bind(this)} */}
  <button type="submit" className="btn btn-primary" onClick={this.onSubmit.bind(this)} >Submit</button>

</div>
</div>



    );
  }
}

export default LogIn;
