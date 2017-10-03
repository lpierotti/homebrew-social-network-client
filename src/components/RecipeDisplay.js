import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const RecipeDisplay = (props) => {

	return (
		
			<Card className={'recipeDisplay'}>
			    {props.data.image ? <Image className='beerDisplay' src={props.data.image} alt='' centered={true}/>: <Image className='beerDisplay' src='/default-beer.jpeg' alt='' centered={true}/>}
			    <Card.Content>
			      <Card.Header><Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link></Card.Header>
			      <Card.Meta>{props.data.style}--{props.data.abv}</Card.Meta>
			      <Card.Description className={'recipeDescription'}>{props.data.description}</Card.Description>
			    </Card.Content>
			</Card>
			
			
		
	)
}

export default RecipeDisplay