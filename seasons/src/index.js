import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			long: null,
			errorMessage: ''
		}

		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude					
				})
			},
			err => {
				this.setState({
					errorMessage: err.message
				})
			}
		);
	}

	render() {
		return (
			<div>
				{this.state.lat ?
					`Latitude: ${this.state.lat}` 
					:
					`Error: ${this.state.errorMessage}`
				}
				<div>Loading...</div>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.querySelector('#root'));