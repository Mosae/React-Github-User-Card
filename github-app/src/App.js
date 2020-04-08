import React from 'react';
import './App.css';
import DisplayUserData from './components/DisplayUserData';

class App extends React.Component {
	state = {
		userName: '',
		userLastName: '',
		userFollowers: '',
	};

	render() {
		return (
			<div className="App">
				<h1>Git Hub User card</h1>

				<DisplayUserData />
			</div>
		);
	}
}

export default App;
