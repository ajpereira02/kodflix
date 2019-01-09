import React, { Component } from 'react';
import TVShow from './TVShow';
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
          <TVShow name='Black Mirror' logo={blackmirror} />
          <TVShow name='Breaking Bad' logo={breakingbad} />
          <TVShow name='Death Note' logo={deathnote} />
        </div>
        <div className='container'>
          <TVShow name='Game of Thrones' logo={gameofthrones} />
          <TVShow name='The Walking Dead' logo={thewalkingdead} />
          <TVShow name='The Wire' logo={thewire} />
        </div>
      </div>
    );
  }
}
export default App;
