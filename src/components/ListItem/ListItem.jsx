import React from 'react';
//import './style.css'



const ListItem = ({taskName, onClick, id, className}) => {
  
    return (
      
  <div className="ListItem">
      <p id={id} className={className} onClick={onClick}>{taskName}</p>
        
  </div>
  );

}




export default ListItem;