import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	container: {
    	fontSize: '14px',
    	fontWeight: 400,
    	textAlign: 'left'
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
			{price ? `Listed at $${price}` : "Contact Us"}
			</Typography>
		</Fragment>
	)
}

export default PropertyPrice;
