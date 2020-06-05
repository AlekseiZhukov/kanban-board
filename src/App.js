import React from 'react';
import Backlog from './components/Backlog/Backlog';
import Ready from './components/Ready/Ready';
import InProgress from './components/InProgress/InProgress';
import Finished from './components/Finished/Finished';
import './App.css';




 
class App extends React.Component {
    constructor (props) {
      super(props);
      this.state= {
        tasks: [],
        disabledInput: false,
        disabledBtnSubmit: false,
        inputValue: '',
        disabledDropdown: false,
        disabledListItem: false,
        nameDropdown: '',
        nameListItem: '',
        
      }
    }

  onChangeInput = (event) => {
    
    this.setState({
        inputValue: event.target.value,
        disabledBtnSubmit: true,
    })
  }

  deleteTableElement = (event) => {
    
    const idElem = event.target.id;
    
    this.state.tasks.splice(+idElem, 1);
    
    this.setState({
      tasks: this.state.tasks,
    })
    
  }

  

  onClickBtnAdd = (event) => {
    const {tasks} = this.state;
    
    if (event.target.id === "backlog") {
      this.setState({
        disabledInput: true,

      });
    } if (event.target.id === "ready") {
      tasks.forEach ((item) => {
        if (item.title === "backlog") {
           this.setState ({
             disabledDropdown: true,
             nameDropdown: event.target.id
            });
          } 
        });
    } if (event.target.id === "inprogress") {
      tasks.forEach((item) => {
        if(item.title === "ready") {
          this.setState({
            disabledDropdown: true,
            nameDropdown: event.target.id
          })
        }
      })
    } if (event.target.id === "finished") {
      tasks.forEach((item) => {
        if(item.title === "inprogress") {
          this.setState({
            disabledDropdown: true,
            nameDropdown: event.target.id
          })
        }
      })
    } else return null
        
  }

  onClickDropdown = (event) => {
    
    this.setState({
      disabledListItem: true,
      nameListItem: event.target.id
    })
    
    
        
  }

  onClickListItem =(event) => {
    const {tasks} = this.state
    const index = event.target.id;
    const className=event.target.className;
    tasks.map((task, id) => {
        if (id === +index && task.title === "backlog" && className === "listItemReady") {
          task.title = "ready";
          return null
        } if (id === +index && task.title === "ready" && className === "listItemInprogress") {
          task.title = "inprogress";
          return null
          
        } if (id === +index && task.title === "inprogress" && className === "listItemFinished" ){
          task.title = "finished";
          return null
          
        } else return null
    }); 
  
    this.setState({
        tasks: tasks,
        disabledListItem: false,
        disabledDropdown: false,
        
    });

}


  onClickBtnSubmit =()=> {
    
    const {inputValue, tasks} = this.state;
     
        this.setState({
            tasks: [...tasks, {title: "backlog", name: inputValue, description: '' } ],
            inputValue: '',
            disabledInput: false,
            disabledBtnSubmit: false,
            disabledDropdown: false,
            
    });
      
  }


  render() {
    
    return (
      <div>
        <header></header>
        <div className="conteiner">
          <div className="block">
            <h1>Backlog</h1>
            <Backlog
              state={this.state}
              onClickBtnAdd={this.onClickBtnAdd}
              onClickBtnSubmit={this.onClickBtnSubmit}
              onChangeInput={this.onChangeInput}
             

              />
          </div>
          <div className="block">
            <h1>Ready</h1>
            <Ready
              state={this.state}
              onClickBtnAdd = {this.onClickBtnAdd}
              onClickDropdown = {this.onClickDropdown}
              onClickListItem = {this.onClickListItem}
            />
          
          </div>
          <div className="block">
            <h1>In Progress</h1>
            <InProgress
              state={this.state}
              onClickBtnAdd = {this.onClickBtnAdd}
              onClickDropdown = {this.onClickDropdown}
              onClickListItem = {this.onClickListItem}
            />
          </div>
          <div className="block">
          <h1>Finished</h1>
          <Finished
              state={this.state}
              onClickBtnAdd = {this.onClickBtnAdd}
              onClickDropdown = {this.onClickDropdown}
              onClickListItem = {this.onClickListItem}
            />
          </div>

          
          
        </div>
        <footer></footer>
    </div>
    );
  }
}
 



export default App;
