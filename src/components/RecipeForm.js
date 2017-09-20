import React from 'react'
import IngredientForm from './IngredientForm'

class RecipeForm extends React.Component {

	constructor() {
		super()
		this.state = {
			ingredientForms: [],
			ingredientObjects: [],
			counter: 0
		}
	}
	
	handleIngredientClick = (event) => {
		event.preventDefault()
		this.setState({
			ingredientForms: [...this.state.ingredientForms, <IngredientForm id={this.state.counter} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>],
			counter: this.state.counter++
		})
	}

	addIngredient = (ingredientState) => {
		this.setState({ingredientObjects: [...this.state.ingredientObjects, ingredientState]})
		console.log(this.state.ingredientObjects)
	}

	removeIngredient = (ingredientState, id) => {
		console.log(ingredientState, id)
		this.setState({
			ingredientForms: this.state.ingredientForms.filter(form => form.id !== id),
			ingredientObjects: this.state.ingredientObjects.filter(ingredient => ingredient !== ingredientState)
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Style' />
				<input type='textarea' placeholder='Description' />

				<button onClick={this.handleIngredientClick}>Add Ingredient</button>
				{this.state.ingredientForms}
				<input type='submit'/>
			</form>
		)
	}
}

export default RecipeForm