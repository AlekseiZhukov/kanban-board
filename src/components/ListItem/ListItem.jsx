import React from 'react';
//import './style.css'



const ListItem = ({taskName, onClick, id}) => {
  
    return (
      
  <div className="ListItem">
      <p id={id} onClick={onClick}>{taskName}</p>
        
  </div>
  );

}




export default ListItem;