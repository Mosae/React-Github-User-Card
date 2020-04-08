import React from 'react';
import './App.css';
import DisplayUserData from './components/DisplayUserData';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	state = {
		userName: '',
		userLocation: '',
		userPicture: '',
		userFollowers: [],
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
				console.log('Followers: ', response.data);
				this.setState({
					userFollowers: response.data,
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
					userFollowers={this.state.userFollowers}
				/>
			</div>
		);
	}
}

export default App;
