import GroupAdapter from '../adapters/groupAdapter'

export function createGroup(params) {
	return function(dispatch) {
		GroupAdapter.createGroup(params) 
			.then(group => {
				dispatch({type: 'CREATE_GROUP', payload: group})
			})
	}
}