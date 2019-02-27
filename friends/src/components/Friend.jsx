import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`border-bottom: 1px solid black;`;

const Friend = (props) => {
	return (
		<FriendDiv>
			<h2>{props.fr.name}</h2>
			<p>{props.fr.age}</p>
			<p>{props.fr.email}</p>
		</FriendDiv>
	);
};

export default Friend;
