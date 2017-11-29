import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'
import { Form, Label, Segment, Header, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '', 
			submitted: false
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state, this.props.history)
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		if (localStorage['jwt']) {
			return <Redirect to='/' />
		}
		return (
			<div style={{maxWidth: '500px', margin: 'auto'}}>
				{this.props.error ? 
					<Message warning>
					    <Message.Header>{this.props.error}</Message.Header>
					</Message> :
					null
				}
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

function mapStateToProps(state) {
	return {
		error: state.users.error
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


