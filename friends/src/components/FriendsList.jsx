import React from 'react';
import styled from 'styled-components'
import Friend from './Friend';

const ListContainer = styled.div`
	width: 300px;
	margin: 0 auto;
	border-style: double;
	padding: 20px;
`;

const FriendsList = (props) => {

   return(
      <div>
         <button>Add Friend</button>
         <ListContainer>
            {
               props.friends.map(fr=>(<Friend fr={fr}/>))
            }
         </ListContainer>
      </div>
   )
}


export default FriendsList;