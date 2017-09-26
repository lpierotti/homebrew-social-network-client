import React from 'react'
import Rating from 'react-rating'

function Review(props) {


	return (
		<div>
			<h3>{props.author}</h3>
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