import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import PropertiesContainer from './properties/propertiesContainer';
import PropertyContainer from './property/propertyContainer';

const styles = {
	loadingText: {
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
					<h2 style={styles.loadingText}>Loading...</h2>
				</div>
			)
		} else {
			return (
				<BrowserRouter>
				<div>
					<Navbar />
					<Route path="/" exact render={
						props => <PropertiesContainer {...props} items={items} />
					} />
					<Route path="/property/:id" exact component={
						props => <PropertyContainer {...props} items={items} />
					} />
					<Footer />
				</div>
				</BrowserRouter>
			)
		}
	}
}

export default RoofContainer;
