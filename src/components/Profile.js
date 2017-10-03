import React from 'react'
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'
import { setProfilePic, getUserInfo, follow, clearUserProfile } from '../actions/users'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import FollowingContainer from './FollowingContainer'
import { Grid, Button, Menu, Icon } from 'semantic-ui-react'


class Profile extends React.Component {

	constructor() {
		super()
		this.state = {
			image: '',
			followed: false
		}
	}

	componentDidMount() {
		console.log(this.props.id)
		this.props.getUserInfo(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.id !== nextProps.id){
			this.props.getUserInfo(nextProps.id)
		} else if (this.props.viewing.image === null && this.state.image && this.props !== nextProps) {
			this.props.getUserInfo(this.props.id)
		}
	}

	componentWillUnmount() {
		console.log('CLEARING')
		this.props.clearUserProfile()
	}

	handleFollow = (event) => {
		event.preventDefault()
		this.props.followUser(this.props.id)
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
				console.log(data);
				this.setState({image: fileURL})
				this.props.setProfilePic(fileURL)
			})
	}

	render() {
		console.log(this.props, this.state)
		if (this.props.viewing){
			return (
				<Grid relaxed >
					<Grid.Row>
						<Grid.Column width={1}/>
						<Grid.Column width={4} textAlign='center'>
							{this.props.viewing.image ? <img className='profPic' src={this.props.viewing.image} alt=''/> : <img className='profPic' src='/default-profile.png' alt=''/>}
							<Menu text vertical>
						        {this.props.viewing.image || parseInt(this.props.id, 10) !== this.props.currentUser.id ? null : <Menu.Item><Dropzone onDrop={this.handleDrop} accept="image/*" className={'imgUpload'}><Button>Upload Profile Picture</Button></Dropzone></Menu.Item>}
						        {this.props.currentUser.id !== this.props.viewing.id && !this.props.followers.find(follower => follower.id === this.props.currentUser.id) ? <Menu.Item><Button onClick={this.handleFollow}>Follow</Button></Menu.Item> : <div>{this.props.currentUser.id === this.props.viewing.id ? null : <Menu.Item><Button >Following <Icon name={'checkmark'}/></Button></Menu.Item>}</div>}
						        {this.props.currentUser.id === this.props.viewing.id ? <Menu.Item><Link to={'/recipes/new'}><Button>Add a Recipe!</Button></Link></Menu.Item> : null}
						        {this.props.currentUser.id === this.props.viewing.id ? <Menu.Item><Link to={'/groups/new'}><Button>Create Group</Button></Link></Menu.Item> : null}
						    </Menu>
						</Grid.Column>
						<Grid.Column width={11} textAlign={'center'}>
							<RecipesContainer id={this.props.id} currentUser={this.props.currentUser.username} viewing={this.props.viewing.username}/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={5}/>
						<Grid.Column width={11}>
							<FollowingContainer id={this.props.id} currentUser={this.props.currentUser.username} viewing={this.props.viewing.username}/>
						</Grid.Column>
					</Grid.Row>
					
				</Grid>
			)
		} else {
			return <div></div>
		}
		
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.current,
		viewing: state.users.viewingUser,
		followers: state.users.userFollowers 
	}
}
function mapDispatchToProps(dispatch) {
	return {
		setProfilePic: (file) => {dispatch(setProfilePic(file))},
		getUserInfo: (id) => {dispatch(getUserInfo(id))},
		followUser: (id) => {dispatch(follow(id))},
		clearUserProfile: () => {dispatch(clearUserProfile())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)