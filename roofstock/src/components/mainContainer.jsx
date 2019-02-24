import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropertiesContainer from './properties/propertiesContainer';
import PropertyContainer from './property/propertyContainer';

class RoofContainer extends Component {
	render() {
		return (
			<BrowserRouter>
			<div>
				<Link to="/">Home</Link>
				<br />
				<Link to="/properties">Properties</Link>
				<Route exact path="/" render={() => <PropertiesContainer />} />
				<Route path="/properties" render={props => <PropertyContainer />} />
			</div>
			</BrowserRouter>
		)
	}
}

export default RoofContainer;
