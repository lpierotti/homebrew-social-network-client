import React from 'react'
import IngredientForm from './IngredientForm'
import GravityABV from './GravityABV'

class RecipeForm extends React.Component {

	constructor() {
		super()
		this.state = {
			ingredientObjects: [],
			counter: 0,
			abvCalc: {og: 0.0, fg: 0.0}
		}
	}
	
	handleIngredientClick = (event) => {
		event.preventDefault()
		this.setState({
			counter: this.state.counter + 1,
			ingredientObjects: [...this.state.ingredientObjects, {id: this.state.counter, name: '', amount: '', unit: '', submitted: false}]
		})
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
	}

	removeIngredient = (ingredientData) => {
			this.setState({
			ingredientObjects: this.state.ingredientObjects.filter(ingredient => ingredient !== ingredientData)
		})
	}

	changeIngredient = (ingredientId, target, newValue) => {
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

	changeGravity = (target, newValue) => {
		this.setState({
			abvCalc: Object.assign({}, this.state.abvCalc, {[target]: newValue} )
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}



	render() {
		console.log(this.state.abvCalc)
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Style' /><br/>
				<input type='radio' name='type' value='all-grain' />All-grain
				<input type='radio' name='type' value='extract-grain' />Extract<br/>
				<input type='textarea' placeholder='Description' />
				<GravityABV changeGravity={this.changeGravity} data={this.state.abvCalc}/>
				<button onClick={this.handleIngredientClick}>Add Ingredient</button>
				{this.state.ingredientObjects.map((ingredient, index) => <IngredientForm key={index} changeIngredient={this.changeIngredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} data={ingredient}/>)}<br/>
				<input type="textarea" placeholder='Instructions'/>
				<input type='submit'/>
			</form>
		)
	}
}

export default RecipeForm