import React from 'react'
import AuthAdapter from '../adapters/authAdapter'

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		AuthAdapter.login(this.state)
			.then(user => {
				localStorage.setItem('jwt', user.jwt)
				this.props.history.replace("/")
			})
	}

	handleInputChange = (event) => {
		switch (event.target.name) {
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

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleInputChange} name='email' type='text' />
				<input onChange={this.handleInputChange} name='password' type='password' />
				<input type='submit' /> 
			</form>
		)
	}
}

export default LoginForm


