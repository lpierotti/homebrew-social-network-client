import React from 'react'
import { Link } from 'react-router-dom'


const FollowDisplay = (props) => {

	return (
		<div>
			{props.data.image ? <img className='smallDisplay' src={props.data.image} alt=''/> : <img className='smallDisplay' src='/default-profile.png' alt=''/>}
			<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
		</div>
	)
}

export default FollowDisplay