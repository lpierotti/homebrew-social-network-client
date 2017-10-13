export default function EventsReducer(state = {all: [], current: {}}, action) {
	switch(action.type) {
		case 'CREATE_EVENT':
			return Object.assign({}, state, {all: [...state.all, action.payload.event]})
		case 'GET_EVENTS':
			return Object.assign({}, state, {all: action.payload.events})
		case 'GET_EVENT':
			return Object.assign({}, state, {current: action.payload.event})
		case 'ADD_GUEST':
			return Object.assign({}, state, {current: action.payload.event})
		default:
			return state
	}
}