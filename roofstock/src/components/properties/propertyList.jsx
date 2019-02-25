import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    getPrice,
    getRent,
    getGrossYield,
    getYear
} from '../helper/helper';
import PropertyPrice from '../properties/propertyPrice';
import NoImage from '../../images/empty-photo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    propertyImage: {
        maxWidth: "150px",
        minHeight: "100px",
        border: "2px solid rgb(221, 221, 221)",
        borderRadius: "5px",
        boxShadow: "2px 2px 4px 1px rgba(108, 108, 108, 0.75)"
    },
    paddingTable: {
        marginTop: "50px",
        padding: "0px 40px"
    },
    paddingHead: {
        paddingTop: "20px",
        paddingBottom: "20px"
    }
}

class PropertyList extends Component {
    render() {
        const { properties } = this.props.items;

        return (
            <div style={styles.paddingTable}>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Listing Price</TableCell>
                                <TableCell align="center">Monthly Rent</TableCell>
                                <TableCell align="center">Gross Yield</TableCell>
                                <TableCell align="center">Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {properties.map((item, index) => (
                            <TableRow key={item.id}>
                            <TableCell component="th" scope="row" style={styles.paddingHead}>
                                <img
                                    src={item.mainImageUrl ? item.mainImageUrl : `${NoImage}`}
                                    alt={item.address.address1}
                                    style={styles.propertyImage}
                                />
                            </TableCell>
                            <TableCell align="center">{item.address.address1}</TableCell>
                            <TableCell align="center"><PropertyPrice price={getPrice(item)} /></TableCell>
                            <TableCell align="center">{getRent(item)}</TableCell>
                            <TableCell align="center">{getGrossYield(item)}</TableCell>
                            <TableCell align="center">{getYear(item)}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default PropertyList;