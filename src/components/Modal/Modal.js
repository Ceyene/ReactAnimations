import React from 'react';
import Transition from 'react-transition-group/cjs/Transition';

import './Modal.css';

//handling animation timings
const animationTiming = {
	enter: 400,
	exit: 1000,
};

const modal = (props) => {
	return (
		<Transition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
		>
			{(state) => {
				//dynamic css classes
				const cssClasses = [
					'Modal',
					state === 'entering'
						? 'ModalOpen'
						: state === 'exiting'
						? 'ModalClosed'
						: null,
				];
				return (
					<div className={cssClasses.join(' ')}>
						<h1>A Modal</h1>
						<button className="Button" onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default modal;
