import React from 'react';
import Backlog from './components/Backlog/Backlog';
//import Ready from './components/Ready/Ready';
import './App.css';




 
class App extends React.Component {
    constructor (props) {
      super(props);
      this.state= {
        tasks: [{title: "backlog", name: 'test', description: '' }],
                
    }

}

updateTasks = (value) => {
  this.setState({tasks: value})
}



  render() {
    return (
      <div>
        <header></header>
        <div className="conteiner">
          <div className="block">
            <h1>Backlog</h1>
            <Backlog
             tasks={this.state.tasks}
             updateTasks={this.updateTasks}
              />
          </div>
          <div className="block">
          <h1>Ready</h1>
          
          </div>
          <div className="block">
          <h1>In Progress</h1>
          
          </div>
          <div className="block">
          <h1>Finished</h1>
          
          </div>

          
          
        </div>
        <footer></footer>
    </div>
    );
  }
}
 



export default App;
