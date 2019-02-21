import React from 'react';
import { Link } from 'react-router-dom';

export default function TVShow(props) {
  return (
    <Link to={`/${props.id}`} className='item'>
    <img src={require(`./Images/${props.id}.jpg`)} alt='' />
      <div className='overlay'>
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
}