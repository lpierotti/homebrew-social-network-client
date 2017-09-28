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

export function getFollows(id) {
	return function(dispatch) {
		UserAdapter.getUserFollows(id)
			.then(follows => {
				dispatch({type: 'GET_USER_FOLLOWS', payload: follows})
			})
	}
}

export function follow(id) {
	return function(dispatch) {
		UserAdapter.saveFollow(id)
			.then(followee => {
				dispatch({type: 'SAVE_FOLLOW', payload: followee})
			})
	}
}

export function getUserInfo(id) {
	return function(dispatch) {
		UserAdapter.getInfo(id)
			.then(info => {
				dispatch({type: 'GET_INFO', payload: info})
			})
	}
}

export function getCurrentUser() {
	return function(dispatch) {
		UserAdapter.getCurrent()
			.then(user => {
				dispatch({type: 'GET_CURRENT', payload: user})
			})
	}
}

export function getAllUsers() {
	return function(dispatch) {
		UserAdapter.getAllUsers()
			.then(users => {
				dispatch({type: 'GET_ALL', payload: users})
			})
	}
}

export function clearUserProfile() {
	return {
		type: 'CLEAR_VIEWING_USER'
	}
}


export function getGroups() {
	return function(dispatch) {
		UserAdapter.getUserGroups()
			.then(groups => {
				dispatch({type: 'GET_USER_GROUPS', payload: groups})
			})
	}
}