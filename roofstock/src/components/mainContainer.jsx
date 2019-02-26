import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import PropertiesCard from './properties/propertiesCard';
import PropertiesList from './properties/propertiesList';
import PropertyContainer from './property/propertyContainer';

const styles = {
	loadingTex: {
		color: "rgb(241, 115, 34)",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}
}

class RoofContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			items: []
		}
	}

	componentDidMount() {
		this.getProperties();
	}

	getProperties() {
		const API_URL = "http://dev1-sample.azurewebsites.net/properties.json";

		fetch(API_URL)
		.then(res => res.json())
		.then(
			data => { this.setState({ isLoaded: true, items: data })},
			error => { this.setState({ isLoaded: true, error })}
		)
	}

	render() {
		const { isLoaded, items } = this.state;

		if(!isLoaded) {
			return (
				<div>
					<h2 style={styles.loadingTex}>Loading...</h2>
				</div>
			)
		} else {
			return (
				<div>
					<Navbar />
					<Route path="/" exact render={
						props => <PropertiesCard {...props} items={items} />
					} />
					<Route path="/property/:id" component={
						props => <PropertyContainer {...props} items={items} />
					} />
					<Route path="/list" exact render={
						props => <PropertiesList {...props} items={items} />
					} />
					<Footer />
				</div>
			)
		}
	}
}

export default RoofContainer;
