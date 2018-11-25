import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({value: event.target.value});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.value);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type='text'
							value={this.state.value}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;