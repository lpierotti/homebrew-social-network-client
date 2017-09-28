import React from 'react'
import { connect } from 'react-redux'

class UsersGroups extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		usersGroups: state.users.usersGroups 
	}
}
function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersGroups)