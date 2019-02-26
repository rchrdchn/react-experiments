import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
	typography: {
		fontSize: '16px',
		fontWeight: 400
	}
}
const PropertyDetails = props => {
	const { rent, grossYield, year } = props;

	return (
		<Fragment>
			<Typography
				gutterBottom
				variant="subtitle2"
				align="left"
				style={styles.typography}
			>
			{rent && `Rent: ${rent} |`}  {grossYield && `Gross Yield: ${grossYield}`}
			</Typography>
			<Typography
				gutterBottom
				variant="subtitle2"
				align="left"
				style={styles.typography}
			>
			 {year && `Built: ${year}`}
			</Typography>
		</Fragment>
	)
}

PropertyDetails.propTypes = {
	rent: PropTypes.string,
	grossYield: PropTypes.string,
	year: PropTypes.number
}

export default PropertyDetails;
