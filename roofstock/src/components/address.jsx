import React from 'react';

const Address = props => {
	const { primary, secondary } = props;
	return (
		<div>
			<h1>{primary}</h1>
			<p>{secondary}</p>
		</div>
	)
}

export default Address;
