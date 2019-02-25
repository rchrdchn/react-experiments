import React from 'react';
import PropTypes from 'prop-types';

const CarouselRightArrow = props => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={this.props.onClick}
        >
        <span className="fa fa-2x fa-angle-right" />
        </a>
    )
}

export default CarouselRightArrow;
