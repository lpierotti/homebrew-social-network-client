import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const RecipeDisplay = (props) => {

	return (
		<div className='ui centered card'>
			<Card>
			    <Image src={props.data.image} />
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