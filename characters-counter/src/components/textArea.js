import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextArea = props => {
	const { onChange, myRef, value } = props;

	return (
		<div style={{ textAlign: 'center' }}>
			<TextField
				autoFocus
				label="Input"
				multiline
				rows="6"
				rowsMax="50"
				margin="normal"
				onChange={onChange}
				inputRef={myRef}
				value={value}
				variant="outlined"
	        />
		</div>
	)
}

export default TextArea;