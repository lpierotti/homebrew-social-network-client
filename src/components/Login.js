import React from 'react'
import { connect } from 'react-redux'

export class Login extends React.Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.login(this.state)
	}

	render() {
		return (
			<form id='loginForm' className='login' onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input id='email' onChange={this.handleInputChange} name='email' type='text' />
				<label>Password</label>
				<input id='password' onChange={this.handleInputChange} name='password' type='password' />
				<button id='submit'>Submit</button>
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

export default connect(mapDispatchToProps)(Login)