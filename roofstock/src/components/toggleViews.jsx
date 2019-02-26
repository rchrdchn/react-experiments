import React from 'react';
import { Link } from 'react-router-dom';
import ViewModule from '@material-ui/icons/ViewModule';
import Menu from '@material-ui/icons/Menu';

const styles = {
	wrapper: {
		position: "absolute",
		margin: "0px 40px",
		right: 0,
		top: "45px"
	},
	toggle: {
		color: "rgb(221, 221, 221)",
		cursor: "pointer",
		border: "2px solid rgb(221, 221, 221)",
		borderRadius: "5px"
	},
	toggleActive: {
		color: "rgb(241, 115, 34)",
		border: "2px solid rgb(241, 115, 34)",
		borderRadius: "5px"
	},
	margin: {
		margin: "0px 3px"
	}
}

const Toggle = () => {
	const listPath = window.location.pathname === '/list';

	return (
		<div style={styles.wrapper}>
			<Link to="/">
				<span style={styles.margin}>
				<ViewModule
					fontSize="large"
					style={!listPath ? styles.toggleActive : styles.toggle}
				>
				</ViewModule>
				</span>
			</Link>
			<Link to="/list">
				<span style={styles.margin}>
				<Menu
					fontSize="large"
					style={listPath ? styles.toggleActive : styles.toggle}>
				</Menu>
				</span>
			</Link>

		</div>
	)
}

export default Toggle;
