import React from 'react'
import IngredientForm from './IngredientForm'

class RecipeForm extends React.Component {

	constructor() {
		super()
		this.state = {
			ingredients: []
		}
	}
	
	handleIngredientClick = (event) => {
		event.preventDefault()
		this.setState({ingredients: [...this.state.ingredients, <IngredientForm/>]})
	}

	render() {
		return (
			<form>
				<button onClick={this.handleIngredientClick}>Add Ingredient</button>
				{this.state.ingredients}
				<input type='submit'/>
			</form>
		)
	}
}

export default RecipeForm