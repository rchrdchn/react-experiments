import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropertyContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			items: []
		}
	}
	
	componentDidMount() {
		const API_URL = "http://dev1-sample.azurewebsites.net/properties.json";

		fetch(API_URL)
		.then(res => res.json())
		.then(
			data => {
				this.setState({
					isLoaded: true,
					items: data
				})
			},
			//TODO: catch error
			error => {
	          	this.setState({
	            	isLoaded: true,
	            	error
	          	})
        	}
		)
	}

	renderImages(properties) {
		const result = properties.map((item) => {
			const images = item.resources;
			if (images !== null) {
				const image = images.photos;
				return image.map((photo, index) => {
					return <img src={photo.urlSmall} alt={index} key={index} />;
				})
			}
		})
		return result;
	}

	renderAddress(properties) {
		const result = properties.map((item, index) => {
			const addresses = item.address;
			if (addresses !== null) {
				return <p key={index}>{addresses.address1}</p>
			}
		})
		return result;
	}

	render() {
		const { items, isLoaded } = this.state;
		const { properties } = items;

		if(!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
					{this.renderImages(properties)}
					{this.renderAddress(properties)}
				</div>
			)
		}
	}
}

export default PropertyContainer;
