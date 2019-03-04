import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	text: {
		display: 'inline-block',
		textAlign: 'right'
	}
}

const Counter = props => {
	const { count } = props;

	return (
		<Fragment>
			<Typography
				counter={count}
				gutterBottom
				style={styles.text}
				variant="subtitle1"
			>
			Counter: {count}
			</Typography>
		</Fragment>
	)
}

export default Counter;