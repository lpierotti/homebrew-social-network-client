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

}