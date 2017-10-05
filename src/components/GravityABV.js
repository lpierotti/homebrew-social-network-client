import React from 'react'
import { Form, Popup } from 'semantic-ui-react'

function GravityABV(props) {

	const handleChange = (event) => {
		props.changeGravity(event.target.name, event.target.value)
	}
	
	return (
		
		<Form.Group widths={'equal'}>
			<Popup
			    trigger={<Form.Input name='og' type='number' step="0.01" onChange={handleChange} placeholder='OG' />}
			    content='Original Gravity as measured by your hydrometer'
			/>
			<Popup
			    trigger={<Form.Input name='fg' type='number' step="0.01" onChange={handleChange} placeholder='FG' />}
			    content='Final Gravity as measured by your hydrometer'
			/>
			<Popup
			    trigger={<Form.Input placeholder='ABV' value={`${props.data.abv}%`} />}
			    content='The Alcohol by Volume calculated by subtracting the FG from the OG and multiplying by 131.25'
			/>
		</Form.Group>
		
	)
}

export default GravityABV