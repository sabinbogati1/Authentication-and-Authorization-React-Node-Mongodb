import React, { Component } from 'react';
import axios from 'axios';



class AdminSignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      displayName:"",
      phoneNumber:"",
      role:[],
      roleType:""
    }

  }

  componentDidMount(){
    this.getRoleType();
  }

  getRoleType(){
    axios.get("/api/roles/")
    .then((response)=>{
      this.setState({
        role:response.data
      })

    }).catch( (err)=>{
      console.log("Error in Getting Role type in admin signup");
    })

  }

  onChangeEmail(e) {
    this.setState(
        { email: e.target.value }
    )

    console.log(e.target.value);
}


onChangePassword(e) {
  this.setState(
      { password: e.target.value }
  )

  console.log(e.target.value);
}


onChangeDisplayName(e) {
  this.setState(
      { displayName: e.target.value }
  )

  console.log(e.target.value);
}


onChangePhoneNumber(e) {
  this.setState(
      { phoneNumber: e.target.value }
  )

  console.log(e.target.value);
}


onChangeRole(e) {
  this.setState(
      { role: e.target.value }
  )

  console.log(e.target.value);
}


onchangeRoleType(e) {
  this.setState(
      {
        roleType: e.target.value
      }
  )

  console.log("Category from create Flow: ", this.state.roleType);

}



displayRoleTypes() {
  //console.log("displayCategoryNames",this.state.categoryNames)
  return this.state.role.map((value, index) => {
      return (
          <option key={value._id} value={value.roleType}>
              {value.roleType}
          </option>

      )
  })
}


onSubmit() {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    console.log("name: ", this.state.displayName);
    console.log("phone number: ", this.state.phoneNumber);
    console.log("Role: ", this.state.role);
    console.log("roleType: ", this.state.roleType);
    let email = this.state.email;
    let password= this.state.password;
    let displayName=this.state.displayName;
    let phoneNumber = this.state.phoneNumber
    let roleType = this.state.roleType;

    // this.setState({
    //     email:"",
    //     password:"",
    //     displayName:"",
    //     phoneNumber:"",
    //     role:""
    //   });

    this.refs.email.value = '';
    this.refs.password.value = '';
    this.refs.displayName.value = '';
    this.refs.phoneNumber.value = '';
    //this.refs.role.value = 'Select Any Name';
    this.setState({
      roleType:"Select Any Name"
    })

    axios.post("/api/auth/signup/admin",{
      email: email,
      password: password,
      displayName: displayName,
      phoneNumber: phoneNumber ,
      role: roleType
    }).then(()=>{
      console.log("Successfully posted signUp form");

    }).catch((err)=>{
      console.log("Error in posting signUp form");
    })



}




  render() {
    return (


<div>

      <div className="container">

<h4> WELCOME TO ADMIN SIGNUP FORM </h4>

  <div className="form-group">
    <label htmlFor="email">Enter Email:</label>
    <input type="text" className="form-control" id="email" ref="email" onChange={this.onChangeEmail.bind(this)}/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Enter Password:</label>
    <input type="password" className="form-control" id="password" ref="password" onChange={this.onChangePassword.bind(this)} />
  </div>
  <div className="form-group">
    <label htmlFor="displayName">Enter Display Name:</label>
    <input type="text" className="form-control" id="displayName" ref="displayName" onChange={this.onChangeDisplayName.bind(this)}/>
  </div>
  <div className="form-group">
    <label htmlFor="phoneNumber">Enter Phone Number:</label>
    <input type="text" className="form-control" id="phoneNumber" onChange={this.onChangePhoneNumber.bind(this)} ref="phoneNumber"/>
  </div>


  <div class="form-group">
    <label for="roleType">Select Role Type:</label>


    <select class="form-control" id="roleType" value={this.state.roleType} onChange={this.onchangeRoleType.bind(this)} >
                            <option> Select Any Role  </option>
                            {
                                this.displayRoleTypes()
                            }

                        </select>


  </div>

  <button type="submit" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>

</div>
</div>
    );
  }
}

export default AdminSignUp;
