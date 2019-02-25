import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    slider: {
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'none',
        maxWidth: '900px',
        listStyleType: 'none',
        textAlign: 'center'

        "&--active": {
            display: 'block'
        }
    }
}

const CarouselSlider = props => {
    return (
        <li
            className={
                this.props.index == this.props.activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
        >
        <p className="carousel-slide__content">{this.props.slide.content}</p>
        </li>
    )
}

export default CarouselSlider;
