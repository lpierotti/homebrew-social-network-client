import React from 'react'

function GravityABV(props) {

	const calculateABV = () => {
		console.log(props)
		return ((props.data.og - props.data.fg) * 131.25).toFixed(2)
	}

	const handleChange = (event) => {
		switch (event.target.name) {
			case 'og':
				props.changeGravity('og', event.target.value)
				break;
			case 'fg':
				props.changeGravity('fg', event.target.value)
				break;
			default:
				break;
		}	
	}
	
	return (
		<div>
			<input name='og' type='number' onChange={handleChange} placeholder='OG'/>
			<input name='fg' type='number' onChange={handleChange} placeholder='FG'/>
			<p>{calculateABV()}%</p>
		</div>
	)
}

export default GravityABV