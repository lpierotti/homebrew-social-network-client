export default class EventAdapter {

	static createEvent(params) {
		const eventJSON = JSON.stringify(params)
		const token = localStorage.getItem("jwt")
		return fetch(`http://localhost:3000/api/v1/event/new`, {
			method: 'POST',
			body: eventJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getEvents(id) {
		const token = localStorage.getItem("jwt")
		return fetch(`http://localhost:3000/api/v1/group/${id}/events`, {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static addGuest(id) {
		const token = localStorage.getItem("jwt")
		return fetch(`http://localhost:3000/api/v1/event/${id}/update`, {
			method: 'POST',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}

	static getEvent(id) {
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