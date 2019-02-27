import React from 'react';
import styled from 'styled-components';

const FromWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 60px 20px;
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
					Name:
					<input type="text" onChange={this.handleChanges} name="name" />
				</label>
				<label>
					Age:
					<input type="number" onChange={this.handleChanges} name="age" />
				</label>
				<label>
					Email:
					<input type="email" onChange={this.handleChanges} name="email" />
				</label>
				<button onClick={this.postFriend}>Submit</button>
			</FromWrapper>
		);
	}
}

export default AddFriend;
