import React from 'react'
import Rating from 'react-rating';
import { connect } from 'react-redux'
import { saveRecipeReview } from '../actions/recipes'

class ReviewForm extends React.Component {

	constructor() {
		super()
		this.state = {
			rating: 0,
			text: ''
		}
	}

	handleClick = (rate) => {
		
		this.setState({rating: rate})
	}

	handleChange = (event) => {
		this.setState({text: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.saveRecipeReview(this.state, this.props.recipeId)
	}

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit}>
				<Rating 
					empty={<img src='/beer-outline.png' className='rating' alt=''/>}
					full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
					onChange={this.handleClick}
					placeholderRate={this.state.rating}
					placeholder={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				/>
				<input onChange={this.handleChange} type='textarea' placeholder='Review'/>
				<input type='submit' />

			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		saveRecipeReview: (review) => {dispatch(saveRecipeReview(review))}
	}
}

export default connect(null, mapDispatchToProps)(ReviewForm)