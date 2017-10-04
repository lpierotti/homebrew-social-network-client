import React from 'react'
import { connect } from 'react-redux'
import { getRecipe, getFromBackend } from '../actions/recipes'
import { Link } from 'react-router-dom'
import UserAdapter from '../adapters/userAdapter'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { Button, Image, Segment, List, Container } from 'semantic-ui-react'

class Recipe extends React.Component {

	componentDidMount() {
		const recipe = this.props.allRecipes.find(recipe => recipe.id === parseInt(this.props.id, 10))
		console.log(this.props.allRecipes, this.props.id)
		if (recipe) {
			console.log('IN FRONTEND')
			this.props.getRecipe(this.props.id)
		} else {
			this.props.getFromBackend(this.props.id)
		}
	}

	handleSave = (event) => {
		event.preventDefault()
		UserAdapter.saveRecipeToUser(this.props.recipe.id)
	}


	render() {
		console.log("RECIPE PROPS", this.props)
		if (this.props.recipe) {
			return (
				<div style={{maxWidth: '1000px', margin: 'auto'}}>
					<Segment floated='right' compact={true}>
						{this.props.recipe.image ? <Image className='recipePic' src={this.props.recipe.image} alt=''/> : <Image  className='recipePic' src='/default-beer.jpeg' alt=''/> }
						{this.props.recipe.author && this.props.recipe.author.id !== this.props.currentUser.id && !this.props.userRecipes.find(recipe => recipe.id === this.props.recipe.id) ? <Button  onClick={this.handleSave}>Save Recipe</Button> : null}
					</Segment>

					<h2>{this.props.recipe.name}</h2>
					{this.props.recipe.author ? <h4><Link to={`/user/${this.props.recipe.author.id}/profile`}>{this.props.recipe.author.username}</Link></h4> : null}
					<h3>{this.props.recipe.description}</h3>
					<h4>{this.props.recipe.style}--{this.props.recipe.type_of_brew}</h4>
					<h5>{this.props.recipe.og}-{this.props.recipe.fg} * 131.25 = {this.props.recipe.abv}%</h5>
					<List>
						{this.props.recipe.ingredients ? this.props.recipe.ingredients.map((ingredient, index) => <List.Item key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</List.Item>) : null}
					</List>
					<p>{this.props.recipe.instructions}</p>
					
					<ReviewForm recipeId={this.props.id}/>
					<Segment.Group>
						{this.props.recipe.reviews ? this.props.recipe.reviews.map((review, index) => <Review key={index} author={review.author.username} authorID={review.author.id} authorImage={review.author.image} rating={review.rating} text={review.text} />) : null}
					</Segment.Group>
				</div>
			)
		} else {
			return(
				<div></div>
			)
		}	
	}
}

function mapStateToProps(state) {
	return {
		allRecipes: state.recipes.allRecipes,
		recipe: state.recipes.currentRecipe,
		currentUser: state.users.current, 
		userRecipes: state.users.userRecipes
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