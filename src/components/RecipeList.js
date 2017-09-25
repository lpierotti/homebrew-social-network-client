import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/recipes'
import RecipeDisplay from './RecipeDisplay'


class RecipeList extends React.Component {

	componentDidMount() {
		this.props.getRecipes()
		console.log(this.props)
	}

	render() {
		return (
			<div>
				{this.props.recipes ? this.props.recipes.map((recipe, index) => <RecipeDisplay key={index} data={recipe}/>) : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.allRecipes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getRecipes: () => dispatch(getRecipes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)