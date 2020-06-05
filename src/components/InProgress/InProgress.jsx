import React, { Fragment } from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Dropdown from '../Dropdown/Dropdown';

class InProgress extends React.Component {


    render () {
        const { state, onClickBtnAdd, onClickListItem, onClickDropdown } = this.props;

        return (
            <Fragment>
                <Table
                    title="inprogress"
                    tasks={state.tasks}

                />

                <Dropdown
                    id ="dropdownInProgress"
                    className={state.disabledDropdown && state.nameDropdown === "inprogress" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />

                <div className={state.disabledListItem && state.nameListItem === "dropdownInProgress" ? 'listItemOn' : "listItemOff"}>                     
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
                            className="addTask"
                            value="+Add card"
                            onClick ={onClickBtnAdd}
                            id="inprogress"
                        />
                        
                     </div>

            </Fragment>
        )

    }
}

export default InProgress;