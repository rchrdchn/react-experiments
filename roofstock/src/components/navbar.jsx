import React from 'react';
import logo from '../images/logo.png';

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
			<img src={logo} alt="logo" style={styles.logo} />
		</div>
	)
}

export default Navbar;
