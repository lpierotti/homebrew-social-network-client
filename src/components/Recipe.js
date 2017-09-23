import React from 'react'
import { connect } from 'react-redux'
import { getRecipe, getFromBackend } from '../actions/recipes'

class Recipe extends React.Component {

	componentDidMount() {
		const recipe = this.props.allRecipes.find(recipe => recipe.id === this.props.id)
		if (recipe) {
			this.props.getRecipe(this.props.id)
		} else {
			this.props.getFromBackend(this.props.id)
		}
	}

	render() {
		console.log("RECIPE PROPS", this.props)
		return (
			<div>
				<h2>{this.props.recipe.name}</h2>
				<h3>{this.props.recipe.description}</h3>
				<h4>{this.props.recipe.style}--{this.props.recipe.type_of_brew}</h4>
				<h5>{this.props.recipe.og}/{this.props.recipe.fg}-->{this.props.recipe.abv}%</h5>
				{this.props.recipe.ingredients ? this.props.recipe.ingredients.map(ingredient => <p>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>) : null}
				<p>{this.props.recipe.instructions}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		allRecipes: state.recipes.allRecipes,
		recipe: state.recipes.currentRecipe
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getRecipe: (id) => {
			dispatch(getRecipe(id))
		},
		getFromBackend: (id) => {
			dispatch(getFromBackend(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)