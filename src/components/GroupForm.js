import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../actions/users'
import Select from 'react-select';
import FollowDisplay from './FollowDisplay'
import { createGroup } from '../actions/groups'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import 'react-select/dist/react-select.css';
import { Redirect } from 'react-router-dom'
import { Form, Card } from 'semantic-ui-react'



class GroupForm extends React.Component {

	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			members: [], 
			image: '',
			submitted: false
		}
	}

	componentDidMount() {
		this.props.getAllUsers()
	}

	handleDrop = (files) => {
		const formData = new FormData();
		formData.append('file', files[0])
		formData.append('upload_preset', 'f9x8cstk')
		axios.post('https://api.cloudinary.com/v1_1/dflt9qlwf/image/upload', formData, {
			headers: { "X-Requested-With": "XMLHttpRequest" }
		})
			.then(res => {
				const data = res.data
				const fileURL = data.secure_url
				this.setState({image: fileURL})
			})
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSelect = (selected) => {
		this.setState({members: [...this.state.members, selected.value]})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createGroup(this.state)
		this.setState({submitted: true})
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to={`/user/${this.props.currentUser.id}/profile`}/>
		}
		if (this.props.allUsers) {
			const options = this.props.allUsers.map(user => {
				if (this.state.members.find(member => member === user.username)) {
					console.log('in here')
					return {value: '', label: ''}
				} else{
					return {value: user.username, label: user.username}
				}
			})
			return (
				<div className='recipeForm'>
					<Form onSubmit={this.handleSubmit}>
					{this.state.image ? <img className='profPic' src={this.state.image} alt=''/> : <Dropzone onDrop={this.handleDrop} accept="image/*" ><p>Add a group picture here!</p></Dropzone>}
						<label>Name</label>
						<Form.Input onChange={this.handleChange} name='name' type='text' />
						<label>Description</label>
						<Form.Input onChange={this.handleChange} name='description' type='textarea' />
						<label>Add Members</label>
						<Select 
							options={options}
							onChange={this.handleSelect}
							placeholder={'Members'}
						/>
						<Form.Button style={{marginTop: '10px', marginBottom: '10px'}}>Submit</Form.Button>
					</Form>
					<Card.Group itemsPerRow={3}>
					{this.state.members ? this.state.members.map((name, index) => {
						const foundUser = this.props.allUsers.find(user => user.username === name)
						console.log(foundUser)
						return <FollowDisplay key={index} data={foundUser} />
						}) : null}
					</Card.Group>
				</div>
			)
		} else {
			return <div></div>
		}
		
	}
}

function mapStateToProps(state) {
	return {
		allUsers: state.users.all,
		currentUser: state.users.current
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getAllUsers: () => {dispatch(getAllUsers())},
		createGroup: (params) => {dispatch(createGroup(params))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)