import React from 'react';

const Option = (props) => {
	return (
		<div>
			<div className="widget widget--option">
				<p className="widget widget--content">{props.value}</p>
				<button
					className="button button--link"
					onClick={(e) => {
						props.removeOption(props.value);
					}}
				>
					remove
				</button>
			</div>
		</div>
	);
};

export default Option;
