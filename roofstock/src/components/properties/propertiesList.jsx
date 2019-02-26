import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PropertyPrice from '../properties/propertyPrice';
import NoImage from '../../images/empty-photo.png';
import {
    getPrice,
    getRent,
    getGrossYield,
    getYear,
    addComma
} from '../helper/helper';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper
} from '@material-ui/core';

const styles = {
    container: {
        marginTop: "60px",
        padding: "0px 40px"
    },
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
    tableCellHeader: {
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
        <div style={styles.container}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" style={styles.tableHeader}>ADDRESS</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>PRICE (US$)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>MONTHLY RENT (US$)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>GROSS YIELD (%)</TableCell>
                            <TableCell align="center" style={styles.tableHeader}>YEAR</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {properties.map((item, index) => (
                        <TableRow key={item.id} style={styles.row}>
                        <TableCell component="th" scope="row" style={styles.tableCellHeader}>
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
                            <PropertyPrice price={getPrice(item, true)} />
                        </TableCell>
                        <TableCell align="center" style={styles.tableRow}>{getRent(item, true)}</TableCell>
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