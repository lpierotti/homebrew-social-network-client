import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logUserOut } from '../actions/users'
import { Menu } from 'semantic-ui-react'


class Navbar extends React.Component {

	handleClick = (event) => {
	    event.preventDefault()
	    this.props.logUserOut()

	}
	
	render() {
		return (
			<div className={'nav'}>
				{localStorage.getItem('jwt') ? 
					<Menu>
				        <Menu.Item>
				        	<Link to={`/user/${this.props.user.id}/profile`}>Profile</Link>
				        </Menu.Item>
				        	
				        <Menu.Item >
				        	<Link to={'/recipes'}>All Recipes</Link>
				        </Menu.Item>

				        <Menu.Item >
				        	<Link to={`/user/${this.props.user.id}/groups`}>Your Groups</Link>
				        </Menu.Item>
				        <Link style={{margin: 'auto'}} to={`/`}><h1 style={{ color: 'white', fontSize: '4em'}}>Brew For You</h1></Link>
				        <Menu.Menu position='right'>
				          <Menu.Item>
				          	<a onClick={this.handleClick}>Logout</a>
				          </Menu.Item>

				          <Menu.Item>
				        	<Link to={`/map`}>Breweries Near You!</Link>
				          </Menu.Item>
				        </Menu.Menu>
				    </Menu> : 
					<Menu>
				        <Menu.Item >
				        	<Link to={'/signup'}>Signup</Link><br/>
				        </Menu.Item>
				        	
				        <Menu.Item >
				        	<Link to={'/login'}>Login</Link>
				        </Menu.Item>
				        <Link style={{margin: 'auto'}} to={`/`}><h1 style={{ color: 'white', fontSize: '4em'}}>Brew For You</h1></Link>
				        <Menu.Menu position='right'>
				          <Menu.Item>
				        	<Link to={`/map`}>Breweries Near You!</Link>
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