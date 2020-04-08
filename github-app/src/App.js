import React from 'react';
import './App.css';
import DisplayUserData from './components/DisplayUserData';
import axios from 'axios';

class App extends React.Component {
	state = {
		userName: '',
		userLocation: '',
		userPicture: '',
		userFollowers: '',
	};

	componentDidMount() {
		axios
			.get('https://api.github.com/users/Mosae')
			.then((response) => {
				console.log(response.data);
				this.setState({
					userName: response.data.name,
					userLocation: response.data.location,
					userPicture: response.data.avatar_url,
				});
			})
			.catch((error) => console.log('Data not returned', error));

		axios
			.get('https://api.github.com/users/Mosae/followers')
			.then((response) => {
				console.log('Followers: ', response);
				this.setState({
					userFollowers: null,
				});
			})
			.catch((error) => console.log('Data not returned', error));
	}

	render() {
		return (
			<div className="App">
				<h1>Git Hub User card</h1>

				<DisplayUserData
					userData={this.state.userName}
					userLocation={this.state.userLocation}
					userPicture={this.state.userPicture}
				/>
			</div>
		);
	}
}

export default App;
