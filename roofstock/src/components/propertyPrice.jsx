import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	container: {
		position: 'absolute',
		top: '63%',
    	right: '10px',
    	fontWeight: 500
	}
}

const PropertyPrice = props => {
	const { price }	= props;

	return (
		<Fragment>
			<Typography
				gutterBottom
				variant="subtitle1"
				style={styles.container}
			>
			{price ? `$${price}` : "Contact Us"}
			</Typography>
		</Fragment>
	)
}

export default PropertyPrice;
