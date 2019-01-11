import React from 'react';
import TVShow from './TVShow';
import blackmirror from './Images/Black Mirror.png';
import breakingbad from './Images/Breaking Bad.jpg';
import deathnote from './Images/Death Note.jpg';
import gameofthrones from './Images/Game of Thrones.jpg';
import thewalkingdead from './Images/The walking dead.jpg';
import thewire from './Images/The Wire.png';
import './App.css';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        <TVShow id='black-mirror' name='Black Mirror' logo={blackmirror} />
        <TVShow id='breaking-bad' name='Breaking Bad' logo={breakingbad} />
        <TVShow id='death-note' name='Death Note' logo={deathnote} />
      </div>
      <div className='container'>
        <TVShow id='game-of-thrones' name='Game of Thrones' logo={gameofthrones} />
        <TVShow id='the-walking-dead' name='The Walking Dead' logo={thewalkingdead} />
        <TVShow id='the-wire' name='The Wire' logo={thewire} />
      </div>
    </div>
  )
}