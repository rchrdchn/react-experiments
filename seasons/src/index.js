import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

class App extends Component {
	state = { lat: null, long: null, errorMessage: '' }

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
			err => this.setState({errorMessage: err.message})
		);
	}

	render() {
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}
		
		if (!this.state.lat && this.state.errorMessage) {
			return <ErrorMessage text={this.state.errorMessage} />
		}

		return <Spinner message="Please accept location request..." />
	}
};

ReactDOM.render(<App />, document.querySelector('#root'));