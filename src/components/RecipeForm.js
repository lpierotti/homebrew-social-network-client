import React from 'react'
import IngredientForm from './IngredientForm'

class RecipeForm extends React.Component {

	constructor() {
		super()
		this.state = {
			ingredientObjects: [],
			counter: 0
		}
	}
	
	handleIngredientClick = (event) => {
		event.preventDefault()
		this.setState({
			counter: this.state.counter + 1,
			ingredientObjects: [...this.state.ingredientObjects, {id: this.state.counter, name: '', amount: '', unit: '', submitted: false}]
		})
		console.log(this.state.counter)
	}

	addIngredient = (ingredientProps) => {
		var ingredientToSubmit = this.state.ingredientObjects.find(ingredient => ingredient === ingredientProps)
		this.setState({ingredientObjects: this.state.ingredientObjects.map(ingredient => {
				if(ingredient === ingredientToSubmit) {
					ingredient["submitted"] = true;
				}
				return ingredient
			})
		})
		console.log(this.state.ingredientObjects)
	}

	removeIngredient = (ingredientData) => {
		//console.log("THIS IS WHAT I AM DELETEING",ingredientState)
		//console.log("Filtered array", this.state.ingredientForms.filter(form => form.props.num !== id))
		this.setState({
			ingredientObjects: this.state.ingredientObjects.filter(ingredient => ingredient !== ingredientData)
		}, () => {console.log("THIS IS THE NEW STATE",this.state)})
	}

	changeIngredient = (ingredientId, target, newValue) => {
		console.log(ingredientId)
		var ingredientToUpdate = this.state.ingredientObjects.find(ingredient => ingredient.id === ingredientId)
		this.setState({
			ingredientObjects: this.state.ingredientObjects.map(ingredient => {
				if(ingredient === ingredientToUpdate) {
					ingredient[target] = newValue;
				}
				return ingredient
			})
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}



	render() {
		console.log(this.state.ingredientObjects)
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Style' />
				<input type='textarea' placeholder='Description' />

				<button onClick={this.handleIngredientClick}>Add Ingredient</button>
				{this.state.ingredientObjects.map(ingredient => <IngredientForm changeIngredient={this.changeIngredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} data={ingredient}/>)}
				<input type='submit'/>
			</form>
		)
	}
}

export default RecipeForm