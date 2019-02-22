import React, { Component, Fragment } from 'react';
import Address from './address';
import GrossYield from './grossYield';
import ListingPrice from './listingPrice';
import MonthlyRent from './monthlyRent';
import PropertyImage from './propertyImage';
import Year from './year';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
};

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
			data => {
				this.setState({
					isLoaded: true,
					items: data
				})
			},
			//TODO: catch error
			error => {
	          	this.setState({
	            	isLoaded: true,
	            	error
	          	})
        	}
		)
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
							return `${physical.yearBuilt}`;
						}
					}

					function priceExist(){
						const price = item.financial;
						if(price !== null) {
							return price.listPrice.toFixed(2);
						}

					}

					function rentExist(){ 
						const rent = item.financial;
						if(rent !== null) {
							return rent.monthlyRent.toFixed(2);
						}
					}

					function grossYield(){
						if (rentExist() && priceExist()) {
							return `${((rentExist() * 12 / priceExist()) * 100).toFixed(2)}%`;
						}
					}
					
					return (
						<div key={index}>
							<Card>
								<CardActionArea style={styles.card}>
									<CardMedia
									style={styles.media}
									image={item.mainImageUrl}
									title="Contemplative Reptile"
									/>
									<CardContent>
										<Address primary={item.address.address1} secondary={`${item.address.city}, ${item.address.state} ${item.address.zip}`} />
										<ListingPrice price={priceExist()} />
										<Year year={physicalExist()} />
										<MonthlyRent rent={rentExist()} />
										<GrossYield grossYield={grossYield()} />
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
										View More
										</Button>
									</CardActions>
								</CardActionArea>
							</Card>
						</div>
					)
				})}
				</div>
			)
		}
	}
}

export default RoofContainer;
