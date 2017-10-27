import React from 'react'
import { connect } from 'react-redux'
import { addGuest, getEvent, removeGuest } from '../actions/events'
import EventMap from './EventMap'
import { Card, Icon, Button } from 'semantic-ui-react'
import FollowDisplay from './FollowDisplay'

class Event extends React.Component {

	componentDidMount() {
		console.log("GETTING EVENT")
		this.props.getEvent(this.props.id)
	}

	handleClick = (event) => {
		event.preventDefault()
		this.props.addGuest(this.props.id)
	}

	handleRemoveGuest = (event) => {
		event.preventDefault()
		this.props.removeGuest(this.props.id)
	}


	render() {
		console.log(this.props.event)
		var start, end;
		if(this.props.event.start) {
			start = new Date(this.props.event.start).toString().replace(/\b(GMT-0400)\b/gi, "") 
			end = new Date(this.props.event.end).toString().replace(/\b(GMT-0400)\b/gi, "")
			console.log(this.props.event.start)
		}
		return (
			<div style={{maxWidth: '1000px', margin: 'auto'}}>
				<h1>{this.props.event.name}</h1>
				{this.props.event.guests && this.props.event.guests.find(guest => guest.id === this.props.currentUser.id) ? <Button onClick={this.handleRemoveGuest}>Going <Icon name={'checkmark'}/></Button> : <Button onClick={this.handleClick}>Going?</Button>}
				<h2>{this.props.event.description}</h2>
				<p>{this.props.event.number} {this.props.event.street}, {this.props.event.city}, {this.props.event.state}</p>
				<p>Start Time: {start}</p>
				<p>End Time: {end}</p>
				<div style={{maxWidth: '600px', float: 'right'}}>
					<h3>Members Going</h3>
					<Card.Group>
						{this.props.event.guests ? this.props.event.guests.map((guest, index) => <FollowDisplay key={index} data={guest}/>) : null}
					</Card.Group>
				</div>
				<div style={{maxWidth: '600px', maxHeight: '400px', float: 'left', clear: 'left'}}>
					<EventMap events={[this.props.event]} />
				</div>	
				
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
		addGuest: (id) => {dispatch(addGuest(id))},
		removeGuest: (id) => {dispatch(removeGuest(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)