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
    row: {
        backgroundColor: 'rgb(248, 248, 248)'
    },
    propertyImage: {
        maxWidth: "150px",
        minHeight: "100px",
        border: "2px solid rgb(221, 221, 221)",
        borderRadius: "5px",
        boxShadow: "2px 2px 4px 1px rgba(108, 108, 108, 0.75)"
    },
    paddingTable: {
        marginTop: "60px",
        padding: "0px 40px"
    },
    paddingHead: {
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    tableHeader: {
        color: "rgb(241, 115, 34)",
        fontSize: "14px"
    },
    tableRow: {
        fontSize: "16px"
    }
}

const PropertiesList = props => {
    const { properties } = props.items;
    
    return (
        <div style={styles.paddingTable}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" style={styles.tableHeader}>Address</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>Price (US$)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>Monthly Rent (US$)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>Gross Yield (%)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {properties.map((item, index) => (
                        <TableRow key={item.id} style={styles.row}>
                        <TableCell component="th" scope="row" style={styles.paddingHead}>
                            <Link to={item.mainImageUrl ? `/property/${item.id}` : '/list'}>
                            <img
                                src={item.mainImageUrl ? item.mainImageUrl : `${NoImage}`}
                                alt={item.address.address1}
                                style={styles.propertyImage}
                            />
                            </Link>
                        </TableCell>
                        <TableCell align="center" style={styles.tableRow}>{item.address.address1}</TableCell>
                        <TableCell align="center" style={styles.tableRow}>
                            <PropertyPrice price={getPrice(item)} />
                        </TableCell>
                        <TableCell align="center" style={styles.tableRow}>{getRent(item)}</TableCell>
                        <TableCell align="center" style={styles.tableRow}>{getGrossYield(item)}</TableCell>
                        <TableCell align="center" style={styles.tableRow}>{getYear(item)}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default PropertiesList;