import React from 'react'
import {Link} from 'react-router-dom'

const RecipeDisplay = (props) => {

	return (
		<div>
			<Link to={`/recipe/${props.data.id}`}>{props.data.name}</Link>
			
		</div>
	)
}

export default RecipeDisplay