import React, { Component } from 'react';
import CarouselLeftArrow from './carouselLeftArrow'
import CarouselRightArrow from './carouselRightArrow'
import CarouselSlider from './carouselSlider'
import Typography from '@material-ui/core/Typography';

const styles = {
	list: {
		padding: 0,
		margin: 0,
		listStyleType: "none"
	},
	carousel: {
		position: "relative"
	},
	address: {
		marginTop: "20px"
	}
}

// Carousel wrapper component
class Carousel extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeIndex: 0
		};
		this.goToSlide = this.goToSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);
	}

	goToSlide(index) {
		this.setState({ activeIndex: index });
		console.log("goToSlide---1")
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
		console.log("goToPrevSlide---2", index)

		this.setState({ activeIndex: index });
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
		console.log("goToNextSlide---3", index, "slidesLength: ", slidesLength, "slides: ", slides)

		this.setState({ activeIndex: index });
	}

  	renderImages(properties) {
  		const URLPath = this.props.path.params.id;
		const result = properties.map(item => {
			if (item.id == URLPath) {
				const images = item.resources;
				if (images !== null) {
					const image = images.photos;
					return image.map((photo, index) => {
						return (
							<CarouselSlider
				              key={index}
				              index={index}
				              activeIndex={this.state.activeIndex}
				              slide={photo.urlSmall}
				              path={this.props.match}
				              filename={photo.filename}
				            />
						)
					})
				}
			}
		})
		return result;
	}

	renderAddress(properties) {
		const URLPath = this.props.path.params.id;
		const result = properties.map((item, index) => {
			if (item.id == URLPath) {
				const addresses = item.address;
				if (addresses !== null) {
					return (
						<div key={index}>
							<Typography
								align="center"
								gutterBottom
								style={styles.address}
								variant="h5"
							>
							{addresses.address1}
							</Typography>
						</div>
					)
				}
			}
		})
		return result;
	}

	render() {
		const { slides } = this.props;

		return (
			<div style={styles.carousel}>
				<CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
				{this.renderImages(slides)}
				<CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
				{this.renderAddress(slides)}
			</div>
		);
	}
}


export default Carousel;
