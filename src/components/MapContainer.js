import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';


class MapContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {
			lat: 0,
			lng: 0
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => (this.setState({lat:position.coords.latitude, lng: position.coords.longitude})))
	}

	render(){
		console.log(this.state)
		return (
			<Map google={this.props.google}
				zoom={this.props.zoom}
				initialCenter={{
					lat: this.state.lat,
					lng: this.state.lng
				}}
			/>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyDvg8oPEvdVVQpUY2KZ_-vDEkSzHaYwCQk")
})(MapContainer)
