export default class UserAdapter {

	static getUserRecipes(id) {
		const token = localStorage.getItem('jwt')
		return fetch('http://localhost:3000/api/v1/user/recipes', {
			method: 'POST',
			body: JSON.stringify({id: id}),
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static setUserImage(file) {
		const token =localStorage.getItem('jwt')
		const fileJSON = JSON.stringify({user: file})
		return fetch('http://localhost:3000/api/v1/user/edit', {
			method: 'POST',
			body: fileJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getUserFollows() {
		const token = localStorage.getItem('jwt')
		return fetch('http://localhost:3000/api/v1/user/recipes', {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}
}