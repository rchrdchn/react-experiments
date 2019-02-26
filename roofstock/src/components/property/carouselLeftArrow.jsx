import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
	arrowLeft: {
	    position: "absolute",
	    top: "50%",
	    display: "block",
	    color: "rgb(108, 108, 108)",
	    cursor: "pointer",
	    transform: "translateY(-50%)",
		left: "30%"
	}
}

const CarouselLeftArrow = props => {
	return (
		<Link
			onClick={props.onClick}
			to="#"
			style={styles.arrowLeft}
		>
			<span className="fa fa-2x fa-angle-left" />
		</Link>
	)
}

export default CarouselLeftArrow;
