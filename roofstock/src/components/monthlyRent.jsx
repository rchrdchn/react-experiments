import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Rent = props => {
	const { rent } = props;
	return (
		<Fragment>
			<Typography gutterBottom variant="h5" component="h2">Rent ${rent}</Typography>
		</Fragment>
	)
}

export default Rent;
