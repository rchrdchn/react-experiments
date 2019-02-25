import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './carousel';
// Data for carousel
const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];

const PropertyContainer = ({ match, items }) => {
	const { properties } = items;
	const URLPath = match.params.id;

	// TODO: Refactor to one function that works for both IMAGES AND ADDRESS
	const renderImages = (properties) => {
		const result = properties.map(item => {
			if (item.id == URLPath) {
				const images = item.resources;
				if (images !== null) {
					const image = images.photos;
					return image.map((photo, index) => {
						return <img src={photo.urlSmall} alt={index} key={index} />
					})
				}
			}
		})
		return result;
	}

	const renderAddress = (properties) => {
		const result = properties.map((item, index) => {
			if (item.id == URLPath) {
				const addresses = item.address;
				if (addresses !== null) {
					return <p key={index}>{addresses.address1}</p>
				}
			}
		})
		return result;
	}

	return (
		<div>
			<Carousel slides={carouselSlidesData} />
			{renderImages(properties)}
			{renderAddress(properties)}
		</div>
	)
}

export default PropertyContainer;
