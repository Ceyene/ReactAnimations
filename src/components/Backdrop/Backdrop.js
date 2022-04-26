import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
	//dynamic css classes
	const cssClasses = [
		'Backdrop',
		props.show ? 'BackdropOpen' : 'BackdropClosed',
	];

	return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;
