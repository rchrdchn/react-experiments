import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	primary: {
		fontSize: '14px',
		fontWeight: '500',
		marginBottom: '0'
	},
	secondary: {
		color: 'rgb(102, 102, 102)',
		fontSize: '12px',
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
				style={styles.primary}
			>
			{primary}
			</Typography>
			<Typography
				gutterBottom
				variant="subtitle2"
				align="left"
				style={styles.secondary}
			>
			{secondary}
			</Typography>
		</Fragment>
	)
}

export default Address;
