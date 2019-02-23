import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropertyAddress from './propertyAddress';
import PropertyPrice from './propertyPrice';
import PropertyDetails from './propertyDetails';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: '640px',
  },
  media: {
    height: '150px',
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
					<Grid container spacing={24}>
					{properties.map((item, index) => {
						function yearExist() {
							const physical = item.physical;
							if(physical !== null) {
								return `${physical.yearBuilt}`;
							}
							return 'not available'
						}

						function priceExist(){
							const price = item.financial;
							if(price !== null) {
								const listedPrice = price.listPrice.toFixed(2);
								return listedPrice;
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
					        <Grid item key={index} md={3}>
					          	<Paper>
									<Card>
										<CardActionArea style={styles.card}>
											<CardMedia
												style={styles.media}
												image={item.mainImageUrl}
												title={item.address.address1}
											/>
											<CardContent>
												<PropertyAddress
													primary={item.address.address1}
													secondary={`${item.address.city}, ${item.address.state}`}
												/>
												<PropertyPrice price={priceExist()} />
												<PropertyDetails
													rent={rentExist()}
													grossYield={grossYield()}
													year={yearExist()}
												/>
											</CardContent>
										</CardActionArea>
									</Card>
								</Paper>
					        </Grid>
							)
						})}
					</Grid>
				</div>
			)
		}
	}
}

export default RoofContainer;
