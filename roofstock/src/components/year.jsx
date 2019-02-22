import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Year = props => {
	const { year } = props;
	return (
		<Fragment>
			<Typography gutterBottom variant="h5" component="h2">Built {year}</Typography>
		</Fragment>
	)
}

export default Year;
