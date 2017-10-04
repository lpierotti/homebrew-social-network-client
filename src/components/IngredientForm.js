import React from 'react'
import { Button, Form, Popup } from 'semantic-ui-react' 

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
				<p>{props.data.amount} {props.data.unit} {props.data.name}</p>
				<Button onClick={handleDelete}>Delete</Button>
			</div>
		)
	} else {
		return (
			<Form.Group>

				<Form.Input name='amount' onChange={handleChange} placeholder='Amount' width={5}/>
				<Form.Input name='unit' onChange={handleChange} placeholder='Unit' width={5}/>
				<Form.Input name='name' onChange={handleChange} placeholder='Name' width={5}/>
				<Popup
				    trigger={<Button onClick={handleClick}>Add</Button>}
				    content='Click to save the ingredient to your recipe'
				/>
			</Form.Group>
		)
	}
	
}

export default IngredientForm