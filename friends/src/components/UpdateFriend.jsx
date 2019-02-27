import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const LinkWrapper = styled(Link)`
   text-align:center;
   text-decoration:none;
   border-style:double;
   padding:20px;
`;

const UpdateFriend = (props) => {
	return (
		<FromWrapper>
			<label>
				<input
					type="text"
					onChange={props.handleChanges}
					value={props.item.name}
					name="name"
					placeholder="name..."
				/>
				<div />
			</label>
			<label>
				<input
					type="number"
					onChange={props.handleChanges}
					value={props.item.age}
					name="age"
					placeholder="age..."
				/>
			</label>
			<label>
				<input
					type="email"
					onChange={props.handleChanges}
					value={props.item.email}
					name="email"
					placeholder="email..."
				/>
			</label>
			<LinkWrapper to="/" onClick={props.updateFriend}>
				Update Friend
			</LinkWrapper>
		</FromWrapper>
	);
};

export default UpdateFriend;
