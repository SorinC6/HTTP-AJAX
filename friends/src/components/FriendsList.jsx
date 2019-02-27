import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
	width: 600px;
	margin: 0 auto;
	border-style: double;
   padding: 20px;
   margin-top:20px;
`;

const LinkWrapper = styled(Link)`
   max-width:60px;
   text-align:center;
   font-weight:bold;
   text-decoration-line:none;
   padding:10px;
   border-style:double;
   max-width:90px;
`

const Wrapper = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
`

const FriendsList = (props) => {
	return (
		<Wrapper>
			<LinkWrapper to="/add-form">Add Friend</LinkWrapper>
			<ListContainer>{props.friends.map((fr, i) => <Friend key={i} fr={fr} {...props}/>)}</ListContainer>
		</Wrapper>
	);
};

export default FriendsList;
