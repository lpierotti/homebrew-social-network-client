import RecipeAdapter from '../adapters/recipeAdapter'


export function getRecipes(){
	return function(dispatch) {
		RecipeAdapter.getRecipes()
			.then(recipeList => {
				dispatch({type: 'GET_ALL_RECIPES', payload: recipeList})
			})
	}
}

export function getRecipe(id) {
	console.log('IN ACTION')
	return {
		type: "GET_RECIPE", 
		payload: id
	}
}