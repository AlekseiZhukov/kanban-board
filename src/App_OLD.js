import React from 'react';
import Backlog from './components/Backlog/Backlog';
import Ready from './components/Ready/Ready';
import InProgress from './components/InProgress/InProgress';
import Finished from './components/Finished/Finished';
import Footer from './components/Footer/Footer';
import PageColumn from './components/PageColumn/PageColumn'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";




 
class App extends React.Component {
    constructor (props) {
      super(props);
      this.state= {
        tasks: [],
        enabledInput: false,
        enabledBtnSubmit: false,
        inputValue: '',
        textAreaValue:'',
        enabledDropdown: false,
        enabledListItem: false,
        enableAddButton: false,
        nameAddButton: '',
        nameDropdown: '',
        nameListItem: '',
        activeTasks: 0,
        finishedTasks: 0,
        showPageColumn: false,
        namePageColumn:'',
        
      }
     
    }


  onChangeInput = (event) => {
    
    this.setState({
        inputValue: event.target.value,
        enabledBtnSubmit: true,
    })
  }

  textareaHandleChange = (event) => {
    this.setState({
      textAreaValue: event.target.value
    })
  }

  deleteTableElement = (event) => {
    
    const idElem = event.target.id;
    
    this.state.tasks.splice(+idElem, 1);
    
    this.setState({
      tasks: this.state.tasks,
    })
    
  }

  

  onClickBtn =(event) => {
    const {tasks} = this.state;
    //console.log(type);
    console.log(event.target.id);
    if (event.target.id === "backlog") {
      this.setState({
        enabledInput: true,

      });
    } if (event.target.id === "ready") {

      tasks.forEach ((item) => {
        if (item.title === "backlog") {
           this.setState ({
            enabledDropdown: true,
            nameDropdown: "ready"
            });
          } 
        });
    } if (event.target.id === "inprogress") {
      tasks.forEach((item) => {
        if(item.title === "ready") {
          this.setState({
            enabledDropdown: true,
            nameDropdown: "inprogress"
          })
        }
      })
    } if (event.target.id === "finished") {
      tasks.forEach((item) => {
        if(item.title === "inprogress") {
          this.setState({
            enabledDropdown: true,
            nameDropdown: "finished"
          })
        }
      })
    } if (event.target.id === "btnClosePageColumn"){
      this.setState ({
        showPageColumn: false,
        namePageColumn: '',
      })
    } else return null
   
  }

  onClickDropdown = (event) => {
    
    this.setState({
      enabledListItem: true,
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
        enabledListItem: false,
        enabledDropdown: false,
        
    });
    
}


  onClickBtnSubmit =(event)=> {
    console.log('onClickBtnSubmit')
    const {inputValue, tasks, textAreaValue} = this.state;
    const id = event.target.id;
    const date = new Date().toUTCString();
    if (id) {
      tasks.map((task, index) => {
        if (+id === index) {
          task.description = textAreaValue;
          this.setState({
            textAreaValue: ''
          })
          return alert('Сохранено')
        }
      })
    } else {
        this.setState({
            tasks: [...tasks, {title: "backlog", name: inputValue, description: '', date: date, } ],
            inputValue: '',
            enabledInput: false,
            enabledBtnSubmit: false,
            enabledDropdown: false,
            
    });}
    
  }

  onClickTitle =(event) => {
    const name = event.target.textContent;
    this.setState({
      showPageColumn: true,
      namePageColumn: name,
    })
    console.log(event.target.textContent);
  }

  

  render() {
    const showPageColumn = this.state.showPageColumn;
    let match = useRouteMatch();
    return (
      
      <div className="wrapper">
        
        
              <header className="header">
                  
              </header>
        <Router>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                      <Link to="/columns">Topics</Link>
                    </li>
                  </ul>
          <Switch>
            
              
              {showPageColumn ? 
                <Route path="/columns/">
                  <PageColumn
                    match = {match}
                    textareaHandleChange = {this.textareaHandleChange}
                    title = {this.state.namePageColumn}
                    tasks={this.state.tasks}
                    onClickBtn={this.onClickBtn}
                    onClickBtnSubmit = {this.onClickBtnSubmit}
                  />
                </Route>
              :   
                <Route path="/" exact>
                  <div className="conteiner">
                      <div className="block">
                      <h1 onClick={this.onClickTitle}>Backlog</h1>
                        <Backlog
                          state={this.state}
                          onClickBtn={this.onClickBtn}
                          onClickBtnSubmit={this.onClickBtnSubmit}
                          onChangeInput={this.onChangeInput}
                          
                        />
                      </div>

                      <div className="block">
                        <h1 onClick={this.onClickTitle}>Ready</h1>
                        <Ready
                          state={this.state}
                          onClickBtn = {this.onClickBtn}
                          onClickDropdown = {this.onClickDropdown}
                          onClickListItem = {this.onClickListItem}
                        />
                      </div>

                      <div className="block">
                        <h1 onClick={this.onClickTitle}>In Progress</h1>
                        <InProgress
                          state={this.state}
                          onClickBtn = {this.onClickBtn}
                          onClickDropdown = {this.onClickDropdown}
                          onClickListItem = {this.onClickListItem}
                        />
                      </div>

                      <div className="block">
                        <h1 onClick={this.onClickTitle}>Finished</h1>
                        <Finished
                            state={this.state}
                            onClickBtn = {this.onClickBtn}
                            onClickDropdown = {this.onClickDropdown}
                            onClickListItem = {this.onClickListItem}
                          />
                      </div> 
                  </div>
                </Route>
              }
          </Switch>
        </Router>
                <footer className="footer">
                  <Footer tasks={this.state.tasks}   />
                </footer>
            
          
        
      </div>  
    
    )
  }
}
 



export default App;
