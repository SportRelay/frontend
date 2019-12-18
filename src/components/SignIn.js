import React from 'react'
import {Form, Col, Button, Container} from 'react-bootstrap'
import axios from 'axios'
import CustomNavbar from './CustomNavbar';

export default class SignIn extends React.Component {
	onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
	onSubmitHandelr = (e) => {
		e.stopPropagation();
        e.preventDefault();        
        axios.post(`https://sportrelay-backend.herokuapp.com/api/auth/login`, {
        	...this.state
        }).then(res => {
            if(res.status === 200){
           		localStorage.setItem('usertoken', res.data.token);
           		this.props.login()
           		this.props.history.push('/')
           	}
           	else{
           		alert("Somthing happned!!!");
           	}
    	})
	}
	render() {
		return (
	<Container>
		<Form onSubmit={this.onSubmitHandelr} className="form-style" >
			<h1>Sign In</h1>
		  <Form>
		    <Form.Group controlId="formGridEmail">
		      <Form.Label>Email</Form.Label>
		      <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChangeHandler}/>
		    </Form.Group>		    
		    <Form.Group controlId="formGridPassword">
		      <Form.Label>Password</Form.Label>
		      <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChangeHandler}/>
		    </Form.Group>
		  </Form>
		  <button className="submit-post" type="submit">
		    Submit
		  </button>
		</Form>
	</Container>
		)
	}
}