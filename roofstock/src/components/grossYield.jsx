import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const GrossYield = props => {
	const { grossYield } = props;
	return (
		<Fragment>
			<Typography gutterBottom variant="h5" component="h2">Gross Yield: {grossYield}</Typography>
		</Fragment>
	)
}

export default GrossYield;
