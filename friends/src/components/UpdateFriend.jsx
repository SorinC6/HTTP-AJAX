import React from 'react';
import styled from 'styled-components';

const FromWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 60px 20px;
`;

const UpdateFriend = (props) => {
	return (
		<FromWrapper>
			<label>
				Name:
				<input type="text" onChange={props.handleChanges} value={props.item.name} name="name" placeholder="name..." />
			</label>
			<label>
				Age:
				<input type="number" onChange={props.handleChanges} value={props.item.age} name="age" placeholder="age..." />
			</label>
			<label>
				Email:
				<input type="email" onChange={props.handleChanges} value={props.item.email}  name="email" placeholder="email..." />
			</label>
			<button onClick={props.updateFriend}>Update Friend</button>
		</FromWrapper>
	);
};

export default UpdateFriend;
