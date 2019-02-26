import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	fontWeight: {
		fontSize: '14px',
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
				style={styles.fontWeight}
			>
			{rent && `Rent: ${rent} |`}  {grossYield && `Gross Yield: ${grossYield}`}
			</Typography>
			<Typography
				gutterBottom
				variant="subtitle2"
				align="left"
				style={styles.fontWeight}
			>
			 {year && `Built: ${year}`}
			</Typography>
		</Fragment>
	)
}

export default PropertyDetails;
