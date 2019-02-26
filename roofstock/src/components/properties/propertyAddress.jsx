import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	primaryText: {
		fontSize: '16px',
		fontWeight: '500',
		marginBottom: '0'
	},
	secondaryText: {
		color: 'rgb(102, 102, 102)',
		fontSize: '14px',
		fontWeight: '400'
	}
}

const Address = props => {
	const { primary, secondary } = props;

	return (
		<Fragment>
			<Typography
				gutterBottom
				variant="subtitle1"
				align="left"
				style={styles.primaryText}
			>
			{primary}
			</Typography>
			<Typography
				gutterBottom
				variant="subtitle2"
				align="left"
				style={styles.secondaryText}
			>
			{secondary}
			</Typography>
		</Fragment>
	)
}

export default Address;
