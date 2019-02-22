import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getGallery from './Gallery-get';
import './Details.css';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      TVshow: []
    };
  }

  componentDidMount() {
    // let galleryId = this.props.match.params.galleryId;
    // // // let gallery = getGallery().find(function (gallery) {
    // //   return gallery.id === galleryId;
    
    // this.setState({
    //   gallery: gallery
    // });
    fetch('/rest/shows')
      .then( response => {
        return response.json();
      })
      .then(TVshow => {
        return TVshow.find(gallery => gallery.id);
      });

  }
  render() {
    if (this.state.gallery === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1 className='DetailsName'>{this.state.gallery.name}</h1>
          <div className='container' >
            <div>{this.state.gallery.details}</div>
            <img
              src={this.state.gallery.logo}
              alt={this.state.gallery.name} />
          </div>
          <Link to='/'>Back to home page</Link>
        </div >
      );
    }
  }
}
