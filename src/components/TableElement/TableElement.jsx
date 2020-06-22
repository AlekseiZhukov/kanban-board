import React from 'react';
import Button from '../Button/Button'
import './style.css'



const TableElement = ({taskName, id, deleteTableElement}) => {
  
    return (
      <div className="tableElement">  
        <div className="" id={id}>
          <p>{taskName}</p>
        </div>
        <Button
          className="delTaskFromTable"
          value=""
          id={id}
          onClick={deleteTableElement}
        />
      </div>
  );

}




export default TableElement;