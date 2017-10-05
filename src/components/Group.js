import React from 'react'
import { connect } from 'react-redux' 
import { getGroupInfo } from '../actions/groups'
import FollowDisplay from './FollowDisplay'
import Chat from './Chat'
import { Button, Image, Segment, Card } from 'semantic-ui-react'

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
			<div style={{width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,.1)'}}>
			<div style={{maxWidth: '1000px', margin: 'auto'}}>
			<div style={{ float: 'left'}}>
				<Segment floated='left' compact={true}>
					{this.props.groupInfo.image ? <Image src={this.props.groupInfo.image} alt='' floated='left'/> : <Image className='profPic' src='/default-profile.png' alt='' floated='left'/>}
					<h1>{this.props.groupInfo.name}</h1>
					<h3>{this.props.groupInfo.description}</h3>
				</Segment>
				<Button onClick={this.handleClick}>Group Chat</Button>
				
				<div style={{maxWidth: '600px', float: 'right'}}>
					<h3>Members</h3>
					<Card.Group>
						{this.props.groupInfo.members ? this.props.groupInfo.members.map((member, index) => <FollowDisplay key={index} data={member}/>) : null}
					</Card.Group>
				</div>
				{this.state.chatOpen ? <Chat id={this.props.id} messages={this.props.groupInfo.messages} getGroupInfo={this.props.getGroupInfo}/> : null}
			</div>
			</div>
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