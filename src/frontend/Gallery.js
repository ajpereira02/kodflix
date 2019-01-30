import React from 'react';
import TVShow from './TVShow'
import getGallery from './Gallery-get';
import './App.css';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(show => (
            <TVShow 
            key={show.id}
            id={show.id} 
            name={show.name} 
            logo={show.logo} />
        ))
        }
      </div>
    </div>
  );
}
