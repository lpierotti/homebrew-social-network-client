import React from 'react'
import { connect } from 'react-redux' 
import { getGroupInfo } from '../actions/groups'
import FollowDisplay from './FollowDisplay'
import Chat from './Chat'

class Group extends React.Component {

	componentDidMount() {
		this.props.getGroupInfo(this.props.id)
	}


	render() {
		return (
			<div>
				{this.props.groupInfo.image ? <img src={this.props.groupInfo.image} alt=''/> : <img className='profPic' src='/default-profile.png' alt=''/>}
				<h1>{this.props.groupInfo.name}</h1>
				<h3>{this.props.groupInfo.description}</h3>
				<Chat />
				{this.props.groupInfo.members ? this.props.groupInfo.members.map((member, index) => <FollowDisplay key={index} data={member}/>) : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		groupInfo: state.groups.currentGroup
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGroupInfo: (id) => {dispatch(getGroupInfo(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)