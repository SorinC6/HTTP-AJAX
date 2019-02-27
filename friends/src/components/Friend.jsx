import React from 'react';

const Friend = (props) => {

   return(
      <div>
         <h2>{props.fr.name}</h2>
         <p>{props.fr.age}</p>
         <p>{props.fr.email}</p>
      </div>

   )
}

export default Friend;