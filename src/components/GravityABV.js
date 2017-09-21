import React from 'react'

function GravityABV(props) {

	const handleChange = (event) => {
		props.changeGravity(event.target.name, event.target.value)
	}
	
	return (
		<div>
			<input name='og' type='number' step="0.01" onChange={handleChange} placeholder='OG'/>
			<input name='fg' type='number' step="0.01" onChange={handleChange} placeholder='FG'/>
			<p>{props.data.abv}%</p>
		</div>
	)
}

export default GravityABV