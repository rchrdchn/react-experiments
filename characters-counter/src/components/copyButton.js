import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const CopyButton = props => {
	const { onClick } = props;

	return (
		<Fragment>
			<Button
				variant="outlined"
				onClick={onClick}
				style={{ marginRight: '70px' }}
			>
			Copy
			</Button>
		</Fragment>
	)
}

export default CopyButton;