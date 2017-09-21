import React from 'react' 

function IngredientForm(props) {

	const handleChange = (event) => {
		switch (event.target.name) {
			case 'amount':
				props.changeIngredient(props.data.id, 'amount', event.target.value)
				break;
			case 'unit':
				props.changeIngredient(props.data.id, 'unit', event.target.value)
				break;
			case 'name':
				props.changeIngredient(props.data.id, 'name', event.target.value)
				break;
			default:
				break;
		}
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