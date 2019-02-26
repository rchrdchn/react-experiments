import React from 'react';
import logo from '../images/logo.png';
import Toggle from './toggleViews';
import { Link } from 'react-router-dom';

const styles = {
	wrapper: {
		margin: '30px 20px',
		textAlign: 'left'
	},
	logo: {
		width: '150px'
	}
}
const Navbar = props => {
	return (
		<div style={styles.wrapper}>
			<Link to="/">
				<img src={logo} alt="Roofstock" style={styles.logo} />
			</Link>
			<Toggle />
		</div>
	)
}

export default Navbar;
