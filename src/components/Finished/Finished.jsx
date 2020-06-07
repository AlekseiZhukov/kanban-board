import React, { Fragment } from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Dropdown from '../Dropdown/Dropdown';

class InProgress extends React.Component {


    render () {
        const { state, onClickBtnAdd, onClickListItem, onClickDropdown } = this.props;
        const flagAddButton = state.tasks.find(task => task.title === "inprogress")
        return (
            <Fragment>
                <Table
                    title="finished"
                    tasks={state.tasks}

                />

                <Dropdown
                    id ="dropdownFinished"
                    className={state.enabledDropdown && state.nameDropdown === "finished" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />

                <div className={state.enabledListItem && state.nameListItem === "dropdownFinished" ? 'listItemOn' : "listItemOff"}>                     
                        {state.tasks.map((task, index)=> {
                            if (task.title === "inprogress") {
                                return (
                                    <ListItem 
                                    taskName={task.name}
                                    key={index}
                                    id={index}
                                    onClick={onClickListItem}
                                    className="listItemFinished"
                                    />
                                ) } else return null; 
                            } )}
                            
                    </div>

                <div className="button_box">
                        <Button
                            className={flagAddButton ? "addTask" : "addTask addTaskOff"}
                            value="+Add card"
                            onClick ={onClickBtnAdd}
                            id="finished"
                        />
                        
                     </div>

            </Fragment>
        )

    }
}

export default InProgress;