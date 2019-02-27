import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
	width: 300px;
	margin: 0 auto;
	border-style: double;
   padding: 20px;
   margin-top:20px;
`;

const LinkWrapper = styled(Link)`
   max-width:60px;
   margin:0 auto;
   font-weight:bold;
   text-decoration-line:none;
   padding:10px;
   border-style:double;
   margin-left:250px;

`

const FriendsList = (props) => {
	return (
		<div>
			<LinkWrapper to="/add-form">Add Friend</LinkWrapper>
			<ListContainer>{props.friends.map((fr, i) => <Friend key={i} fr={fr} {...props}/>)}</ListContainer>
		</div>
	);
};

export default FriendsList;
