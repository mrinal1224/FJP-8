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
              {movieData.map((movie)=>(
                <div class="card movie-card">
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/slice_inception_movie_poster_banner_01.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              ))}
        </div>
      </>
    );
  }
}

export default MovieList;
