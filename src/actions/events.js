import EventAdapter from '../adapters/eventAdapter'

export function createEvent(params) {
	return function(dispatch) {
		EventAdapter.createEvent(params)
			.then(event => {
				dispatch({type: 'CREATE_EVENT', payload: event})
			})
	}
}

export function getEvents(id) {
	return function(dispatch) {
		EventAdapter.getEvents(id)
			.then(events => {
				dispatch({type: 'GET_EVENTS', payload: events})
			})
	}
}

export function addGuest(id) {
	return function(dispatch) {
		EventAdapter.addGuest(id)
			.then(updatedEvent => {
				dispatch({type: 'ADD_GUEST', payload: updatedEvent})
			})
	}
}

export function getEvent(id) {
	return function(dispatch) {
		EventAdapter.getEvent(id)
			.then(event => {
				dispatch({type: 'GET_EVENT', payload: event})
			})
	}
}

export function removeGuest(id) {
	return function(dispatch) {
		EventAdapter.removeGuest(id)
			.then(event => {
				dispatch({type: 'REMOVE_GUEST', payload: event})
			})
	}
}