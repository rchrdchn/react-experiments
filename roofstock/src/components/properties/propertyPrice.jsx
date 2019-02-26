import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	container: {
    	fontSize: '14px',
    	fontWeight: 400,
    	textAlign: 'left'
	},
	noInfo: {
		backgroundColor: "rgb(241, 115, 34)",
		border: "2px solid rgb(241, 115, 34)",
		borderRadius: "5px",
		color: "#FFFFFF",
		display: "inline-block",
		fontWeight: 500,
		marginTop: "10px",
		padding: "4px 8px"
	}
}

const PropertyPrice = props => {
	const { price }	= props;

	return (
		<Fragment>
			<Typography
				gutterBottom
				variant="subtitle1"
				style={price ? styles.container : styles.noInfo}
			>
			{price ? `Listed at ${price}` : "Contact Us"}
			</Typography>
		</Fragment>
	)
}

export default PropertyPrice;
