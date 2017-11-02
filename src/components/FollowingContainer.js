import React from 'react'
import { connect } from 'react-redux'
import { getFollows } from '../actions/users'
import FollowDisplay from './FollowDisplay'
import { Segment, Divider, Card } from 'semantic-ui-react'

class FollowingContainer extends React.Component {

	componentDidMount() {
		this.props.getFollows(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.id !== nextProps.id){
			this.props.getFollows(nextProps.id)
		}
	}

	render() {
		console.log(this.props)
		return (
			<div className={'followingContainer'}>
				<Segment className='container'>
					<h2>{this.props.currentUser === this.props.viewing ? 'Your' : `People ${this.props.viewing}` } Follows</h2>
					<Divider />
					<Card.Group itemsPerRow={4} textAlign='center'>
						{this.props.follows ? this.props.follows.map((follow, index) => <FollowDisplay key={index} data={follow}/>) : null}
					</Card.Group>
					<h2>Followers</h2>
					<Divider />
					<Card.Group itemsPerRow={4} textAlign='center'>
						{this.props.followers ? this.props.followers.map((follower, index) => <FollowDisplay key={index} data={follower}/>) : null}
					</Card.Group>
				</Segment>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {	
		follows: state.users.userFollowees,
		followers: state.users.userFollowers
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getFollows: (id) => dispatch(getFollows(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingContainer)