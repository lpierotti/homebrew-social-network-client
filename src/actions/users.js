import AuthAdapter from '../adapters/authAdapter'
import UserAdapter from '../adapters/userAdapter'

export function loginUser(user, history) {
	 return function(dispatch) {
	 	AuthAdapter.login(user)
	 		.then(userInfo => {
	 			dispatch({type: "LOGIN_USER", payload: userInfo})
	 		})
	 		.then(() => history.replace('/'))
	 }
}

export function signupUser(user, history) {
	return function(dispatch) {
	 	AuthAdapter.signup(user)
	 		.then(userInfo => {
	 			dispatch({type: "SIGNUP_USER", payload: userInfo})
	 		})
	 		.then(() => history.replace('/'))
	 }
}

export function getRecipes(id) {
	return function(dispatch) {
		UserAdapter.getUserRecipes(id)
			.then(recipes => {
				dispatch({type: "GET_USER_RECIPES", payload: recipes})
			})
	}
}

export function setProfilePic(file) {
	return function(dispatch) {
		UserAdapter.setUserImage(file)
			.then(file => {
				dispatch({type: "SET_USER_IMAGE", payload: file})
			})
	}
}

export function logUserOut() {
	AuthAdapter.logOut()
	return {
		type: 'REMOVE_CURRENT_USER'
	}
}

// export function addRecipe(recipe) {
// 	return function(dispatch) {
// 		UserAdapter.addRecipeToUser(recipe)

// 	}
// }

export function getFollows(id) {
	return function(dispatch) {
		UserAdapter.getUserFollows(id)
			.then(follows => {
				dispatch({type: 'GET_USER_FOLLOWS', payload: id})
			})
	}
}
