import React, { Component } from 'react';
import ViewModule from '@material-ui/icons/ViewModule';
import Menu from '@material-ui/icons/Menu';

const styles = {
	wrapper: {
    	textAlign: "right",
		margin: "10px 20px",
		float: "right"
	},
	toggle: {
		color: "rgb(221, 221, 221)",
		cursor: "pointer",
		border: "2px solid rgb(221, 221, 221)",
		borderRadius: "5px"
	},
	toggleActive: {
		color: "#F17322",
		border: "2px solid rgb(241, 115, 34)",
		borderRadius: "5px"
	},
	margin: {
		margin: "0px 3px"
	}
}

class Toggle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showCards: true,
			showList: false
		}

		this.renderCardView = this.renderCardView.bind(this);
		this.renderListView = this.renderListView.bind(this);
	}

	renderCardView(e) {
		e.preventDefault();
		console.log("cards: ", this.state.showCards, "list: ", this.state.showList)

		this.setState({
			showCards: true,
			showList: false
		})
	}

	renderListView(e) {
		e.preventDefault();
		console.log("list: ", this.state.showList, "cards: ", this.state.showCards)

		this.setState({
			showCards: false,
			showList: true
		})
	}

	render() {
		const { showCards, showList } = this.state;

		return (
			<div style={styles.wrapper}>
				<span style={styles.margin}>
				<ViewModule
					onClick={this.renderCardView}
					fontSize="large"
					style={showCards ? styles.toggleActive : styles.toggle}
				>
				</ViewModule>
				</span>
				<span style={styles.margin}>
				<Menu
					onClick={this.renderListView}
					fontSize="large"
					style={showList ? styles.toggleActive : styles.toggle}>
				</Menu>
				</span>
				<p>{showCards === true ? "Cards View: ON" : "List View: ON"}</p>
			</div>
		)
	}
}

export default Toggle;
