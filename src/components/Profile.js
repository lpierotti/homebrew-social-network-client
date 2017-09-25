import React from 'react'
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'
import FileBase64 from 'react-file-base64'
import { setProfilePic } from '../actions/users'
import { Link } from 'react-router-dom'


class Profile extends React.Component {

	constructor() {
		super()
		this.state = {image: ''}
	}
	getFiles = (file) => {
		this.setState({image: file})
		this.props.setProfilePic(file)
	}

	render() {
		console.log(this.props, this.state)
		return (
			<div>
				<img src={this.state.image.base64}/>
				<FileBase64 multiple={false} onDone={ this.getFiles}/>
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