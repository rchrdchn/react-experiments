import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
	arrowRight: {
	    color: "rgb(108, 108, 108)",
	    cursor: "pointer",
	    display: "block",
	    position: "absolute",
		right: "20%",
	    transform: "translateY(-50%)",
	    top: "50%"
	}
}

const CarouselRightArrow = props => {
	return (
		<Link
			onClick={props.onClick}
			to="#"
			style={styles.arrowRight}
		>
			<span className="fa fa-2x fa-angle-right" />
		</Link>
	)
}

export default CarouselRightArrow;
