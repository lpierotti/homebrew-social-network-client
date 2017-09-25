import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/users'
import RecipeDisplay from './RecipeDisplay'

class RecipesContainer extends React.Component {

	componentDidMount() {
		this.props.getUserRecipes(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.id !== nextProps.id){
			this.props.getUserRecipes(nextProps.id)
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.recipes ? this.props.recipes.map((recipe, index) => <RecipeDisplay key={index} data={recipe}/>) : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state.users.userRecipes)
	return {
		recipes: state.users.userRecipes
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getUserRecipes: (id) => dispatch(getRecipes(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)