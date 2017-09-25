import React from 'react'
import { Link } from 'react-router-dom'
import AuthAdapter from '../adapters/authAdapter'
import { connect } from 'react-redux'


class Navbar extends React.Component {

	handleClick = (event) => {
	    event.preventDefault()
	    AuthAdapter.logOut()
	}
	
	render() {
		console.log(this.props)
		return (
			<div>
				{localStorage.getItem('jwt') ? <div><button onClick={this.handleClick}>Logout</button><Link to={`/user/${this.props.user.id}/profile`}>Profile</Link></div> : <div><Link to={'/signup'}>Signup</Link><br/><Link to={'/login'}>Login</Link></div>}

			</div>
		)
	}
	
}

function mapStateToProps(state) {
	return {
		user: state.users.current
	}
}

export default connect(mapStateToProps)(Navbar)