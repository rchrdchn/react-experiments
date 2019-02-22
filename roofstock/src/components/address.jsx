import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Address = props => {
	const { primary, secondary } = props;
	return (
		<Fragment>
			<Typography gutterBottom variant="h5" component="h2">{primary}</Typography>
			<Typography gutterBottom variant="h5" component="h2">{secondary}</Typography>
		</Fragment>
	)
}

export default Address;
