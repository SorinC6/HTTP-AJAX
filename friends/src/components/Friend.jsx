import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
	border-bottom: 1px solid black;
	position: relative;
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

const Friend = (props) => {
	return (
		<FriendDiv>
			<DeleteButton onClick={() => props.deleteFriend(props.fr.id)}>X</DeleteButton>
			<h2>{props.fr.name}</h2>
			<p>{props.fr.age}</p>
			<p>{props.fr.email}</p>
		</FriendDiv>
	);
};

export default Friend;
