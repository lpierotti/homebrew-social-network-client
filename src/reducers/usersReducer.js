export default function usersReducer(state = {current: {}, userRecipes: [], userFollowers: [], userFollowees: [], viewingUser: {}, all: [], userGroups: [], error: ''}, action) {
	switch (action.type) {
		case "LOGIN_USER":
			if (action.payload.jwt) {
				localStorage.setItem("jwt", action.payload.jwt)
				return Object.assign({}, state, {current: action.payload.user, error: ''})
			} else {
				return Object.assign({}, state, {error: action.payload.error})
			}
		case "SIGNUP_USER":
			if (action.payload.jwt) {
				localStorage.setItem('jwt', action.payload.jwt)
				return Object.assign({}, state, {current: action.payload.user, error: ''})
			} else {
				return Object.assign ({}, state, {error: action.payload.error})
			}
		case "GET_USER_RECIPES":
			return Object.assign({}, state, {userRecipes: action.payload.recipes})
		case "SET_USER_IMAGE":
			return Object.assign({}, state, {current: {...state.current, image: action.payload.image}})
		case 'REMOVE_CURRENT_USER':
			return Object.assign({}, state, {current: {}})
		case 'GET_USER_FOLLOWS':
			return Object.assign({}, state, {userFollowers: action.payload.followers, userFollowees: action.payload.followees})
		case 'SAVE_FOLLOW':
			return Object.assign({}, state, {userFollowers: [...state.userFollowers, action.payload.follower ]})
		case 'REMOVE_FOLLOW': 
			var followers = state.userFollowers.filter(follower => follower.id !== action.payload.follower.id)
			return Object.assign({}, state, {userFollowers: followers})
		case 'GET_INFO':
			return Object.assign({}, state, {viewingUser: action.payload.viewing_user})
		case 'GET_CURRENT':
			return Object.assign({}, state, {current: action.payload.user})
		case 'GET_ALL':
			return Object.assign({}, state, {all: action.payload.users})
		case 'CLEAR_VIEWING_USER':
			return Object.assign({}, state, {viewing_user: {}})
		case 'GET_USER_GROUPS': 
			return Object.assign({}, state, {userGroups: action.payload.userGroups})
		default:
			return state
	}
}