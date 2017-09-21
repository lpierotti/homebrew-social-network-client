import React from 'react'
import IngredientForm from './IngredientForm'
import GravityABV from './GravityABV'
import RecipeAdapter from '../adapters/recipeAdapter'

class RecipeForm extends React.Component {

	constructor() {
		super()
		this.state = {
			ingredientObjects: [],
			counter: 0,
			abvCalc: {og: 0.0, fg: 0.0, abv: 0.0},
			name: '',
			description: '',
			style: '',
			type: '',
			instructions: ''
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
		}, () => {
			this.setState({
				abvCalc: Object.assign({}, this.state.abvCalc, {abv: this.calculateABV()})
			})
		})
	}

	calculateABV = () => {
		console.log(this.state.abvCalc)
		return ((this.state.abvCalc.og - this.state.abvCalc.fg) * 131.25).toFixed(2)
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const adapter = new RecipeAdapter()
		adapter.saveRecipe(this.state)
	}



	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input  type='text' name='name' onChange={this.handleChange} placeholder='Name' />
				<input type='text' name='style' onChange={this.handleChange} placeholder='Style' /><br/>
				<input type='radio' name='type' onChange={this.handleChange} value='all-grain' />All-grain
				<input type='radio' name='type' onChange={this.handleChange} value='extract' />Extract<br/>
				<input type='textarea' name='description' onChange={this.handleChange} placeholder='Description' />
				<GravityABV changeGravity={this.changeGravity} data={this.state.abvCalc}/>
				<button onClick={this.handleIngredientClick}>Add Ingredient</button>
				{this.state.ingredientObjects.map((ingredient, index) => <IngredientForm key={index} changeIngredient={this.changeIngredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} data={ingredient}/>)}<br/>
				<input type="textarea" name='instructions' onChange={this.handleChange} placeholder='Instructions'/>
				<input type='submit'/>
			</form>
		)
	}
}

export default RecipeForm