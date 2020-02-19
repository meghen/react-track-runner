import React, {Component} from 'react';
import './App.css';
import Tracker from '../tracker/tracker';

class App extends Component {
  render () {
  return (
    <div className="App">
      <h1>React Track Runner</h1>
      <Tracker />
    </div>
  );
  }
}

export default App;
