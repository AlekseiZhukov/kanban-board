import React from 'react';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';


class PageColumn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tasksDescription: false,
            taskId: '',
        }
        this.onClickListItem = this.onClickListItem.bind(this);
        this.onClickCloseBtn = this.onClickCloseBtn.bind(this);
    }


    onClickListItem (event) {
        const taskId = event.target.id;
        this.setState({
            tasksDescription: true,
            taskId: taskId
        })
    }

    onClickCloseBtn () {
        this.setState({
            tasksDescription: false
        })
    }
    render () {
        const {title, tasks, onClickBtn, onClickBtnSubmit, textareaHandleChange } = this.props
        const {tasksDescription, taskId}= this.state
        return (
            <div className ="pageColumn">
                
                    <h1>{title}</h1>
                    <Button
                        value = "X"
                        className = "closeBtnPageColumn"
                        onClick = {onClickBtn}
                        id = "btnClosePageColumn"
                    />
                
            {tasksDescription ?
                <div className="pageColumn_task">
                    <h2>{tasks[taskId].name}</h2>
                    <p>task created: {tasks[taskId].date}</p> 
                    <textarea
                        defaultValue = {tasks[taskId].description}
                        onChange={textareaHandleChange}
                        id={this.state.taskId}
                        className="pageColumn_task__textarea"
                      
                      />
                    <div className="button_box">                   
                        <Button 
                            value = "Submit"
                            onClick ={onClickBtnSubmit}
                            id={this.state.taskId}
                        />

                        <Button 
                            value = "Close"
                            onClick ={this.onClickCloseBtn}
                            
                        />
                    </div>
                </div> :
                <div>
                    {tasks.map((task, index)=> {
                        if (task.title === title.toLowerCase().replace(/\s/,'')) {
                            return (
                                <ListItem 
                                    taskName={task.name}
                                    key={index}
                                    id={index}
                                    onClick={this.onClickListItem}
                                    className="listItemPageColumn"
                                    date = {task.date}
                                />
                                
                            )
                            
                        } else return null; 
                    })}
                    
                    
                </div>

            }
            </div>
        )
    }
}

export default PageColumn;