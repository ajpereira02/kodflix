import React, { Component } from "react";
import TVShow from "./TVShow";
import "./App.css";

// import getGallery from "./Gallery-get";
export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("/rest/shows")
      .then(function(response) {
        return response.json();
      })
      .then(movies => {
        this.setState({ movies: movies });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.movies.map(movies => (
            <TVShow id={movies.id} name={movies.name} />
          ))}
        </div>
      </div>
    );
  }
}
