import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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

	render() {
		const { items, isLoaded } = this.state;
		const { properties } = items;

		const images =
			isLoaded && properties.map((item, index) => {
				const images = item.resources;
					if (images !== null) {
						let image = images.photos;
						return image.map(photo => {
							return <img src={photo.urlSmall} alt={index} key={index} />;
						})
					}
				})

		if(!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
				{images}
				</div>
			)
		}
	}
}

export default PropertyContainer;
