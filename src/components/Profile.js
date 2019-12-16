import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import decoded from 'jwt-decode'
import {Button} from 'react-bootstrap'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      errors: {}
    }
  }
  componentDidMount() {
    const token = localStorage.usertoken
    if(token){
      const decoded = jwt_decode(token)
      console.log(decoded)
    this.setState(decoded)
    }else{
      this.props.history.push('/Login')
    }
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 mx-auto mt-5" style={{backgroundColor: '#17a2b8', padding: '0', color: 'white'}}>
            
        <div className="jumbotron" style={{borderRadius: '0'}}>
        <h1 className="profile-style">PROFILE</h1>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.firstname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lastname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                {/* <td>Change Password</td> */}
                {/* <td><div class="button_cont" align="center"><a class="example_a" href="/EditProfile" target="_blank" rel="nofollow noopener">Edit Profile</a></div></td> */}
                {/* <td><div class="button_cont" align="center"><a class="example_a" href="/ChangePassword" target="_blank" rel="nofollow noopener">Change Password</a></div></td> */}
              </tr>
            </tbody>
          </table>
          <button href="/ChangePassword" className='submit-change' type="submit"><a class="example_a" href="/ChangePassword" target="_blank" style={{color: 'white'}}>Change Password</a></button>
        </div>
        </div>
        <tr> 
            {/* <div class="button_cont" align="center"><a class="example_a" href="/EditProfile" target="_blank" rel="nofollow noopener">Edit Profile</a></div> */}
        </tr>
      </div>
    )
  }
}
export default Profile