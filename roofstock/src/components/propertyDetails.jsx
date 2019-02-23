import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	fontWeight: {
		fontWeight: 300
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
				style={styles.fontWeight}
			>
			Rent: ${rent} | Gross Yield: {grossYield} | {year}
			</Typography>
		</Fragment>
	)
}

export default PropertyDetails;
