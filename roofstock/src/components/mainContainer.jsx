import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from './navbar';
import Footer from './footer';
import PropertiesContainer from './properties/propertiesContainer';
import PropertyContainer from './property/propertyContainer';

class RoofContainer extends Component {

	render() {
		return (
			<BrowserRouter>
			<div>
				<Navbar />
				<Route path="/" exact component={PropertiesContainer} />
				<Route path="/property/:id" exact component={PropertyContainer} />
				<Footer />
			</div>
			</BrowserRouter>
		)
	}
}

export default RoofContainer;
