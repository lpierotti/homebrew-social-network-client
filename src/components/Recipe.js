import React from 'react'
import { connect } from 'react-redux'
import { getRecipe, getFromBackend } from '../actions/recipes'
import { Link } from 'react-router-dom'

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
		if (this.props.recipe) {
			return (
				<div>
					<h2>{this.props.recipe.name}</h2>
					{this.props.recipe.author ? <h4><Link to={`/user/${this.props.recipe.author.id}/profile`}>{this.props.recipe.author.username}</Link></h4> : null}
					<h3>{this.props.recipe.description}</h3>
					<h4>{this.props.recipe.style}--{this.props.recipe.type_of_brew}</h4>
					<h5>{this.props.recipe.og}-{this.props.recipe.fg} * 131.25 = {this.props.recipe.abv}%</h5>
					{this.props.recipe.ingredients ? this.props.recipe.ingredients.map(ingredient => <p>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>) : null}
					<p>{this.props.recipe.instructions}</p>
				</div>
			)
		} else {
			<div></div>
		}	
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