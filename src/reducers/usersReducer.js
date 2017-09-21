export default function usersReducer(state = {user: ''}, action) {
	switch (action.type) {
		case "LOGIN_USER":
			localStorage.setItem("jwt", action.payload.jwt)
			return Object.assign({}, state, {user: action.payload.user.username})
		case "SIGNUP_USER":
			localStorage.setItem('jwt', action.payload.jwt)
			return Object.assign({}, state, {user: action.payload.user.username})
		default:
			return state
	}
}