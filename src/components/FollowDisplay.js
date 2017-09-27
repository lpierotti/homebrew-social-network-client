import React from 'react'
import { Link } from 'react-router-dom'


const FollowDisplay = (props) => {

	return (
		<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
	)
}

export default FollowDisplay