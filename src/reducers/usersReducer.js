export default function usersReducer(state = {current: {}, userRecipes: []}, action) {
	switch (action.type) {
		case "LOGIN_USER":
			localStorage.setItem("jwt", action.payload.jwt)
			return Object.assign({}, state, {current: action.payload.user})
		case "SIGNUP_USER":
			localStorage.setItem('jwt', action.payload.jwt)
			return Object.assign({}, state, {current: action.payload.user})
		case "GET_USER_RECIPES":
			console.log("INREDUCER", action.payload.recipes)
			return Object.assign({}, state, {userRecipes: action.payload.recipes})
		case "SET_USER_IMAGE":
			console.log(action.payload)
			return Object.assign({}, state, {current: {...state.current, image: action.payload.image}})
		default:
			return state
	}
}