import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './carousel';

const PropertyContainer = ({ match, items }) => {
	const { properties } = items;
	
	return (
		<div>
			<Carousel slides={properties} path={match} />
		</div>
	)
}

export default PropertyContainer;
