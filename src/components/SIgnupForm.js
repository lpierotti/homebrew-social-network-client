import React from 'react'
import AuthAdapter from '../adapters/authAdapter'

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}

	handleInputChange = (event) => {
		console.log('INPUTCHANGE',event.target.name)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		AuthAdapter.signup(this.state)
			.then( user => {
				localStorage.setItem('jwt', user.jwt)
				this.props.history.replace("/")
			})
		//connect
	}



	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input onChange={this.handleInputChange} name='username' type='text' />
				<label>Email</label>
				<input onChange={this.handleInputChange} name='email' type='text' />
				<label>Password</label>
				<input onChange={this.handleInputChange} name='password' type='password' />
				<input type='submit' />
			</form>
		)
	}

}



export default SignupForm