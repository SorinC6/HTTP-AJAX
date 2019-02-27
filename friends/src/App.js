import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
	state = {
		friends: [],
      error: null,
      postError:'',
		loading: false
	};

	componentDidMount() {
		this.startSpinner();
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setError(err));
	}

	addNewFriend = (friend) => {
      console.log('test test');
      axios.post('http://localhost:5000/friends',friend)
         .then( (res) => this.setFriends(res.data) )
         .catch( (err) => this.setState({postError:err}))
	};

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
				{/* <FriendList friends={this.state.friends} /> */}

				<Route exact path="/" render={(props) => <FriendList {...props} friends={this.state.friends} />} />
				<Route
					path="/add-form"
					render={(props) => <AddFriend {...props} postNewFriend={this.addNewFriend} />}
				/>
			</div>
		);
	}
}

export default App;
