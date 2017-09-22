export default function RecipesReducer(state = {currentRecipe: {}, allRecipes: []}, action) {
	switch(action.type) {
		case 'GET_ALL_RECIPES':
			return Object.assign({}, state, {allRecipes: action.payload.recipes})
		case 'GET_RECIPE':
			const recipe = state.allRecipes.find(recipe => recipe.id === parseInt(action.payload))
			
			return Object.assign({}, state, {currentRecipe: recipe})
		default:
			return state
	}
}