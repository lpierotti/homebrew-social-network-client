import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const EventContainer = (props) => {

	return (
		<div style={{float: 'right', minHeight: '400px'}}>
			<Segment  style={{minHeight: '400px', minWidth: '600px'}}>
				<h1>Group Events</h1>
				<Divider />
				{props.events ? props.events.map((event, index) => <div key={index}><Link to={`/event/${event.id}`}>{event.name}</Link></div>) : null}
			</Segment>
		</div>
	)
}


export default EventContainer