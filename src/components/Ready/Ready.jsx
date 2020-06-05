import React, { Fragment } from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Dropdown from '../Dropdown/Dropdown';
class Ready extends React.Component {
    

    render() {
        const { state, onClickBtnAdd, onClickListItem, onClickDropdown } = this.props;
        
        return (
            <Fragment>
                <Table
                    title="ready"
                    tasks={state.tasks}

                    />

                <Dropdown
                    id ="dropdownReady"
                    className={state.disabledDropdown && state.nameDropdown === "ready" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />
                                 
                <div className={state.disabledListItem && state.nameListItem === "dropdownReady" ? 'listItemOn' : "listItemOff"}>                     
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
                            className="addTask"
                            value="+Add card"
                            onClick ={onClickBtnAdd}
                            id = "ready"
                        />
                        
                     </div>

            </Fragment>
        )
    }




}

export default Ready;