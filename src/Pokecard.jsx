class Pokedex extends Component {
	render() {
		let name = this.props.name;
		const image = this.props.image;
		const type = this.props.type;
		return (
			<section>
				<div>{name}</div>
				<div>{image}</div>
				<div>{type}</div>
			</section>
		);
	}
}

export default Pokedex;