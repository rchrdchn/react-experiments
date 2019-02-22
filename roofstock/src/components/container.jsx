import React, { Component } from 'react';
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
			items: [{
				image: '',
				primaryAddress: '',
				secondaryAddress: '',
				year: '',
				price: '',
				rent: '',
				grossYield: ''
			}]
		}
	}
	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		const API_URL = "http://dev1-sample.azurewebsites.net/properties.json";
		const apiRequest = await fetch(API_URL);
		const response = await apiRequest.json();
		const propertyData = response.properties;

		propertyData.map(data => {
			this.setState({
				items: [{
					image: !null && data.mainImageUrl,
					primaryAddress: !null && data.address.address1,
					secondaryAddress: !null && `${data.address.city}, ${data.address.state} ${data.address.zip}`,
					year: null && data.physical.yearBuilt,
					price: null && data.financial.listPrice.toFixed(2),
					rent: null && data.financial.monthlyRent.toFixed(2),
					// grossYield: !null && rent * 12 / price
				}]
			})
		})
	}

	render() {
		const { items } = this.state;
		return (
			<div>
				{items.map((item, index) => (
					console.log(item)
					// <div key={index}>
					// 	<PropertyImage source={item.image} />
					// 	<Address primary={item.primaryAddress} secondary={item.secondaryAddress} />
					// 	<Year year={item.year} />
					// 	<ListingPrice price={item.price} />
					// 	<Rent rent={item.rent} />
					// 	<GrossYield grossYield={item.grossYield} />
					// </div>
				))}
			</div>
		)	
	}
}

export default RoofContainer;
