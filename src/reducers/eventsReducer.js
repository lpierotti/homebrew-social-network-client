export default function EventsReducer(state = {all: [], current: {}}, action) {
	switch(action.type) {
		case 'CREATE_EVENT':
			return Object.assign({}, state, {all: [...state.all, action.payload.event]})
		case 'GET_EVENTS':
			return Object.assign({}, state, {all: action.payload.events})
		case 'GET_EVENT':
			const event = state.all.find(event => event.id === action.payload)
			return Object.assign({}, state, {current: event})
		default:
			return state
	}
}