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
import NoImage from '../images/empty-photo.png'

const styles = {
  card: {
    maxWidth: '640px'
  },
  media: {
    height: '150px'
  },
  height: {
  	// minHeight: '261px'
  },
  paper: {
  	marginRight: '30px',
  	marginLeft: '30px'
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
				<div style={styles.paper}>
					<Grid container spacing={24}>
					{properties.map((item, index) => {
						function yearExist() {
							const physical = item.physical;
							if(physical !== null) {
								return `${physical.yearBuilt}`;
							}
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
									<Card style={styles.height}>
										<CardActionArea style={styles.card}>
											<CardMedia
												style={styles.media}
												image={item.mainImageUrl ? item.mainImageUrl : 'https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/icons/houses/empty-photo-2d253de73ef2cfa115dc3f769f55ec14.png'}
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
