import React from 'react'
import { Segment } from 'semantic-ui-react'

const EventContainer = (props) => {

	return (
		<div style={{float: 'right', minHeight: '400px'}}>
			<Segment  style={{minHeight: '400px', minWidth: '600px'}}>
				{props.events ? props.events.map(event => <div>{event.name}</div>) : null}
			</Segment>
		</div>
	)
}


export default EventContainer