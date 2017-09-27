import React from 'react'
import IngredientForm from './IngredientForm'
import GravityABV from './GravityABV'
import { connect } from 'react-redux'
import { saveRecipe } from '../actions/recipes'
import Dropzone from 'react-dropzone'
import axios from 'axios'

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
			instructions: '',
			image: ''
		}
	}

	handleDrop = (files) => {
		const formData = new FormData();
		formData.append('file', files[0])
		formData.append('upload_preset', 'f9x8cstk')
		axios.post('https://api.cloudinary.com/v1_1/dflt9qlwf/image/upload', formData, {
			headers: { "X-Requested-With": "XMLHttpRequest" }
		})
			.then(res => {
				const data = res.data
				const fileURL = data.secure_url
				this.setState({image: fileURL})
			})
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
		this.props.saveRecipe(this.state, this.props.history)
		
	}



	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.state.image ? <img src={this.state.image} alt=''/> : <Dropzone onDrop={this.handleDrop} accept="image/*" ><p>Drop your files or click here to upload</p></Dropzone>}
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

function mapDispatchToProps(dispatch) {
	return {
		saveRecipe: (recipeParams, history) => {dispatch(saveRecipe(recipeParams, history))}
	}
}

export default connect(null, mapDispatchToProps)(RecipeForm)