import React from 'react';

const Address = props => {
	const { primary, secondary } = props;
	return (
		<div>
			<h3>{primary}</h3>
			<p>{secondary}</p>
		</div>
	)
}

export default Address;
