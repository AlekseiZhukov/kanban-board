import React from 'react';
import Button from '../Button/Button'
import './style.css'



const TableElement = ({taskName, id, deleteTableElement}) => {
  
    return (
      
  <div className="tableElement" id={id}>
      {taskName}
      <Button
        value="del"
        id={id}
        onClick={deleteTableElement}
      />
        
  </div>
  );

}




export default TableElement;