import React, { Component } from 'react';
import jamesbond from './Images/James Bond.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={jamesbond} alt='James Bond'/>
        <br/> <br/> <br/>
      <div className='container'>
      <div className='item'><h1>Black Mirror</h1></div>
      <div className='item'><h1>Breaking Bad</h1></div>
      <div className='item'><h1>Death Note</h1></div>
      </div>
      <div className='container'>
      <div className='item'><h1>Game of Thorns</h1></div>
      <div className='item'><h1>The Walking Dead</h1></div>
      <div className='item'><h1>The Wire</h1></div>
      </div>
      </div>
    );
  }
}

export default App;
