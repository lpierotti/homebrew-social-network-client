import React from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RecipeContainerDisplay = (props) => {
	var img;
	props.data.image ? img = props.data.image : img = '/default-beer.jpeg'
	return (
		<Segment style={{minWidth: '700px', maxWidth: '700px', margin: 'auto'}}className={'recipeDisplay'}>
			<Image floated='left' className='beerDisplay' src={img} alt=''/>
			<div style={{ maxWidth: '500px', display: 'inline'}}>
				<Header><Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link></Header>
				<p>Style: {props.data.style}</p>
				<p>ABV: {props.data.abv}</p>
				<p>Description: {props.data.description}</p>
			</div>
		</Segment>
	)
}

export default RecipeContainerDisplay