import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import PropertyAddress from './propertyAddress';
import PropertyPrice from './propertyPrice';
import PropertyDetails from './propertyDetails';
import PropertyContainer from '../property/propertyContainer';
import { Paper, Grid, Card } from '@material-ui/core';
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import NoImage from '../../images/empty-photo.png'

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

class PropertiesContainer extends Component {
	constructor(props) {
		super(props);
	}

	getPrice(item) {
		const price = item.financial;
		if(price !== null) {
			const listedPrice = price.listPrice.toFixed(2);
			return listedPrice;
		}
	}

	getRent(item){ 
		const rent = item.financial;
		return rent !== null && rent.monthlyRent.toFixed(2);
	}

	getYear(item) {
		const physical = item.physical;
		return physical !== null && physical.yearBuilt;
	}

	getGrossYield(item){
		if (this.getRent(item) && this.getPrice(item)) {
			return `${((this.getRent(item) * 12 / this.getPrice(item)) * 100).toFixed(2)}%`;
		}
	}

	render() {
		const { properties } = this.props.items;

		return (
			<div>
			<Grid container spacing={24}>
			{properties.map((item, index) => {
				return (
			        <Grid item key={index} md={4}>
			          	<Paper>
							<Link to={`/property/${item.id}`}>
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
										<PropertyPrice price={this.getPrice(item)} />
										<PropertyDetails
											rent={this.getRent(item)}
											grossYield={this.getGrossYield(item)}
											year={this.getYear(item)}
										/>
									</CardContent>
								</CardActionArea>
							</Card>
			        		</Link>
						</Paper>
			        </Grid>
					)
				})}
				</Grid>
			</div>
		)
	}
}

export default PropertiesContainer;
