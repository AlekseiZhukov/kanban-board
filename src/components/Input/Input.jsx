import React from 'react';



 
class Input extends React.Component {

  constructor (props) {
    super(props);
    
}

  render(){
    const {value, style, onChange, className, onKeyPress} = this.props;
    
    return (
      <input
        type="text"
        value={value}
        style={style}
        onChange={onChange}
        className={`input ${className}`}
        onKeyPress={onKeyPress}
        autoFocus={true}
        />
  )
}
    
  
}
 



export default Input;