export default class BreweryAdapter {

	static getBreweries(locationParams) {
		const locationJSON = JSON.stringify(locationParams)
		const token = localStorage.getItem("jwt")
		return fetch('http://localhost:3000/api/v1/breweries', {
			method: 'POST',
			body: locationJSON,
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
	}
}