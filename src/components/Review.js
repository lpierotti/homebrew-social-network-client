import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
import { Image, Segment } from 'semantic-ui-react'

function Review(props) {
	var img;
	props.authorImage ? img = props.authorImage : img = '/default-profile.png'

	return (
		<Segment style={{minHeight: '170px'}}>
			<Image floated='left' className='icon' src={img} alt=''/>
			<h3 style={{float: 'left'}}><Link to={`/user/${props.authorID}/profile`}>{props.author}</Link></h3>
			<Rating 
				empty={<img src='/beer-outline.png' className='rating' alt=''/>}
				full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				placeholderRate={props.rating}
				placeholder={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				readonly={true}
				style={{float: 'left', clear: 'left'}}
			/>
			<Segment style={{maxWidth: '600px', textAlign: 'left', margin: 'auto'}}>
				<p>{props.text}</p>
			</Segment>
		</Segment>
	)
}

export default Review