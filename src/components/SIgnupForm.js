import React from 'react'
import AuthAdapter from '../adapters/authAdapter'

class SignupForm extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}

	handleInputChange = (event) => {
		switch (event.target.name) {
			case 'username':
				this.setState({username: event.target.value});
				break;
			case 'email':
				this.setState({email: event.target.value});
				break;
			case 'password':
				this.setState({password: event.target.value});
				break;
			default:
				return;
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		AuthAdapter.signup(this.state)
			.then( user => {
				localStorage.setItem('token', user.jwt)
				this.props.history.replace("/")
			})
		//connect
	}



	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleInputChange} name='username' type='text' />
				<input onChange={this.handleInputChange} name='email' type='text' />
				<input onChange={this.handleInputChange} name='password' type='password' />
				<input type='submit' />
			</form>
		)
	}

}



export default SignupForm