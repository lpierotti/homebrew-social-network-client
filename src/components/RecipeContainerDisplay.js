import React from 'react'
import { Segment, Card, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RecipeContainerDisplay = (props) => {
	var img;
	{props.data.image ? img = props.data.image : img = '/default-beer.jpeg'}
	return (
		<Segment style={{minWidth: '700px'}}className={'recipeDisplay'}>
			<Image floated='left' className='beerDisplay' src={img} alt=''/>
			<div style={{ maxWidth: '500px', display: 'inline'}}>
				<Header><Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link></Header>
				<Header.Subheader>{props.data.style}--{props.data.abv}</Header.Subheader>
				<p>{props.data.description}</p>
			</div>
		</Segment>
	)
}

export default RecipeContainerDisplay