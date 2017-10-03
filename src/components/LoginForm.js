import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'
import { Form, Label, Segment, Header } from 'semantic-ui-react'

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
			<div style={{maxWidth: '500px', margin: 'auto'}}>
				<Header size='huge' attached={true}>Login</Header>
				<Segment>
					<Form onSubmit={this.handleSubmit}>
						<Label>Email</Label>
						<Form.Input onChange={this.handleInputChange} name='email' type='text' />
						<Label>Password</Label>
						<Form.Input onChange={this.handleInputChange} name='password' type='password' />
						<Form.Button>Submit</Form.Button>
					</Form>
				</Segment>
			</div>
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


