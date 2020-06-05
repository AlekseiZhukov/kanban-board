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
                    title="finished"
                    tasks={state.tasks}

                />

                <Dropdown
                    id ="dropdownFinished"
                    className={state.disabledDropdown && state.nameDropdown === "finished" ? 'dropdownOn' : "dropdownOff"}
                    onClick ={onClickDropdown}
                />

                <div className={state.disabledListItem && state.nameListItem === "dropdownFinished" ? 'listItemOn' : "listItemOff"}>                     
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
                            className="addTask"
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