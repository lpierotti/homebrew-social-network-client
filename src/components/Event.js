import React from 'react'
import { connect } from 'react-redux'
import { addGuest, getEvent } from '../actions/events'
import EventMap from './EventMap'

class Event extends React.Component {

	componentDidMount() {
		console.log("GETTING EVENT")
		this.props.getEvent(this.props.id)
	}


	render() {
		console.log(this.props.event)
		return (
			<div>
				<h1>{this.props.event.name}</h1>
				<h2>{this.props.event.description}</h2>
				<p>{this.props.event.number} {this.props.event.street}, {this.props.event.city}, {this.props.event.state}</p>
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