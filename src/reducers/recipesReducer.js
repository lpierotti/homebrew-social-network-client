export default function RecipesReducer(state = {currentRecipe: {}, allRecipes: []}, action) {
	switch(action.type) {
		case 'GET_ALL_RECIPES':
			console.log(action.payload)
			return Object.assign({}, state, {allRecipes: action.payload.recipes})
		case 'GET_RECIPE':
			const recipe = state.allRecipes.find(recipe => recipe.id === parseInt(action.payload, 10))
			console.log(recipe)
			return Object.assign({}, state, {currentRecipe: recipe})
		case 'GET_FROM_BACK':
			return Object.assign({}, state, {currentRecipe: action.payload.recipe})
		case 'RECIPE_SAVE':
			return Object.assign({}, state, {currentRecipe: action.payload.recipe})
		default:
			return state
	}
}