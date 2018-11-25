import React from 'react';

const ErrorMessage = (props) => {
	return (
		<div className="error-message">
			<h2>{props.text}</h2>
		</div>
	);
}

export default ErrorMessage;