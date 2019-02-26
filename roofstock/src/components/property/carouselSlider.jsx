import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    slide: {
        display: "none",
        listStyleType: "none",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "900px",
        textAlign: "center"
    },
    slideActive: {
        display: "block",
        listStyleType: "none",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "900px",
        textAlign: "center"
    },
    slideImage: {
        border: "2px solid rgb(221, 221, 221)",
        borderRadius: "5px",
        boxShadow: "2px 2px 4px 1px rgba(108, 108, 108, 0.75)",
        height: "425px"
    }
}

const CarouselSlider = props => {
        const { index, activeIndex, slide, filename } = props;
        const activeImage = (index === activeIndex ? styles.slideActive : styles.slide);

        return (
            <li style={activeImage}>
                <img src={slide} alt={filename} style={styles.slideImage} />
            </li>
        )
}

export default CarouselSlider;
