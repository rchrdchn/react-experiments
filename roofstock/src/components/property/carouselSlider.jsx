import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    slide: {
        marginRight: "auto",
        marginLeft: "auto",
        display: "none",
        maxWidth: "900px",
        listStyleType: "none",
        textAlign: "center"
    },
    slideActive: {
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "900px",
        listStyleType: "none",
        textAlign: "center",
        display: "block"
    },
    slideImage: {
        height: '200px'
    }
}

class CarouselSlider extends Component {
    render() {
        const { index, activeIndex, slide, filename } = this.props;
        const activeImage = (index === activeIndex ? styles.slideActive : styles.slide);

        return (
            <li style={activeImage}>
                <img src={slide} alt={filename} style={styles.slideImage} />
            </li>
        );
    }
}

export default CarouselSlider;
