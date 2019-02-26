import React, { Component } from 'react';
import CarouselLeftArrow from './carouselLeftArrow'
import CarouselRightArrow from './carouselRightArrow'
import CarouselSlider from './carouselSlider'
import Typography from '@material-ui/core/Typography';
import NoImage from '../../images/empty-photo.png';

const styles = {
	container: {
		position: "relative",
		marginTop: "50px"
	},
	addressText: {
		marginTop: "20px"
	},
	noImage: {
		textAlign: "center"
	}
}

class Carousel extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeIndex: 0
		};
		this.previousSlide = this.previousSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
	}

	previousSlide(e) {
		e.preventDefault();
		let { slides } = this.props;
		this.checkSlidesLength(slides, true, false);
	}

	nextSlide(e) {
		e.preventDefault();
		let { slides } = this.props;
		this.checkSlidesLength(slides, false, true);
	}

	checkSlidesLength(images, previous = false, next = false) {
		let index = this.state.activeIndex;
		const URLPath = this.props.path.params.id;
		images.map(item => {
			if (item.id == URLPath) {
				if (previous) {
					const slidesLength = item.resources.photos.length;
					if (index < 1) index = slidesLength;
					--index;
				} else if (next) {
					const slidesLength = item.resources.photos.length - 1;
					if (index === slidesLength) index = -1;
					++index;
				}
			}
			this.setState({ activeIndex: index });	
		})
	}

  	renderImages(properties) {
  		const URLPath = this.props.path.params.id;
		const result = properties.map(item => {
			if (item.id == URLPath) {
				const images = item.resources;
				if (images.photos.length === 0) {
					return this.renderNoImage();
				} else if (!!images) {
					const image = images.photos;
					return image.map((photo, index) => {
						return this.renderImageContent(photo, index);
					})
				}
			}
		})
		return result;
	}

	renderImageContent(image, index) {
		return <CarouselSlider key={index} index={index} activeIndex={this.state.activeIndex}
            	slide={image.urlMedium} path={this.props.match} filename={image.filename} />;
	}

	renderNoImage() {
		return (
			<div style={styles.noImage}>
				<img src={NoImage} alt="No Images Available" />
			</div>
		)
	}

	renderAddress(properties) {
		const URLPath = this.props.path.params.id;
		const result = properties.map((item, index) => {
			if (item.id == URLPath) {
				const addresses = item.address;
				return this.renderAddressContent(addresses, index);
			}
		})
		return result;
	}

	renderAddressContent(address, index) {
		return !!address &&
			<div key={index}>
				<Typography align="center" gutterBottom style={styles.addressText} variant="h5">
				{address.address1}
				</Typography>
			</div>
	}

	render() {
		const { slides } = this.props;

		return (
			<div style={styles.container}>
				<CarouselLeftArrow onClick={e => this.previousSlide(e)} />
				{this.renderImages(slides)}
				<CarouselRightArrow onClick={e => this.nextSlide(e)} />
				{this.renderAddress(slides)}
			</div>
		);
	}
}


export default Carousel;
