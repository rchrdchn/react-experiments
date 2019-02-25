import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

class CarouselLeftArrow extends Component {
	render() {
		return (
			<Link
				onClick={this.props.onClick}
				to="#"
				style={styles.arrowLeft}
			>
				<span className="fa fa-2x fa-angle-left" />
			</Link>
		);
	}
}

export default CarouselLeftArrow;
