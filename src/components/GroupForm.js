import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../actions/users'
import Select from 'react-select';
import FollowDisplay from './FollowDisplay'



class GroupForm extends React.Component {

	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			members: []
		}
	}

	componentDidMount() {
		this.props.getAllUsers()
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSelect = (selected) => {
		console.log(selected)
		this.setState({members: [...this.state.members, selected]})
	}

	render() {
		console.log(this.props, this.state.members)
		if (this.props.allUsers) {
			const options = this.props.allUsers.map(user => ({value: user.username, label: user.username}))
			return (
				<div>
					<form>
						<label>Name</label>
						<input onChange={this.handleChange} name='name' type='text' />
						<label>Description</label>
						<input onChange={this.handleChange} name='description' type='textarea' />
						<Select 
							options={options}
							onChange={this.handleSelect}
							multi={true}
						/>
						<input type='submit' />
					</form>
					{this.state.members ? this.state.members.map((name, index) => {
						const foundUser = this.props.allUsers.find(user => user.username === name)
						console.log(foundUser)
						return <FollowDisplay key={index} data={foundUser} />
						}) : null}
				</div>
			)
		} else {
			return <div></div>
		}
		
	}
}

function mapStateToProps(state) {
	return {
		allUsers: state.users.all
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getAllUsers: () => {dispatch(getAllUsers())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)