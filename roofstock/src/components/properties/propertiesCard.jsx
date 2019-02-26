import React from 'react';
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
	container: {
		marginTop: "50px",
		padding: "0px 40px"
	},
	paper: {
		marginRight: "30px",
		marginLeft: "30px"
	},
	cardAction: {
		maxWidth: "640px"
	},
	cardMedia: {
		height: "150px"
	},
	cardContentHeight: {
		height: "175px"
	},
	cardHeight: {
		height: "340px"
	},
	innerGrid: {
		width: "290px"
	}
}

const PropertiesCard = props => {
	const { properties } = props.items;

	return (
		<div>
			<Grid container spacing={24} style={styles.container}>
			{properties.map((item, index) => {
				const URLLink = item.mainImageUrl ? `/property/${item.id}` : "/";

				return (
			        <Grid item key={index} md={4} style={styles.innerGrid}>
			          	<Paper>
							<Link to={URLLink}>
							<Card style={styles.cardHeight}>
								<CardActionArea style={styles.cardAction}>
									<CardMedia
										style={styles.cardMedia}
										image={item.mainImageUrl ? item.mainImageUrl : `${NoImage}`}
										title={item.address.address1}
									/>
									<CardContent style={styles.cardContentHeight}>
										<PropertyAddress
											primary={item.address.address1}
											secondary={`${item.address.city}, ${item.address.state}`}
										/>
										<PropertyPrice price={getPrice(item, true)} />
										<PropertyDetails
											rent={getRent(item, true)}
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

export default PropertiesCard;
