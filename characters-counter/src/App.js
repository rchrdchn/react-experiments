import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			characters: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		const chars = e.target.value.split('').length;

		this.setState({
			text: e.target.value,
			characters: chars
		})
	}

	render() {
		const { characters, text } = this.state;

		return (
			<div>
				<textarea
					type="text"
					value={text}
					onChange={this.onInputChange}
				/>
				<p>Character count: {characters}</p>
			</div>
		)
	}
}

export default App;