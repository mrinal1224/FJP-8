import React, { Component } from "react";

import {movies} from '../movieData'

export class Favourites extends Component {
  render() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };


    let movieData = movies.results

    return (
      <div className="main">
        <div className="row">
          <div className="col-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Comedy</li>
              <li class="list-group-item">Romance</li>
              <li class="list-group-item">Fantasy</li>
              <li class="list-group-item">Animation</li>
            </ul>
          </div>

          <div className="col-9 favourites-table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Ratings</th>
                </tr>
              </thead>
              <tbody>

              {movieData.map((movieObj)=>(
                      <tr>
                      <th scope="row">{movieObj.title}</th>
                      <td>{genreids[movieObj.genre_ids[0]]}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{movieObj.vote_average}</td>
                    </tr>
              ))}
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
