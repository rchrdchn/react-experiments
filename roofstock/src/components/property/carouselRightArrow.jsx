import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
	arrowRight: {
	    position: "absolute",
	    top: "50%",
	    display: "block",
	    color: "rgb(221, 221, 221)",
	    cursor: "pointer",
	    transform: "translateY(-50%)",
		right: "30%"
	}
}

class CarouselRightArrow extends Component {
	render() {
		return (
			<Link
				onClick={this.props.onClick}
				to="#"
				style={styles.arrowRight}
			>
				<span className="fa fa-2x fa-angle-right" />
			</Link>
		);
	}
}

export default CarouselRightArrow;
