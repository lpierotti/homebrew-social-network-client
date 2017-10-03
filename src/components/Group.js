import React from 'react'
import { connect } from 'react-redux' 
import { getGroupInfo } from '../actions/groups'
import FollowDisplay from './FollowDisplay'
import Chat from './Chat'
import { Button } from 'semantic-ui-react'

class Group extends React.Component {

	constructor() {
		super()
		this.state = {
			chatOpen: false
		}
	}

	componentDidMount() {
		this.props.getGroupInfo(this.props.id)
	}

	handleClick = (event) => {
		event.preventDefault()
		this.setState({chatOpen: !this.state.chatOpen})
	}

	render() {
		console.log(this.props.groupInfo)
		return (
			<div>
				{this.props.groupInfo.image ? <img src={this.props.groupInfo.image} alt=''/> : <img className='profPic' src='/default-profile.png' alt=''/>}
				<h1>{this.props.groupInfo.name}</h1>
				<h3>{this.props.groupInfo.description}</h3>
				<Button onClick={this.handleClick}>Group Chat</Button>
				{this.state.chatOpen ? <Chat id={this.props.id} messages={this.props.groupInfo.messages} getGroupInfo={this.props.getGroupInfo}/> : null}
				{this.props.groupInfo.members ? this.props.groupInfo.members.map((member, index) => <FollowDisplay key={index} data={member}/>) : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		groupInfo: state.groups.currentGroup
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGroupInfo: (id) => {dispatch(getGroupInfo(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)