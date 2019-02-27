import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {

   return(
      <div>
         {
            props.friends.map(fr=>(<Friend fr={fr}/>))
         }
      </div>
   )
}


export default FriendsList;