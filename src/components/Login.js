import React from 'react'
import { withRouter } from 'react-router-dom'
class Login extends React.Component {

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

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input onChange={this.handleInputChange} name='email' type='text' />
				<label>Password</label>
				<input onChange={this.handleInputChange} name='password' type='password' />
				<button>Submit</button>
			</form>
		)
	}
}


export default withRouter(Login)