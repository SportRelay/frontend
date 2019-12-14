import React from 'react'
import { Redirect } from 'react-router-dom'
function SignOut(props) {
	localStorage.removeItem("usertoken");
	props.signOut();
	return (<Redirect to="/" />)
}

export default SignOut