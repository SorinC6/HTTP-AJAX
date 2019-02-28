import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';
import styled from 'styled-components';
import './App.css';
import { Route } from 'react-router-dom';
import { Confirm } from 'semantic-ui-react';

const StyledContainer = styled.div`
	padding: 20px;
	height: 100%;
`;

// const emptyFriend = {};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			error: null,
			postError: '',
			deleteError: '',
			loading: false,
			open: false,
			emptyFriend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	componentDidMount() {
		this.startSpinner();
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setError(err.message));
	}

	addNewFriend = (friend) => {
		//console.log('test test');
		axios
			.post('http://localhost:5000/friends', friend)
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setState({ postError: err }));
	};

	deleteFriend = (id) => {
		//console.log(id)
		this.show();
      
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res) => this.setFriends(res.data))
			.catch((err) => this.setState({ deleteError: err.message }));
	};

	populateInput = (id) => {
		console.log(id);
		this.setState({ emptyFriend: this.state.friends.find((fr) => fr.id === id) });
	};

	updateFriend = () => {
		console.log(this.state.emptyFriend.id);
		axios
			.put(`http://localhost:5000/friends/${this.state.emptyFriend.id}`, this.state.emptyFriend)
			.then((res) => this.setFriends(res.data))
			.catch((err) => console.log(err));
	};

	handleChanges = (e) => {
		e.persist();
		this.setState((prevState) => {
			return {
				emptyFriend: {
					...prevState.emptyFriend,
					[e.target.name]: e.target.value
				}
			};
		});
	};

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

	show = () => this.setState({ open: true });
	handleConfirm = () => this.setState({ open: false });
	handleCancel = () => this.setState({ open: false });

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

				<Route
					exact
					path="/"
					render={(props) => (
						<FriendList
							{...props}
							friends={this.state.friends}
							deleteFriend={this.deleteFriend}
							updateFriend={this.populateInput}
						/>
					)}
				/>
				<Route
					path="/add-form"
					render={(props) => <AddFriend {...props} postNewFriend={this.addNewFriend} />}
				/>

				<Route
					path="/update-form"
					render={(props) => (
						<UpdateFriend
							{...props}
							updateFriend={this.updateFriend}
							handleChanges={this.handleChanges}
							item={this.state.emptyFriend}
						/>
					)}
				/>
				<Confirm
					open={this.state.open}
					header="Delete a Friend"
					onCancel={this.handleCancel}
					onConfirm={this.handleConfirm}
				/>
			</div>
		);
	}
}

export default App;
