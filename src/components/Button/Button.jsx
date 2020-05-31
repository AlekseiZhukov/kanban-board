import React from 'react';



 
const Button = ({value, onClick, className}) => {
  
      return (
        
    <input className={`btn ${className}`}
      type="button"
      value={value}
      onClick={onClick}
    /> 
    );
  
}
 



export default Button;