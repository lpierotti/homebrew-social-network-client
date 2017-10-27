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
		const fileJSON = JSON.stringify({user: {url: file}})
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

	static getUserFollows(id) {
		const token = localStorage.getItem('jwt')
		return fetch('http://localhost:3000/api/v1/follows', {
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

	static saveRecipeToUser(recipeId) {
		const token = localStorage.getItem('jwt')
		const recipeJSON = JSON.stringify({id: recipeId})
		return fetch('http://localhost:3000/api/v1/user_recipes', {
			method: 'POST',
			body: recipeJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
	}

	static saveFollow(id) {
		const token = localStorage.getItem('jwt')
		const followeeJSON = JSON.stringify({id: id})
		return fetch('http://localhost:3000/api/v1/follow/new', {
			method: 'POST',
			body: followeeJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
	}

	static getInfo(id) {
		const token = localStorage.getItem('jwt')
		return fetch(`http://localhost:3000/api/v1/user/${id}`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getCurrent() {
		const token = localStorage.getItem('jwt')
		return fetch(`http://localhost:3000/api/v1/user/current`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getAllUsers(){
		const token = localStorage.getItem('jwt')
		return fetch(`http://localhost:3000/api/v1/users`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getUserGroups() {
		const token = localStorage.getItem('jwt')
		return fetch(`http://localhost:3000/api/v1/user/groups`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static unfollow(id) {
		const token = localStorage.getItem('jwt')
		const followeeJSON = JSON.stringify({id: id})
		return fetch('http://localhost:3000/api/v1/follow/delete', {
			method: 'POST',
			body: followeeJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
	}
}