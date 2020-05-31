import React from 'react';
import Backlog from './components/Backlog/Backlog';
import Ready from './components/Ready/Ready';
import './App.css';




 
class App extends React.Component {
    constructor (props) {
      super(props);
      this.state= {
          
      }

}
  render() {
    return (
      <div>
        <header></header>
        <div className="conteiner">
          <div className="block">
            <h1>Backlog</h1>
            <Backlog />
          </div>
          <div className="block">
          <h1>Ready</h1>
          <Ready />
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
