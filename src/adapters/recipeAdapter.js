export default class RecipeAdapter {

	static saveRecipe(recipeParams) {
		const recipeJSON = JSON.stringify(recipeParams)
		const token = localStorage.getItem("jwt")
		return fetch('http://localhost:3000/api/v1/recipes', {
			method: 'POST',
			body: recipeJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getRecipes() {
		const token = localStorage.getItem('jwt')
		return fetch('http://localhost:3000/api/v1/recipes', {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getFromBackend(id) {
		const token = localStorage.getItem('jwt')
		return fetch(`http://localhost:3000/api/v1/recipe/${id}`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static saveReview(review, id) {
		const reviewJSON = JSON.stringify({review: review, recipeId: id})
		const token = localStorage.getItem("jwt")
		return fetch('http://localhost:3000/api/v1/review/new', {
			method: 'POST',
			body: reviewJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

}