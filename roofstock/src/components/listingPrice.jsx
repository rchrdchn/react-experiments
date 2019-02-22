import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const ListingPrice = props => {
	const { price }	= props;
	return (
		<Fragment>
			<Typography gutterBottom variant="h5" component="h2">Listed at ${price}</Typography>
		</Fragment>
	)
}

export default ListingPrice;
