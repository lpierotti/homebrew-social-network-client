import React from 'react'
import { Link } from 'react-router-dom'


const FollowDisplay = (props) => {

	return (
		<div>
			<img className='smallDisplay' src={props.data.image}/>
			<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
		</div>
	)
}

export default FollowDisplay