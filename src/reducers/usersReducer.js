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
				console.log(action.payload.error)
				return Object.assign ({}, state, {error: action.payload.error})
			}
		case "GET_USER_RECIPES":
			console.log("INREDUCER", action.payload.recipes)
			return Object.assign({}, state, {userRecipes: action.payload.recipes})
		case "SET_USER_IMAGE":
			console.log(action.payload)
			return Object.assign({}, state, {current: {...state.current, image: action.payload.image}})
		case 'REMOVE_CURRENT_USER':
			return Object.assign({}, state, {current: {}})
		case 'GET_USER_FOLLOWS':
			return Object.assign({}, state, {userFollowers: action.payload.followers, userFollowees: action.payload.followees})
		case 'SAVE_FOLLOW':
			return Object.assign({}, state, {current: {...state.current, followees: [state.current.followees, action.payload.followee]}, userFollowers: [...state.userFollowers, action.payload.follower ]})
		case 'GET_INFO':
			console.log('IN REDUCER FOR INFO', action.payload)
			return Object.assign({}, state, {viewingUser: action.payload.viewing_user})
		case 'GET_CURRENT':
			console.log(action.payload)
			return Object.assign({}, state, {current: action.payload.user})
		case 'GET_ALL':
			console.log('GETTING ALL', action.payload)
			return Object.assign({}, state, {all: action.payload.users})
		case 'CLEAR_VIEWING_USER':
			return Object.assign({}, state, {viewing_user: {}})
		case 'GET_USER_GROUPS': 
			return Object.assign({}, state, {userGroups: action.payload.userGroups})
		default:
			return state
	}
}