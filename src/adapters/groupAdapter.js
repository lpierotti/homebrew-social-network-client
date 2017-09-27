export default class GroupAdapter {

	static createGroup(groupParams) {
		const groupJSON = JSON.stringify(groupParams)
		const token = localStorage.getItem("jwt")
		return fetch('http://localhost:3000/api/v1/groups', {
			method: 'POST',
			body: groupJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getGroupInfo(id) {
		const token = localStorage.getItem("jwt")
		return fetch(`http://localhost:3000/api/v1/group/${id}`, {
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