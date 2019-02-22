import React, { Component, Fragment } from 'react';
import Address from './address';
import GrossYield from './grossYield';
import ListingPrice from './listingPrice';
import MonthlyRent from './monthlyRent';
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
					function physicalExist() {
						const physical = item.physical;
						if(physical !== null) {
							return `built: ${physical.yearBuilt}`;
						}
					}

					function priceExist(){
						const price = item.financial;
						if(price !== null) {
							return price.listPrice;
						}

					}

					function rentExist(){ 
						const rent = item.financial;
						if(rent !== null) {
							return rent.monthlyRent;
						}
					}

					function grossYield(){
						if (rentExist() && priceExist()) {
							return `gross yield: ${((rentExist() * 12 / priceExist()) * 100).toFixed(2)}%`;
						}
					}
					
					return (
						<div key={index}>
							<PropertyImage source={item.mainImageUrl} />
							<Address primary={item.address.address1} secondary={`${item.address.city}; ${item.address.state} ${item.address.zip}`} />
							<Year year={physicalExist()} />
							<ListingPrice price={priceExist()} />
							<MonthlyRent rent={rentExist()} />
							<GrossYield grossYield={grossYield()} />
						</div>
					)
				})}
				</div>
			)
		}
	}
}

export default RoofContainer;
