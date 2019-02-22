import React from 'react';

const Carousel = props => {
	const { source, text } = props;
	return (
		<div>
			<img src={source} alt={text} />
		</div>
	)
}

export default Carousel;
