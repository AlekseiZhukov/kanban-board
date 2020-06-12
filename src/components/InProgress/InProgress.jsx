import React, { Fragment } from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Dropdown from '../Dropdown/Dropdown';

class InProgress extends React.Component {

    
    render () {
        const { state, onClickBtn, onClickListItem, onClickDropdown, deleteTableElement } = this.props;
        const flagAddButton = state.tasks.find(task => task.title === "ready")
        return (
            <Fragment>
                <Table
                    title="inprogress"
                    tasks={state.tasks}
                    deleteTableElement = {deleteTableElement}

                />

                <Dropdown
                    id ="dropdownInProgress"
                    className={state.enabledDropdown && state.nameDropdown === "inprogress" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />

                <div className={state.enabledListItem && state.nameListItem === "dropdownInProgress" ? 'listItemOn' : "listItemOff"}>                     
                        {state.tasks.map((task, index)=> {
                            if (task.title === "ready") {
                                return (
                                    <ListItem 
                                    taskName={task.name}
                                    key={index}
                                    id={index}
                                    onClick={onClickListItem}
                                    className="listItemInprogress"
                                    />
                                ) } else return null; 
                            } )}
                            
                    </div>

                <div className="button_box">
                        <Button
                            className={flagAddButton ? "addTask" : "addTask addTaskOff"}
                            value="+Add card"
                            onClick ={onClickBtn}
                            id = "inprogress"
                        />
                        
                     </div>

            </Fragment>
        )

    }
}

export default InProgress;