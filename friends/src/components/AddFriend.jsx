import React from 'react';
import styled from 'styled-components';

const FromWrapper = styled.div`
	display: flex;
	width: 400px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 60px 20px;

	input {
		background-color: #fff;
		font-size: 21px;
		height: 50px;
		width: 300px;
		padding: 0 8px;
		color: #1c5d76;
		align-items: center;
		margin: 20px;
	}
`;

const ButtonWrapper = styled.button`
	text-align: center;
	text-decoration: none;
	border-style: double;
	padding: 20px;
`;

class AddFriend extends React.Component {
	state = {
		friend: {
			name: '',
			age: null,
			email: ''
		}
	};

	handleChanges = (e) => {
		this.setState({
			friend: {
				...this.state.friend,
				[e.target.name]: e.target.value
			}
		});
	};

	postFriend = () => {
		console.log('post freind');
		this.props.postNewFriend(this.state.friend);
		this.props.history.push('/');
	};

	render() {
		return (
			<FromWrapper>
				<label>
					<input type="text" onChange={this.handleChanges} name="name" placeholder="name" />
				</label>
				<label>
					<input type="number" onChange={this.handleChanges} name="age" placeholder="age" />
				</label>
				<label>
					<input type="email" onChange={this.handleChanges} name="email" placeholder="email" />
				</label>
				<ButtonWrapper onClick={this.postFriend}>Submit</ButtonWrapper>
			</FromWrapper>
		);
	}
}

export default AddFriend;
