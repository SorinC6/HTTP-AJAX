import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import styled from 'styled-components';
import './App.css';
import { Route } from 'react-router-dom';

const StyledContainer = styled.div`
	padding: 20px;
	height: 100%;
`;

class App extends Component {
	state = {
		friends: [],
		error: null,
		postError: '',
		loading: false
	};

	componentDidMount() {
		this.startSpinner();
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setError(err.message));
	}

	addNewFriend = (friend) => {
		console.log('test test');
		axios
			.post('http://localhost:5000/friends', friend)
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setState({ postError: err }));
   };
   
   deleteFriend = (id) => {
      console.log(id)
   }

	setFriends = (friend) => {
		this.stopSpinner();
		this.setState({ friends: friend });
	};

	setError = (error) => {
		this.setState({ error: error });
	};

	startSpinner = () => {
		this.setState({ loading: true });
	};

	stopSpinner = () => {
		this.setState({ loading: false });
	};

	render() {
		if (this.state.loading) {
			return <StyledContainer>Loading...</StyledContainer>;
		}

		if (this.state.error) {
			return <StyledContainer>Argh!! Bad Fatching {this.state.error}</StyledContainer>;
		}

		return (
			<div className="App">
				<h1>Friends App Lambda HTTP-AJAX</h1>
				{/* <FriendList friends={this.state.friends} /> */}

				<Route exact path="/" render={(props) => <FriendList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend}/>} />
				<Route
					path="/add-form"
					render={(props) => <AddFriend {...props} postNewFriend={this.addNewFriend} />}
				/>
			</div>
		);
	}
}

export default App;
