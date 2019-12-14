import React from 'react'

function SignOut(props) {
	localStorage.removeItem("usertoken")
	props.history.push("/")
	return (<></>)
}

export default SignOut