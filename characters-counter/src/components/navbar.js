import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  text: {
  	display: 'inline-grid',
    textAlign: 'center'
  }
}

const Navbar = props => {
  return (
    <div style={styles.root}>
		<AppBar position="static" color="primary">
			<Toolbar style={styles.text}>
				<Typography variant="h6" color="inherit">
				Characters Counter
				</Typography>
			</Toolbar>
		</AppBar>
    </div>
  );
}

export default Navbar;