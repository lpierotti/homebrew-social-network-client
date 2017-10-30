import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import { connect } from 'react-redux'
import { getBreweries } from '../actions/breweries'
import { Loader } from 'semantic-ui-react'
import config from '../config.js'


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

	fetchBreweries = () => {
		this.props.getBreweries({lat: this.state.lat, lng: this.state.lng})
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
					zoom={12}
					onReady={this.fetchBreweries}
					initialCenter={{
						lat: this.state.lat,
						lng: this.state.lng
					}}
				>
				{this.props.breweries.map((brewery, index) => {
					return (
						<Marker
							key={index}
							name={brewery.name}
							position={{lat: brewery.lat, lng: brewery.lng}}
							onClick={this.handleMarkerClick}
							image={brewery.image}
							description={brewery.description}
							phone={brewery.phone}
							website={brewery.website}
						/>
					)
				})}
				<InfoWindow
		          marker={this.state.activeMarker}
		          visible={this.state.showingInfoWindow}>
		            <div>
		              <h3>{this.state.selectedPlace.name}</h3>
		              <img src={this.state.selectedPlace.image} alt=''/>
		              <p>{this.state.selectedPlace.phone}</p>
		              <p>{this.state.selectedPlace.description}</p>
		              <p>{this.state.selectedPlace.website}</p>
		            </div>
		        </InfoWindow>
				</Map>
			)
		}
		
	}
}

function mapStateToProps(state) {
	return {
		breweries: state.breweries.breweries
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getBreweries: (location) => {dispatch(getBreweries(location))}
	}
}

export default GoogleApiWrapper({
	apiKey: (config.googleKey)
})(connect(mapStateToProps, mapDispatchToProps)(MapContainer))
