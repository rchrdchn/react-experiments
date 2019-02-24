import React from 'react';
import logo from '../images/logo.png';
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
const Navbar = () => {
	return (
		<div style={styles.wrapper}>
			<Link to="/">
			<img src={logo} alt="logo" style={styles.logo} />
			</Link>
		</div>
	)
}

export default Navbar;
