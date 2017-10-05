import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'
import { Form, Segment, Label, Header } from 'semantic-ui-react'



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
		this.props.signup(this.state, this.props.history)
	}

	

	render() {
		console.log(this.state)
		return (
			<div style={{maxWidth: '500px', margin: 'auto' }}>
				<Header size='huge' attached={true, 'bottom'} style={{backgroundColor: 'rgba(58,150,255,.3)'}}>Signup</Header>
				<Segment style={{backgroundColor: 'rgba(58,150,255,.3)'}}>
					
					<Form onSubmit={this.handleSubmit} >
						<Label>Username</Label>
						<Form.Input onChange={this.handleInputChange} name='username' type='text' />
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
		signup: (userparams, history) => {
			dispatch(signupUser(userparams, history))
		}
	}
}


export default connect(null, mapDispatchToProps)(SignupForm)