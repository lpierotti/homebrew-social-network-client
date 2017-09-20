export default class AuthAdapter {

	static login(userParams) {
		const userJSON = JSON.stringify(userParams)
		return fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			body: userJSON,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static signup(userParams) {
		const userJSON = JSON.stringify(userParams)
		return fetch('http://localhost:3000/api/v1/signup', {
			method: 'POST', 
			body: userJSON,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static logOut() {
		localStorage.removeItem('jwt')
	}
}