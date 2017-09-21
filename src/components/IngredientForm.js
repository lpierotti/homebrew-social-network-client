import React from 'react' 

function IngredientForm(props) {

	const handleChange = (event) => {
		props.changeIngredient(props.data.id, event.target.name, event.target.value)
	}

	const handleClick = (event) => {
		event.preventDefault()
		props.addIngredient(props.data)
		
	}

	const handleDelete = (event) => {
		event.preventDefault()
		props.removeIngredient(props.data)
	}

	
	if (props.data.submitted) {
		return (
			<div>
				<p>{props.data.amount}</p>
				<p>{props.data.unit}</p>
				<p>{props.data.name}</p>
				<button onClick={handleDelete}>Delete</button>
			</div>
		)
	} else {
		return (
			<div>
				<input name='amount' onChange={handleChange} type='text' placeholder='Amount'/>
				<input name='unit' onChange={handleChange} type='text' placeholder='Unit'/>
				<input name='name' onChange={handleChange} type='text' placeholder='Name'/>
				<button onClick={handleClick}>Add</button>
			</div>
		)
	}
	
}

export default IngredientForm