import React from 'react';

export default function TVShow(props) {
  return (
    <div className='item'>
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}