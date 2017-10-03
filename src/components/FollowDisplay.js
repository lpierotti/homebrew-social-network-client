import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'


const FollowDisplay = (props) => {

	return (
		<div style={{maxWidth: '120px'}}>
			<Segment raised={true}>
				{props.data.image ? <img className='smallDisplay' src={props.data.image} alt=''/> : <img className='smallDisplay' src='/default-profile.png' alt=''/>}
				<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
			</Segment>
		</div>
	)
}

export default FollowDisplay