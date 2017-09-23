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

export function getFromBackend(id) {
	return function(dispatch) {
		RecipeAdapter.getFromBackend(id) 
			.then(recipe => {
				dispatch({type: 'GET_FROM_BACK', payload: recipe})
			})
	}
}