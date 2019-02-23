import React, { Fragment } from 'react';

const PropertyImage = props => {
	const { source, text } = props;
	return (
		<Fragment>
			<img src={source} alt={text} />
		</Fragment>
	)
}

export default PropertyImage;
