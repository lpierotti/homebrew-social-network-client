import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';



class MapContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {
			lat: 0,
			lng: 0,
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		}
	}

	componentWillMount() {
		navigator.geolocation.getCurrentPosition((position) => (this.setState({lat:position.coords.latitude, lng: position.coords.longitude})))
	}

	handleMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})
	}

	render(){
		if (this.state.lat === 0) {
			return (
					null
			)
		} else {
			return (
				<Map google={this.props.google}
					zoom={10}
					initialCenter={{
						lat: this.state.lat,
						lng: this.state.lng
					}}
					style={{
						width: '390px',
						height: '600px'
					}}
				>
				{this.props.events.map((event, index) => {
					return (
						<Marker
							key={index}
							name={event.name}
							position={{lat: event.lat, lng: event.lng}}
							onClick={this.handleMarkerClick}
							description={event.description}
							number={event.number}
							street={event.street}
							city={event.city}
							state={event.state}
						/>
					)
				})}
				<InfoWindow
		          marker={this.state.activeMarker}
		          visible={this.state.showingInfoWindow}>
		            <div>
		              <h3>{this.state.selectedPlace.name}</h3>
		              <p>{this.state.selectedPlace.description}</p>
		              <p>{this.state.selectedPlace.number} {this.state.selectedPlace.street}, {this.state.selectedPlace.city} {this.state.selectedPlace.state}</p>
		            </div>
		        </InfoWindow>
				</Map>
			)
		}
		
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyDvg8oPEvdVVQpUY2KZ_-vDEkSzHaYwCQk")
})(MapContainer)
