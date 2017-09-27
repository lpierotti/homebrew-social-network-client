export default function GroupssReducer(state = {currentGroup: {}, allGroups: []}, action) {
	switch(action.type) {
		case 'CREATE_GROUP':
			return Object.assign({}, state, {currentGroup: action.payload.group, allGroups: [...state.allGroups, action.payload.group]})
		default:
			return state
	}
}