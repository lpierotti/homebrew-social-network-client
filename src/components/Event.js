import React from 'react'
import { connect } from 'react-redux'
import { addGuest, getEvent } from '../actions/events'

class Event extends React.Component {



	render() {
		return (

		)
	}
}

function mapStateToProps(state) {
	current: state.users.current
}

function mapDispatchToProps(dispatch) {
	return {
		getEvent: (id) => {dispatch(getEvent(id))},
		addGuest: (id) => {dispatch(addGuest(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)