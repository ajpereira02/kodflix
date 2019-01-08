import React, { Component } from 'react';
import blackmirror from './Images/Black Mirror.png';
import breakingbad from './Images/Breaking Bad.jpg';
import deathnote from './Images/Death Note.jpg';
import gameofthrones from './Images/Game of Thrones.jpg';
import thewalkingdead from './Images/The walking dead.jpg';
import thewire from './Images/The Wire.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <br /> <br /> <br />
        <div className='container'>
          <div className='item'>
          <h1>Black Mirror</h1>
            <img src={blackmirror} alt='Black Mirror' />
          </div>
          <div className='item'><h1>Breaking Bad</h1>
            <img src={breakingbad} alt='Breaking Bad' />
          </div>
          <div className='item'><h1>Death Note</h1>
            <img src={deathnote} alt='Death Note' />
          </div>
        </div>
        <div className='container'>
          <div className='item'><h1>Game of Thorns</h1>
            <img src={gameofthrones} alt='Game of Thrones' />
          </div>
          <div className='item'><h1>The Walking Dead</h1>
            <img src={thewalkingdead} alt='The walking dead' />
          </div>
          <div className='item'><h1>The Wire</h1>
            <img src={thewire} alt='The Wire' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
