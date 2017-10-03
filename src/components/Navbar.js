import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logUserOut } from '../actions/users'
import { Menu, Button } from 'semantic-ui-react'


class Navbar extends React.Component {

	handleClick = (event) => {
	    event.preventDefault()
	    this.props.logUserOut()

	}
	
	render() {
		console.log(this.props)
		return (
			<div>
				{localStorage.getItem('jwt') ? 
					<Menu>
				        <Menu.Item>
				        	<Link to={`/user/${this.props.user.id}/profile`}><Button>Profile</Button></Link>
				        </Menu.Item>
				        	
				        <Menu.Item >
				        	<Link to={'/recipes'}><Button>All Recipes</Button></Link>
				        </Menu.Item>

				        <Menu.Item >
				        	<Link to={`/user/${this.props.user.id}/groups`}><Button>Your Groups</Button></Link>
				        </Menu.Item>
				        <h3>Home</h3>
				        <Menu.Menu position='right'>
				          <Menu.Item>
				          	<Button onClick={this.handleClick}>Logout</Button>
				          </Menu.Item>

				          <Menu.Item>
				        	<Link to={`/map`}><Button>Breweries Near You!</Button></Link>
				          </Menu.Item>
				        </Menu.Menu>
				    </Menu> : 
					<Menu>
				        <Menu.Item >
				        	<Link to={'/signup'}><Button>Signup</Button></Link><br/>
				        </Menu.Item>
				        	
				        <Menu.Item >
				        	<Link to={'/login'}><Button>Login</Button></Link>
				        </Menu.Item>

				        <Menu.Menu position='right'>
				          <Menu.Item>
				        	<Link to={`/map`}><Button>Breweries Near You!</Button></Link>
				          </Menu.Item>
				        </Menu.Menu>
				    </Menu>}

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