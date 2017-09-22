import React from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/recipes'

class Recipe extends React.Component {

	componentDidMount() {
		this.props.getRecipe(this.props.id)
	}

	render() {
		console.log("RECIPE PROPS", this.props)
		return (
			<div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipes.currentRecipe
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getRecipe: (id) => {
			dispatch(getRecipe(id))
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)