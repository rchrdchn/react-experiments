import React from 'react';
import PropTypes from 'prop-types';

const CarouselLeftArrow = props => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={this.props.onClick}
        >
        <span className="fa fa-2x fa-angle-left" />
        </a>
    )
}

export default CarouselLeftArrow;
