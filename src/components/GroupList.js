import React from 'react'
import { connect } from 'react-redux'
import { getGroups } from '../actions/users'
import FollowDisplay from './FollowDisplay'
import { Link } from 'react-router-dom'

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
						<div key={index}>
							<Link to={`/group/${group.id}`}><h2>{group.name}</h2></Link>
							<h4>{group.description}</h4>
							{group.members.map((member, index) => <FollowDisplay  key={index} data={member} />)}
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