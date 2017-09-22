import React from 'react'
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'


class Profile extends React.Component {


	render() {
		return (
			<div>
				<RecipesContainer/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.users.current
	}
}

export default connect(mapStateToProps)(Profile)