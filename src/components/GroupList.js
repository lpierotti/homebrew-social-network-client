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
		return (
			<div style={{maxWidth: '1250px', margin: 'auto'}}>
			<Card.Group itemsPerRow={2}>
				{this.props.userGroups.map((group, index) => {
					return (
						<div key={index} style={{maxWidth: '600px', margin: '10px'}}>
							<Segment inverted style={{backgroundColor: 'rgba(95, 122, 83, 0.81)'}} raised={true}>
								<Link to={`/group/${group.id}`}><h2 style={{color: 'black'}}>{group.name}</h2></Link>
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
			</Card.Group>
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