import { Form, Button, Alert } from 'react-bootstrap'
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react';

export default class ChangePassword extends Component {
    state = {
        wrong: false
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandelr = async(e) => {
        e.preventDefault()
        let config = {
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.usertoken}`
            }
        }
        let data = {
            password: this.state.password,
            newPassword: this.state.newPassword
        }
        
        await axios.patch(`http://localhost:5000/api/auth/reset`, data, config)
            .then(res => {
                console.log(res.data)
                if ("Password has been reset Successfully" !== res.data.message) {
                    this.setState({ wrong: true })
                }
                else {
                    this.setState({ show: true })
                }
            }).catch( err => console.log(err))
    }
    
    render() {
        console.log(this.state.wrong)
        return (

            <div className="formcontainer">
                <SweetAlert
                    show={this.state.show}
                    title="Change Password"
                    text="the password has been changed"
                    onConfirm={() => {
                        this.props.history.push('/profile')
                        this.setState({ show: false })
                    }}
                />

                {this.state.wrong && ['danger'].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        the old password not correct
                </Alert>
                ))}
                <div className="top">Change Password</div>
                <div className="form">
                    <Form onSubmit={this.onSubmitHandelr} noValidate>
                        <table className="table col-md-6 mx-auto">
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="password"
                                    onChange={this.onChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="New Password" name="newPassword"
                                    onChange={this.onChangeHandler} />
                            </Form.Group>
                        </table>
                        <Button variant='secondary' type="submit" >
                            Change Password </Button>
                    </Form>

                </div>
            </div>

        )
    }
}