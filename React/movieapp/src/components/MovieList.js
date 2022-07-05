import React, { Component } from "react";

import { movies } from "../movieData";

export class MovieList extends Component {
  render() {
    let movieData = movies.results;
    console.log(movieData);
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {movieData.map((movieElem) => (
            <div className="card movie-card">
              <img
                src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                className="card-img-top movie-img"
                alt="..."
                style={{ height: "40vh", width: "20vw" }}
              />

              <h5 class="card-title movie-title">{movieElem.original_title}</h5>
              <a href="#" class="btn btn-primary movies-button">
                Add to Favourites
              </a>
            </div>
          ))}
        </div>

        <div style={{display : 'flex' , justifyContent : 'center'}}>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MovieList;
