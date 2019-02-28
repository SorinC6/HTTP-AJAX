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
			age: '',
			email: ''
		},
		error: null
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
		const { name, age, email } = this.state.friend;
		const formIsCorrect = (name && email && age) > 1;
		console.log(formIsCorrect);
		console.log('addd');
		if (formIsCorrect) {
			console.log('post freind');
			this.props.postNewFriend(this.state.friend);
			this.props.history.push('/');
		} else {
			this.setState({ error: true });
			setTimeout(() => {
				this.setState({ error: null });
			}, 3000);
		}
	};

	render() {
		console.log(this.state.friend);
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
				{this.state.error && <h3 style={{ textAlign: 'center' }}>Try Again, Form incorect</h3>}
			</FromWrapper>
		);
	}
}

export default AddFriend;
