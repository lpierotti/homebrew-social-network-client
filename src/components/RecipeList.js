import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/recipes'
import RecipeDisplay from './RecipeDisplay'
import { Card, Loader } from 'semantic-ui-react'


class RecipeList extends React.Component {

	componentDidMount() {
		this.props.getRecipes()
		console.log(this.props)
	}

	render() {
		return (
			<div>
				<h2>All Recipes</h2>
				<Card.Group itemsPerRow={3}>
					{this.props.recipes ? this.props.recipes.map((recipe, index) => <RecipeDisplay key={index} data={recipe}/>) : <Loader active={true} size='large'>Loading</Loader>}
				</Card.Group>
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