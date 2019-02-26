import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
	arrowLeft: {
	    color: "rgb(108, 108, 108)",
	    cursor: "pointer",
	    display: "block",
		left: "20%",
	    position: "absolute",
	    transform: "translateY(-50%)",
	    top: "50%"
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
