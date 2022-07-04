import React, { Component } from "react";


import {movies} from '../movieData'

export class MovieList extends Component {
  render() {

      let movieData = movies.results
      console.log(movieData)
    return (
      <>
      
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>


        <div className="movies-list">
              <ul>
                     {movieData.map((movie)=>(
                            <li><p>{movie.original_title}</p></li>
                     ))}
              </ul>
        </div>
      </>
    );
  }
}

export default MovieList;
