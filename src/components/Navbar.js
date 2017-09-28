import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logUserOut } from '../actions/users'


class Navbar extends React.Component {

	handleClick = (event) => {
	    event.preventDefault()
	    this.props.logUserOut()

	}
	
	render() {
		console.log(this.props)
		return (
			<div>
				{localStorage.getItem('jwt') ? <div><button onClick={this.handleClick}>Logout</button><Link to={`/user/${this.props.user.id}/profile`}><button>Profile</button></Link><Link to={'/recipes'}><button>All Recipes</button></Link><Link to={'/user/:id/groups'}><button>Your Groups</button></Link></div> : <div><Link to={'/signup'}>Signup</Link><br/><Link to={'/login'}>Login</Link></div>}

			</div>

		)
	}
	
}

function mapStateToProps(state) {
	return {
		user: state.users.current
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logUserOut: () => (dispatch(logUserOut())) 
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)