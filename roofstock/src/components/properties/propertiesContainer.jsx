import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    getPrice,
    getRent,
    getGrossYield,
    getYear
} from '../helper/helper';
import PropertyAddress from './propertyAddress';
import PropertyPrice from './propertyPrice';
import PropertyDetails from './propertyDetails';
import NoImage from '../../images/empty-photo.png';
import { Paper, Grid, Card } from '@material-ui/core';
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';

const styles = {
	card: {
		maxWidth: "640px"
	},
	media: {
		height: "150px"
	},
	paper: {
		marginRight: "30px",
		marginLeft: "30px"
	},
	height: {
		height: "300px"
	},
	width: {
		width: "290px"
	},
	padding: {
		padding: "0px 40px"
	}
}

class PropertiesContainer extends Component {
	render() {
		const { properties } = this.props.items;

		return (
			<div>
				<Grid container spacing={24} style={styles.padding}>
				{properties.map((item, index) => {
					const URLLink = item.mainImageUrl ? `/property/${item.id}` : "/";

					return (
				        <Grid item key={index} md={4} style={styles.width}>
				          	<Paper>
								<Link to={URLLink}>
								<Card style={styles.height}>
									<CardActionArea style={styles.card}>
										<CardMedia
											style={styles.media}
											image={item.mainImageUrl ? item.mainImageUrl : `${NoImage}`}
											title={item.address.address1}
										/>
										<CardContent style={styles.height}>
											<PropertyAddress
												primary={item.address.address1}
												secondary={`${item.address.city}, ${item.address.state}`}
											/>
											<PropertyPrice price={getPrice(item)} />
											<PropertyDetails
												rent={getRent(item)}
												grossYield={getGrossYield(item)}
												year={getYear(item)}
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
