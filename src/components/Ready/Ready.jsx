import React, { Fragment } from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Dropdown from '../Dropdown/Dropdown';
class Ready extends React.Component {
    

    render() {
        const { state, onClickBtn, onClickListItem, onClickDropdown, deleteTableElement } = this.props;
        const flagAddButton = state.tasks.find(task => task.title === "backlog")
        return (
            <Fragment>
                <Table
                    title="ready"
                    tasks={state.tasks}
                    deleteTableElement = {deleteTableElement}

                    />

                <Dropdown
                    id ="dropdownReady"
                    className={state.enabledDropdown && state.nameDropdown === "ready" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />
                                 
                <div className={state.enabledListItem && state.nameListItem === "dropdownReady" ? 'listItemOn' : "listItemOff"}>                     
                        {state.tasks.map((task, index)=> {
                            if (task.title === "backlog") {
                                return (
                                    <ListItem 
                                    taskName={task.name}
                                    key={index}
                                    id={index}
                                    onClick={onClickListItem}
                                    className="listItemReady"
                                    />
                                ) } else return null; 
                            } )}
                            
                    </div>

                <div className="button_box">
                        <Button
                            className={flagAddButton ? "addTask" : "addTask addTaskOff"}
                            value="+Add card"
                            onClick ={onClickBtn}
                            id = "ready"
                        />
                        
                     </div>

            </Fragment>
        )
    }




}

export default Ready;