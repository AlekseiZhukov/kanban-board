import React, { Fragment } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Table from '../Table/Table';
import Dropdown from '../Dropdown/Dropdown';
import ListItem from '../ListItem/ListItem';

class Column extends React.Component {
        
    addTaskToEnter = (event) => {
        if (event.key === 'Enter') {
                this.props.onClickBtnSubmit()
        }  
    }
   
        
        render() {
            const {
                    state,
                    onChangeInput,
                    onClickBtn,
                    onClickBtnSubmit,
                    deleteTableElement,
                    title,
                    onClickDropdown,
                    onClickListItem,
                    idDropdown,
                    listItemColumn,
                    classNameListItem
                } = this.props;
            const flagAddButton = state.tasks.find(task => task.title === listItemColumn)
                    
            return (
                <Fragment >
                    <Table
                    title={title}
                    tasks={state.tasks}
                    deleteTableElement={deleteTableElement}
                    />
                    { title === "backlog" ?
                    <Fragment>
                    <Input className={state.enabledInput ? 'inputOn' : "inputOff"}
                        value={state.inputValue}
                        onChange={onChangeInput}
                        onKeyPress={this.addTaskToEnter}
                    />
                    
                    <div className="button_box">
                        <Button
                            className="addTask"
                            value="+Add card"
                            id = "backlog"
                            type="backlog"
                            onClick = {onClickBtn}
                        />

                        <Button
                            className={state.enabledBtnSubmit ? 'btnSubmitOn' : "btnSubmitOff"}
                            value="Submit"
                            onClick ={onClickBtnSubmit}
                        />
                    </div>
                    </Fragment>
                     :
                     <Fragment>
                         <Dropdown
                            idDropdown ={idDropdown}
                            className={state.enabledDropdown && state.nameDropdown === title ? 'dropdownOn' : "dropdownOff"}
                            onClick ={onClickDropdown}
                        />
                                 
                        <div className={state.enabledListItem && state.nameListItem === idDropdown ? 'listItemOn' : "listItemOff"}>                     
                            {state.tasks.map((task, index)=> {
                                if (task.title === listItemColumn) {
                                    return (
                                        <ListItem 
                                        taskName={task.name}
                                        key={index}
                                        id={index}
                                        onClick={onClickListItem}
                                        classNameListItem={classNameListItem}
                                        />
                                    ) } else return null; 
                                } )}
                                
                        </div>

                        <div className="button_box">
                            <Button
                                className={flagAddButton ? "addTask" : "addTask addTaskOff"}
                                value="+Add card"
                                onClick ={onClickBtn}
                                id = {title}
                            />
                            
                        </div>
                     </Fragment>  
                    }
                </Fragment>
               
            )
        }
    }

export default Column;