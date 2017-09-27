import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'

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
		console.log('LOGIN')
		this.props.login(this.state, this.props.history)
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

function mapDispatchToProps(dispatch) {
	return {
		login: (userparams, history) => {
			dispatch(loginUser(userparams, history))
		}
	}
}

export default connect(null, mapDispatchToProps)(LoginForm)


