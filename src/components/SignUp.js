import React from 'react'
import {Form, Col, Button, Container} from 'react-bootstrap'
import axios from 'axios'

export default class SignUp extends React.Component {
	onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
	onSubmitHandelr = (e) => {
		e.stopPropagation();
        e.preventDefault();        
        axios.post(`http://localhost:5000/api/auth/register`, {
        	...this.state
        })
            .then(res => {
            	if(res.status === 200){
            		this.props.history.push('/SignIn');
            	}
            	else{
            		alert("Somthing happned!!!");
            	}
    })
        }
	render() {
		return (
	<Container>
		<Form onSubmit={this.onSubmitHandelr} className= 'form-style'>
			<h1>Sign Up</h1>
		  <Form>
		  	<Form.Group controlId="formGridFirstname">
		      <Form.Label>First Name</Form.Label>
		      <Form.Control type="text" placeholder="Ebere~Sama" name="firstname" onChange={this.onChangeHandler}/>
		    </Form.Group>
		    <Form.Group controlId="formGridLastname">
		      <Form.Label>Last Name</Form.Label>
		      <Form.Control type="text" placeholder="Iwata" name="lastname" onChange={this.onChangeHandler}/>
		    </Form.Group>
		    <Form.Group controlId="formGridUsername">
		      <Form.Label>Username</Form.Label>
		      <Form.Control type="text" placeholder="Wanna-be Guru" name="username" onChange={this.onChangeHandler} />
		    </Form.Group>
		    <Form.Group controlId="formGridEmail">
		      <Form.Label>Email</Form.Label>
		      <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChangeHandler}/>
		    </Form.Group>		    
		    <Form.Group controlId="formGridPassword">
		      <Form.Label>Password</Form.Label>
		      <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChangeHandler}/>
		    </Form.Group>
		  </Form>		  
		  <Form.Group id="formGridCheckbox">
		    <Form.Check type="checkbox" label="Check me out" />
		  </Form.Group>		  
		  <button className="submit-post" type="submit">
		    Submit
		  </button>
		</Form>
	</Container>
		)
	}
}