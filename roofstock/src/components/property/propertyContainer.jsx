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

		if(!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
					{properties.map((item, index) => {
						function getPhotos() {
							const photos = item.resources;
							if(photos !== null) {
								let images = photos.photos;
								return images.map(photo => {
									console.log(photo)
					        		return <img src={photo.urlSmall} alt={index} />
								})
							}
						}
					
						return (
					        <div key={index}>
					        	{getPhotos()}
					        </div>
							)
						})}
					<Link to="/">Home</Link>
				</div>
			)
		}
	}
}

export default PropertyContainer;
