import React from 'react';
import Footer from './components/Footer/Footer';
import PageColumn from './components/PageColumn/PageColumn';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Column from './components/Column/Column';
import './App.css';
import { HashRouter as Router, Route, Switch, Link} from "react-router-dom";

 
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

    /*handleClickOutside = (event) => {
        console.log(event.target);
      /*  if (event.target.class === "conteiner") {
          
          this.setState({
            enabledListItem: false,
            enabledDropdown: false,
          })
      
      }   
  }*/

  

  componentDidMount () {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'));
    if (oldTasks) {
    this.setState ({
      tasks: oldTasks,
    })}
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  
  
  componentDidUpdate () {
    const saveTasks = JSON.stringify(this.state.tasks)
    localStorage.setItem('tasks', saveTasks);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}

  clearLocalStorage = () => {
    localStorage.removeItem('tasks')
    this.setState ({
      tasks: [],
    })
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
    //console.log(event.target.id);
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
    
    const {inputValue, tasks, textAreaValue} = this.state;
    const id = event.target.id;
    const date = new Date().toUTCString();
    //const saveTasks = JSON.stringify(this.state.tasks)
    if (id) {
      tasks.map((task, index) => {
        if (+id === index) {
          task.description = textAreaValue;
          this.setState({
            textAreaValue: ''
          })
          return alert('Сохранено')
        } else return null
      })
    } else {

        this.setState({
            tasks: [...tasks, {title: "backlog", name: inputValue, description: '', date: date, } ],
            inputValue: '',
            enabledInput: false,
            enabledBtnSubmit: false,
            enabledDropdown: false,
            
    });
    
    
    }
    
  }

  onClickTitle =(event) => {
    const name = event.target.textContent;
    this.setState({
      showPageColumn: true,
      namePageColumn: name,
    })
    
  }

  

  render() {
    
    return (
      
      <div className="wrapper">
            <header className="header">
              <Header />
            </header>
        <Router>
                  
          <Switch>
               <Route path="/backlog">
        
                  <PageColumn
                    textareaHandleChange = {this.textareaHandleChange}
                    title = "Backlog"
                    tasks={this.state.tasks}
                    onClickBtn={this.onClickBtn}
                    onClickBtnSubmit = {this.onClickBtnSubmit}
                  />  
                  
                </Route>

                <Route path="/ready">
                
                  <PageColumn
                    //match = {match}
                    textareaHandleChange = {this.textareaHandleChange}
                    title = "Ready"
                    tasks={this.state.tasks}
                    onClickBtn={this.onClickBtn}
                    onClickBtnSubmit = {this.onClickBtnSubmit}
                  /> 
                
                </Route>

                <Route path="/inprogress">
                
                  <PageColumn
                    textareaHandleChange = {this.textareaHandleChange}
                    title = "In Progress"
                    tasks={this.state.tasks}
                    onClickBtn={this.onClickBtn}
                    onClickBtnSubmit = {this.onClickBtnSubmit}
                  /> 
                
                </Route>

                <Route path="/finished">
                
                  <PageColumn
                    textareaHandleChange = {this.textareaHandleChange}
                    title = "Finished"
                    tasks={this.state.tasks}
                    onClickBtn={this.onClickBtn}
                    onClickBtnSubmit = {this.onClickBtnSubmit}
                  /> 
                
                </Route>
                 
                <Route path="/" exact>
                  
                  <div className="conteiner">
                      <div className="block">
                      <Link className="activeLink" to="/backlog"><h1>Backlog</h1></Link>
                        <Column
                          state={this.state}
                          title="backlog"
                          onClickBtn={this.onClickBtn}
                          onClickBtnSubmit={this.onClickBtnSubmit}
                          onChangeInput={this.onChangeInput}
                          deleteTableElement={this.deleteTableElement}
                          
                        />
                      </div>

                      <div className="block">
                      <Link className="activeLink" to="/ready"><h1>Ready</h1></Link>
                        <Column
                          title="ready"
                          idDropdown ="dropdownReady"
                          listItemColumn="backlog"
                          classNameListItem="listItemReady"
                          state={this.state}
                          onClickBtn = {this.onClickBtn}
                          onClickDropdown = {this.onClickDropdown}
                          onClickListItem = {this.onClickListItem}
                          deleteTableElement={this.deleteTableElement}
                        />
                      </div>

                      <div className="block">
                      <Link className="activeLink" to="/inprogress"><h1>In Progress</h1></Link>
                        <Column
                          title="inprogress"
                          idDropdown="dropdownInProgress"
                          listItemColumn="ready"
                          classNameListItem="listItemInprogress"
                          state={this.state}
                          onClickBtn = {this.onClickBtn}
                          onClickDropdown = {this.onClickDropdown}
                          onClickListItem = {this.onClickListItem}
                          deleteTableElement={this.deleteTableElement}
                        />
                      </div>

                      <div className="block">
                      <Link className="activeLink" to="/finished"><h1>Finished</h1></Link>
                        <Column
                            title="finished"
                            idDropdown="dropdownFinished"
                            listItemColumn="inprogress"
                            classNameListItem="listItemFinished"
                            state={this.state}
                            onClickBtn = {this.onClickBtn}
                            onClickDropdown = {this.onClickDropdown}
                            onClickListItem = {this.onClickListItem}
                            deleteTableElement={this.deleteTableElement}
                          />
                      </div> 
                      
                  </div>
                  
                </Route>
              
          </Switch>
        </Router>
                <div className="container_btn">
                <Button
                        className="delTasks"
                        value="Del all tasks"
                        onClick = {this.clearLocalStorage}
                      />
                </div>

                <footer className="footer">
                  <Footer tasks={this.state.tasks}   />
                </footer>

      </div>  
    
    )
  }
}
 

export default App;
