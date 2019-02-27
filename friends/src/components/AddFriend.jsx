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
