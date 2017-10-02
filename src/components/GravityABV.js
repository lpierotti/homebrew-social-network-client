import React from 'react'
import { Form } from 'semantic-ui-react'

function GravityABV(props) {

	const handleChange = (event) => {
		props.changeGravity(event.target.name, event.target.value)
	}
	
	return (
		
		<Form.Group widths={'equal'}>
			<Form.Input name='og' type='number' step="0.01" onChange={handleChange} placeholder='OG' />
			<Form.Input name='fg' type='number' step="0.01" onChange={handleChange} placeholder='FG' />
			<Form.Input placeholder='ABV' value={`${props.data.abv}%`} />
		</Form.Group>
		
	)
}

export default GravityABV