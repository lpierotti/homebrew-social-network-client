import AuthAdapter from '../adapters/authAdapter'

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

