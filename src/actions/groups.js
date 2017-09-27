import GroupAdapter from '../adapters/groupAdapter'

export function createGroup(params) {
	return function(dispatch) {
		GroupAdapter.createGroup(params) 
			.then(group => {
				dispatch({type: 'CREATE_GROUP', payload: group})
			})
	}
}

export function getGroupInfo(id) {
	return function(dispatch) {
		GroupAdapter.getGroupInfo(id)
			.then(group => {
				dispatch({type: 'GET_GROUP_INFO', payload: group})
			})
	}
}