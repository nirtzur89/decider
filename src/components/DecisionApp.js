import React from 'react';
import AddTask from './AddTask';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class DecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};
	resetSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};
	componentDidMount = () => {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	};

	removeOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	removeOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	};

	pickOption = () => {
		const random = Math.floor(Math.random() * this.state.options.length);
		const chosen = this.state.options[random];
		this.setState(() => ({ selectedOption: chosen }));
	};

	addOption = (option) => {
		if (!option) {
			return 'please add a valid value';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option is already there';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};

	render() {
		const title = 'Decider';
		const subtitle = 'let your computer decide for you';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<div className="container">
					<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
					<div className="widget">
						<Options
							options={this.state.options}
							removeOptions={this.removeOptions}
							removeOption={this.removeOption}
						/>
						<AddTask addOption={this.addOption} />
					</div>
					<OptionModal
						selectedOption={this.state.selectedOption}
						resetSelectedOption={this.resetSelectedOption}
					/>
				</div>
			</div>
		);
	}
}

DecisionApp.defaultProps = {
	options: []
};
