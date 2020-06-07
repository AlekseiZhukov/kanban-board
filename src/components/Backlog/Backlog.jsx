import React, { Fragment } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Table from '../Table/Table';


class Backlog extends React.Component {
    
        
    
    addTaskToEnter = (event) => {
        if (event.key === 'Enter') {
                this.props.onClickBtnSubmit()
        }  
    }
   
        
        render() {
            const {state, onChangeInput, onClickBtnAdd, onClickBtnSubmit} = this.props;
                        
            return (
                <Fragment >
                    <Table
                    title="backlog"
                    tasks={state.tasks}

                    />
                    
                    <Input className={state.enabledInput ? 'inputOn' : "inputOff"}
                        value={state.inputValue}
                        onChange={onChangeInput}
                        onKeyPress={this.addTaskToEnter}
                        
                    />
                     
                    <div className="button_box">
                        <Button
                            className="addTask"
                            value="+Add card"
                            onClick ={onClickBtnAdd}
                            id = "backlog"
                        />

                        <Button
                            className={state.enabledBtnSubmit ? 'btnSubmitOn' : "btnSubmitOff"}
                            value="Submit"
                            onClick ={onClickBtnSubmit}
                        />
                     </div>
                </Fragment>
               
            )
        }
    }

export default Backlog;