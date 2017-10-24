import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import { Loader } from 'semantic-ui-react'


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
		console.log(this.state, 'PROPS', this.props)
		if (this.state.lat === 0) {
			return (
				<div>
					<Loader active={true} size='large'>Loading</Loader>
				</div>
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
						width: '400px',
						maxHeigth: '50%'
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
						/>
					)
				})}
				<InfoWindow
		          marker={this.state.activeMarker}
		          visible={this.state.showingInfoWindow}>
		            <div>
		              <h3>{this.state.selectedPlace.name}</h3>
		              <p>{this.state.selectedPlace.description}</p>
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
