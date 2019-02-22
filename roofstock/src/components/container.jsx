import React, { Component, Fragment } from 'react';
import Address from './address';
import GrossYield from './grossYield';
import ListingPrice from './listingPrice';
import Rent from './monthlyRent';
import PropertyImage from './propertyImage';
import Year from './year';

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
		.then(data => {
			this.setState({
				isLoaded: true,
				items: data
			})
		})
	}


	render() {
		const { items, isLoaded } = this.state;
		const { properties } = items;

		
		if(!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
				{properties.map((item, index) => {
					return (
						<div key={index}>
							<PropertyImage source={item.mainImageUrl} />
							<Address primary={item.address.address1} secondary={`${item.address.city}; ${item.address.state} ${item.address.zip}`} />
						</div>
					)
				})}
				</div>
			)
		}
	}
}

export default RoofContainer;
