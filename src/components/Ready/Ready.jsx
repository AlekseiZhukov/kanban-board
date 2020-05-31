import React from 'react';
import TableElement from '../TableElement/TableElement';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

class Ready extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            tasks: [],
            disabledDropdown: false,
            disabledListItem: false,
            
        }
    }


    retrievingData = async () => {
        console.log('retrievingData');
        const data =  await JSON.parse(sessionStorage.getItem("data"));
        if (data) {
            this.setState({ tasks: data });
        } 
    }

    componentDidMount() {
        this.retrievingData();
    } 

    onClickBtn = () => {
        this.retrievingData();
        this.setState({
            disabledDropdown: true,
        });
    }

    onClickDropdown = () => {
        console.log('onClickDropdown')
        this.setState({
            disabledListItem: true
        });
    }


    onClickListItem =(event)=> {
        const {tasks} = this.state;
        const index = event.target.id;
        //const carentObj = tasks[index];
        this.setState({
            tasks: tasks
        })
        //const name = event.target.textContent;
          /* this.setState({
            tasks: [[index].title= 'redy',]
            
        }); */
        console.log('onClickListItem', tasks);
        //onsole.log('newTasks', newTasks);
            

    }

    render() {
        const { tasks, disabledDropdown, disabledListItem } = this.state;
        console.log('render', tasks)
        return (
            <div className="backlog">
                <div className="table">
                        {tasks.map((task, index)=> {
                            if (task.title === "ready") {
                                return ( 
                                    <TableElement 
                                    taskName={task.name}
                                    key={index}
                                    />
                                )
                            }
                            
                        } )}
                        
                    </div>

                <div className={disabledDropdown ? 'dropdownOn' : "dropdownOff"} onClick ={this.onClickDropdown} >
                    
                </div>
                <div className={disabledListItem ? 'listItemOn' : "listItemOff"}>                     
                        {tasks.map((task, index)=> {
                            if (task.title === "backlog")
                                return (
                                    <ListItem 
                                    taskName={task.name}
                                    key={index}
                                    id={index}
                                    onClick={this.onClickListItem}
                                    />
                                )
                            } )}
                            
                    </div>

                <div className="button_box">
                        <Button
                            className="addTask"
                            value="+Add card"
                            onClick ={this.onClickBtn}
                        />
                        
                     </div>

                
                

            </div>
        )
    }




}

export default Ready;