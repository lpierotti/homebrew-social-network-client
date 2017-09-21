export default class RecipeAdapter {

	saveRecipe(recipeParams) {
		const recipeJSON = JSON.stringify(recipeParams)
		return fetch('http://localhost:3000/api/v1/recipes', {
			method: 'POST',
			body: recipeJSON,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
	}
}