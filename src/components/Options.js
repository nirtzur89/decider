import React from 'react';
import Option from './Option';

const Options = (props) => {
	return (
		<div>
			<div className="widget-header">
				{props.options.length > 0 && <h3 className="widget-header__title">Here are your Options:</h3>}
				{props.options.length === 0 && (
					<h3 className="widget-header__title">Please add some options to get started</h3>
				)}
				<button className="button button--link" onClick={props.removeOptions}>
					Remove options
				</button>
			</div>
			{props.options.map((e) => <Option value={e} key={e} removeOption={props.removeOption} />)}
		</div>
	);
};

export default Options;
