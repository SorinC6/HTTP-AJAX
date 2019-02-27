import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendsList';
import './App.css';

class App extends Component {
	state = {
		friends: [],
		error: null,
		loading: false
	};

	componentDidMount() {
      this.startSpinner();
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setError(err));
	}

	setFriends = (friend) => {
      this.stopSpinner();
		this.setState({ friends: friend });
	};

	setError = (err) => {
		this.setState({ error: err });
	};

	startSpinner = () => {
		this.setState({ loading: true });
	};

	stopSpinner = () => {
		this.setState({ loading: false });
	};

	render() {
		return (
			<div className="App">
				<h1>Friends App Lambda HTTP-AJAX</h1>
            <FriendList friends={this.state.friends}/>
			</div>
		);
	}
}

export default App;
