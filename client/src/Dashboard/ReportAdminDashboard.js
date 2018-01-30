import React, { Component } from 'react';
import {  Redirect} from 'react-router-dom';

class ReportAdminDashboard extends Component {



  onLogout(){
    localStorage.removeItem("token");
    this.setState({});
  }

  isAuthenticated(){
    const token= localStorage.getItem("token");
    const role=localStorage.getItem("role");
    if(token  && token.length && role==="Report Admin"  ){
      return true;
    }
   else{
     return false;
   }
}


  render() {

    const isAlreadyAuthenticated = this.isAuthenticated();

    return (


isAlreadyAuthenticated ?  <div>
<button className="btn btn-primary" onClick={this.onLogout.bind(this)} >LOG OUT</button>
<p> You are inside Report Admin Dashboard </p>
</div> :  <Redirect to="/login" />






    );
  }
}

export default ReportAdminDashboard;