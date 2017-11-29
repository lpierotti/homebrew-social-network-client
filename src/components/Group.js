import React from 'react'
import { connect } from 'react-redux' 
import { getGroupInfo } from '../actions/groups'
import FollowDisplay from './FollowDisplay'
import Chat from './Chat'
import { Button, Image, Segment, Card, Modal } from 'semantic-ui-react'
import EventForm from './EventForm'
import EventContainer from './EventContainer'
import { getEvents } from '../actions/events'
import EventMap from './EventMap'

export class Group extends React.Component {

	componentDidMount() {
		this.props.getGroupInfo(this.props.id)
		this.props.getEvents(this.props.id)
	}

	render() {
		console.log(this.props.groupInfo)
		return (
			<div style={{width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,.1)'}}>
				<div style={{maxWidth: '1000px', margin: 'auto'}}>
					<div style={{ float: 'left'}}>
						<Segment floated='left' compact={true}>
							{this.props.groupInfo.image ? <Image src={this.props.groupInfo.image} className='profPic' alt='' floated='left'/> : <Image className='profPic' src='/default-profile.png' alt='' floated='left'/>}
							<h1 style={{float: 'left', clear: 'left'}}>{this.props.groupInfo.name}</h1>
							<h3 style={{float: 'left', clear: 'left', maxWidth: '250px'}}>{this.props.groupInfo.description}</h3>
						</Segment>
						
						<Modal trigger={<Button>Create Event</Button>}><EventForm id={this.props.id}/></Modal>
						<EventContainer events={this.props.events}/>

						<div style={{maxWidth: '600px', maxHeight: '400px', float: 'left', clear: 'left'}}>
							<h1>Events</h1>
							<EventMap events={this.props.events} />
						</div>
						<div style={{maxWidth: '600px', float: 'right'}}>
							<h3>Members</h3>
							<Card.Group>
								{this.props.groupInfo.members ? this.props.groupInfo.members.map((member, index) => <FollowDisplay key={index} data={member}/>) : null}
							</Card.Group>
						</div>
						
						<Chat id={this.props.id} messages={this.props.groupInfo.messages} getGroupInfo={this.props.getGroupInfo}/>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		groupInfo: state.groups.currentGroup,
		events: state.events.all
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGroupInfo: (id) => {dispatch(getGroupInfo(id))},
		getEvents: (id) => {dispatch(getEvents(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)