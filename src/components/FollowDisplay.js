import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const FollowDisplay = (props) => {

	return (
			<Card raised={true}>
				<div style={{margin: 'auto'}}>
					{props.data.image ? <Link to={`/user/${props.data.id}/profile`}><Image className='smallDisplay' src={props.data.image} alt='' centered={true}/></Link> : <Link to={`/user/${props.data.id}/profile`}><Image className='smallDisplay' src='/default-profile.png' alt='' centered={true}/></Link>}
					<Link to={`/user/${props.data.id}/profile`}>{props.data.username}</Link>
				</div>
			</Card>
	)
}

export default FollowDisplay