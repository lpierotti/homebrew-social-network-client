export default function BreweriesReducer(state = {breweries: []}, action) {
	switch(action.type) {
		case 'GET_BREWERIES':
			return Object.assign({}, state, {breweries: action.payload.breweries})
		default:
			return state
	}
}