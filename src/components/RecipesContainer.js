import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/users'
import RecipeContainerDisplay from './RecipeContainerDisplay'
import { Card, Segment, Divider } from 'semantic-ui-react'

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
			<div className='savedRecipes'>
				<Segment style={{minHeight: '400px', backgroundColor: 'rgba(255,185,0,.5'}}>
					{this.props.currentUser === this.props.viewing ? <h2>Your Recipes</h2> : <h2>{this.props.viewing}'s Recipes</h2>}
					<Divider />
					<Card.Group className={'recipeContainer'} itemsPerRow={1}> 
						{this.props.recipes ? this.props.recipes.map((recipe, index) => <RecipeContainerDisplay key={index} data={recipe}/>) : null}
					</Card.Group>
				</Segment>
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