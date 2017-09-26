import React from 'react'
import Rating from 'react-rating'

function Review(props) {


	return (
		<div>
			<h3>{props.data.author}</h3>
			<Rating 
				empty={<img src='/beer-outline.png' className='rating' alt=''/>}
				full={<img src='/beer-outline-filled.png' className='rating' alt=''/>}
				placeholderRate={props.data.rating}
				readonly={true}
			/>
			<p>{props.data.text}</p>
			<h4>{props.data.author}</h4>
		</div>
	)
}

export default Review