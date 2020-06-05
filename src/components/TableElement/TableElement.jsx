import React from 'react';
import './style.css'



const TableElement = ({taskName, id}) => {
  
    return (
      
  <div className="TableElement" id={id}>
      {taskName}
        
  </div>
  );

}




export default TableElement;