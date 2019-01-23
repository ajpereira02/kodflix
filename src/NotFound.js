import React from 'react';
import errormessage from './Images/error message.gif'
export default function NotFound() {
    return (
        <div>
            <h1>Ooops... the page doesn't exist :(</h1>
            <img src={errormessage} alt='page not found'></img>
        </div>
    )
}