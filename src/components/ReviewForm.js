import React from 'react'
import Rating from 'react-rating';
import { connect } from 'react-redux'
import { saveRecipeReview } from '../actions/recipes'
import { Form, Segment, Divider } from 'semantic-ui-react'

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
		this.setState({
			rating: 0,
			text: ''
		})
	}

	render() {
		console.log(this.state)
		return (
			<Segment style={{maxWidth: '500px'}}>
				<h2>Leave a Review</h2>
				<Divider />
				<Form onSubmit={this.handleSubmit}>
					<Rating 
						empty={<img src='/beer-outline.png' className='rating' alt=''/>}
						full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
						onChange={this.handleClick}
						placeholderRate={this.state.rating}
						placeholder={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
					/>
					<Form.TextArea  value={this.state.text} onChange={this.handleChange} type='textarea' placeholder='Review'/>
					<Form.Button>Submit</Form.Button>

				</Form>
			</Segment>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		saveRecipeReview: (review, id) => {dispatch(saveRecipeReview(review, id))}
	}
}

export default connect(null, mapDispatchToProps)(ReviewForm)