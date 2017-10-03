import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

function Review(props) {


	return (
		<div>
			<Card>
				{props.authorImage ? <Image floated='left' className='icon' src={props.authorImage} alt=''/> : <Image floated='left' className='icon' src='/default-profile.png' alt=''/> }
				<h3><Link to={`/user/${props.authorID}/profile`}>{props.author}</Link></h3>
				<Rating 
					empty={<img src='/beer-outline.png' className='rating' alt=''/>}
					full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
					placeholderRate={props.rating}
					placeholder={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
					readonly={true}
				/>
				<p>{props.text}</p>
			</Card>
		</div>
	)
}

export default Review