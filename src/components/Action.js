import React from 'react';

const Action = (props) => {
	return (
		<div>
			<button onClick={props.pickOption} disabled={!props.hasOptions} className="big-button">
				Choose for me
			</button>
		</div>
	);
};

export default Action;
