import React, { Component } from 'react';

const styles = {
	list: {
		padding: 0,
		margin: 0,
		listStyleType: "none"
	},
	carousel: {
		position: "relative"
	},
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
		display: "block",
	},
	// Content of slides
	content: {
	    marginBottom: "19px",
	    fontFamily: "'Open Sans', 'Trebuchet MS', 'sans-serif'",
	    fontSize: "16px"
	},
	// Carousel arrows
	arrowRight: {
	    position: "absolute",
	    top: "50%",
	    display: "block",
	    color: "#111",
	    cursor: "pointer",
	    opacity: ".75",
	    transform: "translateY(-50%)",
	    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",
		right: "32px",

	    "&:focus": {
	        outline: 0,
	    },

	    "&:hover": {
	        opacity: ".5",
	    }
	},
	arrowRight: {
	    position: "absolute",
	    top: "50%",
	    display: "block",
	    color: "#111",
	    cursor: "pointer",
	    opacity: ".75",
	    transform: "translateY(-50%)",
	    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",
		left: "32px",

		"&:focus": {
	        outline: 0,
	    },

	    "&:hover": {
	        opacity: ".5",
	    }
	}
}

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        onClick={this.props.onClick}
        style={styles.arrowLeft}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        onClick={this.props.onClick}
        style={styles.arrowRight}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        style={
          this.props.index == this.props.activeIndex
            ? styles.slideActive
            : styles.slide
        }
      >
        <p style={styles.content}>{this.props.slide.content}</p>
      </li>
    );
  }
}

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

      </div>
    );
  }
}


export default Carousel;
