import BreweryAdapter from '../adapters/breweryAdapter'

export function getBreweries(location) {
	return function(dispatch) {
		BreweryAdapter.getBreweries(location) 
			.then(breweries => {
				dispatch({type: 'GET_BREWERIES', payload: breweries})
			})
	}
}