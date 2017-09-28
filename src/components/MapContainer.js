import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';


class MapContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {
			lat: 0,
			lng: 0,
			breweries: []
		}
	}

	componentWillMount() {
		navigator.geolocation.getCurrentPosition((position) => (this.setState({lat:position.coords.latitude, lng: position.coords.longitude})))
	}

	fetchBreweries = () => {

		fetch(`http://api.brewerydb.com/v2/search/geo/point?lat=${this.state.lat}&lng=${this.state.lng}&key=569868ef31103ae0d7db521990f1d8df`)
			.then(res => res.json())
			.then(json => this.setState({breweries: json.data}))
	}

	render(){
		console.log(this.state)
		if (this.state.lat === 0) {
			return <div></div>
		}else {
			return (
				<Map google={this.props.google}
					zoom={this.props.zoom}
					onReady={this.fetchBreweries}
					initialCenter={{
						lat: this.state.lat,
						lng: this.state.lng
					}}
				>
				{this.state.breweries.map(brewery => {
					<Marker
						name={brewery.brewery.name}
						position={{lat: brewery.latitude, lng: brewery.longitude}}
					/>
				})}
				</Map>
			)
		}
		
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyDvg8oPEvdVVQpUY2KZ_-vDEkSzHaYwCQk")
})(MapContainer)
