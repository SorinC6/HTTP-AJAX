import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FriendDiv = styled.div`
	border-bottom: 1px solid black;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const DeleteButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	padding: 5px;
	border: 1px solid purple;
	&:hover {
		color: white;
		background: black;
	}
`;

const WrapperDiv = styled.div`
   text-align:center;
`

const LinkWrapper = styled(Link)`
   text-decoration:none;
   padding:10px;
   text-align:center;
`;

const Friend = (props) => {
	return (
		<FriendDiv>
			<DeleteButton onClick={() => props.deleteFriend(props.fr.id)}>X</DeleteButton>
			<WrapperDiv>
				<h2>{props.fr.name}</h2>
				<p>Age: {props.fr.age}</p>
				<p>Email: {props.fr.email}</p>
			</WrapperDiv>
			<LinkWrapper to="update-form" onClick={() => props.updateFriend(props.fr.id)}>
				Update Friend
			</LinkWrapper>
		</FriendDiv>
	);
};

export default Friend;
