import React, { Component } from 'react';
import Navbar from './components/navbar';
import TextArea from './components/textArea';
import Counter from './components/counter';
import CopyButton from './components/copyButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
	success: {
		textAlign: 'center',
		marginTop: '20px',
		color: 'green'
	},
	error: {
		textAlign: 'center',
		marginTop: '20px',
		color: 'red'
	}
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			characters: 0,
			message: '',
			information: false
		}

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange = (e) => {
		const characters = e.target.value.split('').length;

		this.setState({
			text: e.target.value,
			characters: characters
		})
	}

	copyToClipboard = (e) => {
		const { text } = this.state;

		this.textArea.select();
		document.execCommand('copy');
		
		if (text.length === 0) {
			this.setState({
				message: 'No text to copy...',
				information: false
			})
		} else {
			this.setState({
				message: 'Copied!',
				information: true
			})
		}
	}

	render() {
		const { characters, text, message, information } = this.state;

		return (
			<div>
				<Navbar />
				<Paper style={{ padding: '100px 0px', minHeight: '800px'}}>
					<TextArea
						onChange={this.onInputChange}
						myRef={textarea => this.textArea = textarea}
						value={text}
					/>
					{document.queryCommandSupported('copy') ?
					<div style={{ margin: 'auto', display: 'table' }}>
						<CopyButton onClick={this.copyToClipboard} />
						<Counter count={characters}/>
					</div>
					:
					<div style={{ margin: 'auto', display: 'table' }}>
						<Counter count={characters}/>
					</div>
					}
					{<Typography
						variant="subtitle2"
						gutterBottom
						style={information ? styles.success : styles.error}
					>
					{message}
					</Typography>
					}
				</Paper>
			</div>
		)
	}
}

export default App;