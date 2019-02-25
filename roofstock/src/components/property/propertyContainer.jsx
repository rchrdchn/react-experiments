import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PropertyContainer = ({ match, items }) => {
	const { properties } = items;
	const URLPath = match.params.id;

	// TODO: Refactor to one function that works for both IMAGES AND ADDRESS
	const renderImages = (properties) => {
		const result = properties.map(item => {
			if (item.id == URLPath) {
				const images = item.resources;
				if (images !== null) {
					const image = images.photos;
					return image.map((photo, index) => {
						return <img src={photo.urlSmall} alt={index} key={index} />
					})
				}
			}
		})
		return result;
	}

	const renderAddress = (properties) => {
		const result = properties.map((item, index) => {
			if (item.id == URLPath) {
				const addresses = item.address;
				if (addresses !== null) {
					return <p key={index}>{addresses.address1}</p>
				}
			}
		})
		return result;
	}

	return (
		<div>
			{renderImages(properties)}
			{renderAddress(properties)}
		</div>
	)
}

export default PropertyContainer;
