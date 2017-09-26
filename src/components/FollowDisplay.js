import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const FollowDisplay = (props) => {

	return (
		<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
	)
}

export default FollowDisplay