import React from 'react'
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'
import { setProfilePic, getUserInfo } from '../actions/users'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import FollowingContainer from './FollowingContainer'


class Profile extends React.Component {

	constructor() {
		super()
		this.state = {image: ''}
	}

	componentDidMount() {
		console.log(this.props.id)
		this.props.getUserInfo(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.id !== nextProps.id){
			this.props.getUserInfo(nextProps.id)
		} else if (this.props.viewing.image === null) {
			this.props.getUserInfo(this.props.id)
		}
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
				<div>
					<img src={this.props.viewing.image} alt=''/>
					{this.props.viewing.image || this.props.id === this.props.currentUser.id ? null : <Dropzone onDrop={this.handleDrop} accept="image/*" ><p>Drop your files or click here to upload</p></Dropzone>}
					{}
					<Link to={'/recipes/new'}><button>Add a Recipe!</button></Link>
					<RecipesContainer id={this.props.id}/>
					<FollowingContainer id={this.props.id} />
				</div>
			)
		} else {
			return <div></div>
		}
		
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.current,
		viewing: state.users.viewingUser 
	}
}
function mapDispatchToProps(dispatch) {
	return {
		setProfilePic: (file) => {dispatch(setProfilePic(file))},
		getUserInfo: (id) => {dispatch(getUserInfo(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)