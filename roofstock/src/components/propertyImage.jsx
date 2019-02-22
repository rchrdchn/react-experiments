import React from 'react';

const PropertyImage = props => {
	const { source, text } = props;
	return (
		<div>
			<img src={source} alt={text} />
		</div>
	)
}

export default PropertyImage;
