import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const RecipeDisplay = (props) => {

	return (
		<div className='ui centered card'>
			<Card>
			    {props.data.image ? <Image className='beerDisplay' src={props.data.image} alt=''/>: <Image className='beerDisplay' src='/default-beer.jpeg' alt=''/>}
			    <Card.Content>
			      <Card.Header><Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link></Card.Header>
			      <Card.Meta>{props.data.style}--{props.data.abv}</Card.Meta>
			      <Card.Description>{props.data.description}</Card.Description>
			    </Card.Content>
			</Card>
			
			
		</div>
	)
}

export default RecipeDisplay