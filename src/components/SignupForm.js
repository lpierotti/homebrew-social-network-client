import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'
import { Form, Segment, Label, Header, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '', 
			error: ''
		}
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.username && this.state.password && this.state.email) {
			this.props.signup(this.state, this.props.history)
			this.setState({email: '', username: '', password: ''})
		} else {
			this.setState({error: "All inputs must be filled out!"})
		}
	}

	

	render() {
		if (localStorage['jwt']) {
			return <Redirect to={'/'} />
		}
		return (
			<div style={{maxWidth: '500px', margin: 'auto' }}>
				{this.state.error ? 
					<Message warning>
					    <Message.Header>{this.state.error}</Message.Header>
					</Message> 
					: null
				}
				{this.props.error ? 
					<Message warning>
					    <Message.Header>{this.props.error}</Message.Header>
					</Message> 
					: null
				}
				<Header size='huge' attached={true}>Signup</Header>
				<Segment>
					
					<Form onSubmit={this.handleSubmit} >
						<Label>Username</Label>
						<Form.Input value={this.state.username} onChange={this.handleInputChange} name='username' type='text' />
						<Label>Email</Label>
						<Form.Input value={this.state.email} onChange={this.handleInputChange} name='email' type='text' />
						<Label>Password</Label>
						<Form.Input value={this.state.password} onChange={this.handleInputChange} name='password' type='password' />
						
						<Form.Button>Submit</Form.Button>
					</Form>
				</Segment>
			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		signup: (userparams) => {
			dispatch(signupUser(userparams))
		}
	}
}

function mapStateToProps(state) {
	return {
		error: state.users.error
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
