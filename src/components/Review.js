import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

function Review(props) {


	return (
		<div>
			{props.authorImage ? <img className='icon' src={props.authorImage} alt=''/> : <img className='icon' src='/default-profile.png' /> }
			<h3><Link to={`/user/${props.authorID}/profile`}>{props.author}</Link></h3>
			<Rating 
				empty={<img src='/beer-outline.png' className='rating' alt=''/>}
				full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				placeholderRate={props.rating}
				placeholder={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				readonly={true}
			/>
			<p>{props.text}</p>
		</div>
	)
}

export default Review