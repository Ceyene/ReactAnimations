import React, { Component } from 'react';
import Transition from 'react-transition-group/cjs/Transition'; //4 stages -> entering - entered // exiting - exited -> we can listen them and use it for animations
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modalIsOpen: false,
		showBlock: false,
	};

	showModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<button
					className="ToggleButton"
					onClick={() =>
						this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
					}
				>
					Toggle
				</button>
				<br />
				<Transition
					in={this.state.showBlock}
					timeout={300}
					mountOnEnter
					unmountOnExit
				>
					{(state) => (
						<div
							style={{
								backgroundColor: '#eed3ed',
								width: 100,
								height: 100,
								margin: '0.5rem auto',
								transition: 'opacity 0.9s ease-out',
								opacity: state === 'entering' ? 0 : 1,
							}}
						></div>
					)}
				</Transition>
				<Transition
					in={this.state.modalIsOpen}
					timeout={300}
					mountOnEnter
					unmountOnExit
				>
					{(state) => <Modal show={state} closed={this.closeModal} />}
				</Transition>
				{this.state.modalIsOpen ? (
					<Backdrop show={this.state.modalIsOpen} />
				) : null}
				<button className="Button" onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
