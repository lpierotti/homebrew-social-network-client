import React from 'react'
import { connect } from 'react-redux'
import { addGuest, getEvent } from '../actions/events'
import EventMap from './EventMap'
import { Card } from 'semantic-ui-react'
import FollowDisplay from './FollowDisplay'

class Event extends React.Component {

	componentDidMount() {
		console.log("GETTING EVENT")
		this.props.getEvent(this.props.id)
	}


	render() {
		console.log(this.props.event)
		return (
			<div style={{maxWidth: '1000px', margin: 'auto'}}>
				<h1>{this.props.event.name}</h1>
				<h2>{this.props.event.description}</h2>
				<p>{this.props.event.number} {this.props.event.street}, {this.props.event.city}, {this.props.event.state}</p>
				<div style={{maxWidth: '600px', float: 'right'}}>
					<h3>Members Going</h3>
					<Card.Group>
						{this.props.event.guests ? this.props.event.guests.map((guest, index) => <FollowDisplay key={index} data={guest}/>) : null}
					</Card.Group>
				</div>	
				<EventMap events={[this.props.event]} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.current,
		event: state.events.current
	}
	
}

function mapDispatchToProps(dispatch) {
	return {
		getEvent: (id) => {dispatch(getEvent(id))},
		addGuest: (id) => {dispatch(addGuest(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)