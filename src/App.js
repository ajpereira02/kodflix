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
            <img src={blackmirror} alt='Black Mirror' />
            <div className='overlay'>
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div className='item'>
            <img src={breakingbad} alt='Breaking Bad' />
            <div className='overlay'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div className='item'>
            <img src={deathnote} alt='Death Note' />
            <div className='overlay'>
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={gameofthrones} alt='Game of Thrones' />
            <div className='overlay'>
              <h1>Game of Thornes</h1>
            </div>
          </div>
          <div className='item'>
            <img src={thewalkingdead} alt='The walking dead' />
            <div className='overlay'>
              <h1>The Walking Dead</h1>
            </div>
          </div>
          <div className='item'>
            <img src={thewire} alt='The Wire' />
            <div className='overlay'>
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
