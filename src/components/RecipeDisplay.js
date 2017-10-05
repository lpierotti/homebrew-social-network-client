import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image, Modal } from 'semantic-ui-react'

const RecipeDisplay = (props) => {
	var img;
	{props.data.image ? img = props.data.image : img = '/default-beer.jpeg'}
	return (
			<div className={'recipeDisplay'} style={{margin: '20px', maxWidth: '300px', float: 'left'}}>
			    <Modal dimmer={'blurring'} size={'small'} trigger={<Image style={{borderRadius: '10px'}}className='beerDisplay' src={img} alt='' centered={true}/>}>
				    <Modal.Header><Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link></Modal.Header>
				    <Modal.Content>
				      <Modal.Description>
				        <p>{props.data.style}--{props.data.abv}</p>
				        <p>{props.data.description}</p>
				      </Modal.Description>
				    </Modal.Content>
				</Modal>
			</div>
			
		
	)
}

export default RecipeDisplay