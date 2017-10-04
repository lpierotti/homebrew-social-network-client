import React from 'react'
import { connect } from 'react-redux'
import { getGroups } from '../actions/users'
import FollowDisplay from './FollowDisplay'
import { Link } from 'react-router-dom'
import { Segment, Card, Divider } from 'semantic-ui-react'

class GroupList extends React.Component {

	componentDidMount() {
		this.props.getGroups()
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.userGroups.map((group, index) => {
					return (
						<div key={index} style={{maxWidth: '600px'}}>
							<Segment inverted style={{backgroundColor: 'rgba(230, 111, 14, 0.81)'}} >
								<Link to={`/group/${group.id}`}><h2>{group.name}</h2></Link>
								<Divider />
								<h4>{group.description}</h4>
								<Segment >
									<Card.Group itemsPerRow={3} textAlign='center'>
										{group.members.map((member, index) => <FollowDisplay  key={index} data={member} />)}
									</Card.Group>
								</Segment>
							</Segment>
						</div>
					)
				})}
			</div>
		)
	}
}	

function mapStateToProps(state) {
	return {
		userGroups: state.users.userGroups
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getGroups: () => {dispatch(getGroups())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)