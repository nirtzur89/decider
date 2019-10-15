import React from 'react';

export default class AddTask extends React.Component {
	state = {
		error: undefined
	};
	constructor(props) {
		super(props);
	}
	addOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.option.value = '';
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p className="widget widget--error">{this.state.error}</p>}
				<form onSubmit={this.addOption} className="widget widget--form">
					<input type="text" name="option" />
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}
