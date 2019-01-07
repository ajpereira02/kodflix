import React, { Component } from 'react';
import jamesbond from './James Bond.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={jamesbond} alt='James Bond'/>
      </div>
    );
  }
}

export default App;
