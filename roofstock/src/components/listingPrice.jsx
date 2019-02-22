import React from 'react';

const ListingPrice = props => {
	const { price }	= props;
	return (
		<div>
			<h1>{price}</h1>
		</div>
	)
}

export default ListingPrice;
