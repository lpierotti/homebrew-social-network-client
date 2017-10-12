export default function GroupsReducer(state = {currentGroup: {}, allGroups: []}, action) {
	switch(action.type) {
		case 'CREATE_GROUP':
			return Object.assign({}, state, {currentGroup: action.payload.group, allGroups: [...state.allGroups, action.payload.group]})
		case 'GET_GROUP_INFO':
			return Object.assign({}, state, {currentGroup: action.payload.group})
		case 'CREATE_GROUP_EVENT':
			return Object.assign({}, state, {currentGroup: {...state.currentGroup, events: [state.currentGroup.events, action.payload.event]}})
		default:
			return state
	}
}