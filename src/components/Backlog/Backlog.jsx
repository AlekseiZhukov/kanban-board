import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TableElement from '../TableElement/TableElement';
import './style.css';

class Backlog extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            tasks: [],
            disabledInput: false,
            disabledBtnSubmit: false,
            inputValue: '',
        }
    }

        onChangeInput = (event) => {
            //console.log(event.target.value);
            this.setState({
                inputValue: event.target.value,
                disabledBtnSubmit: true,
            })
        }

        onClickBtn = () => {
            this.setState({
                disabledInput: true,
                 
            });
        }
        
        onClickBtnSubmit =()=> {
            const {inputValue, tasks} = this.state;
                this.setState({
                    tasks: [...tasks, inputValue ],
                    inputValue: '',
                    disabledInput: false,
                    disabledBtnSubmit: false,
            });
            

        }
        addTaskToEnter = (event) => {
            if (event.key === 'Enter') {
                this.onClickBtnSubmit()
            }  
        }
   

        render() {
            const {disabledInput, inputValue, tasks, disabledBtnSubmit} = this.state;
            
            return (
                <div className="backlog">
                    <div className="table">
                        {tasks.map((task, index)=> {
                            return (
                                <TableElement 
                                taskName={task}
                                key={index}
                                />
                            )
                        } )}
                        
                    </div>

                    <Input className={disabledInput ? 'inputOn' : "inputOff"}
                       value={inputValue}
                       onChange={this.onChangeInput}
                       onKeyPress={this.addTaskToEnter}
                       
                     />
                    <div className="button_box">
                        <Button
                            className="addTask"
                            value="+Add card"
                            onClick ={this.onClickBtn}
                        />

                        <Button
                            className={disabledBtnSubmit ? 'btnSubmitOn' : "btnSubmitOff"}
                            value="Submit"
                            onClick ={this.onClickBtnSubmit}
                        />
                     </div>

                </div>
            )
        }
    }

export default Backlog;