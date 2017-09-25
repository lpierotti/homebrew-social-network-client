import React from 'react'
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'
import FileBase64 from 'react-file-base64'
import { setProfilePic } from '../actions/users'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'


class Profile extends React.Component {

	constructor() {
		super()
		this.state = {image: ''}
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
		return (
			<div>
				<img src={this.props.userInfo.image}/>
				<Dropzone 
				  onDrop={this.handleDrop} 
				  multiple 
				  accept="image/*" 
				  
				>
				  <p>Drop your files or click here to upload</p>
				</Dropzone>
				
				<Link to={'/recipes/new'}><button>Add a Recipe!</button></Link>
				<RecipesContainer id={this.props.id}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.users.current
	}
}
function mapDispatchToProps(dispatch) {
	return {
		setProfilePic: (file) => {dispatch(setProfilePic(file))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)