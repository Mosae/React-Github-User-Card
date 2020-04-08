import React from 'react';
import './App.css';
import DisplayUserData from './components/DisplayUserData';
import axios from 'axios';

class App extends React.Component {
	state = {
		userName: '',
		userLastName: '',
		userFollowers: '',
	};

	componentDidMount() {
		axios.get('https://api.github.com/users/Mosae').then((response) => {
			console.log(response.data.name);
			this.setState({
				userName: response.data.name,
			});
		});
	}

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
