class PokemonName extends Component {
	render() {
		const name = this.props.name;
		return (
			<section>
			{name}
			</section>
		)
	};
}

export default PokemonName;