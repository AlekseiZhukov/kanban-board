import React from 'react';
//import './style.css'



const ListItem = ({taskName, onClick, id, className, date}) => {
  
    return (
      
  <div className="ListItem">
      <p id={id} className={className} onClick={onClick}>{taskName}</p>
      {date && <p className ="date_string">task create : {date}</p>} 
        
  </div>
  );

}




export default ListItem;