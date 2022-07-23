import React, { Component } from "react";

import { movies } from "../movieData";

export class Favourites extends Component {
      constructor(){
       super();


       this.state ={
              genres : ['All Movies' , 'Action' , 'Comedy' , 'Romance']
       }
      }

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

    let movieData = movies.results;

    return (
      <div className="main">
        <div className="row">
          <div className="col-3">
            <ul class="list-group genre-selector">

              {this.state.genres.map((genre)=>(
                     <li style={{background : 'white' , color:' #3f51b5' , fontWeight:'bold'}} className='list-group-item'>{genre}</li>
              ))}
           
            </ul>
          </div>

          <div className="col-9 favourites-table">
              <div className="row">

                     <input type='text' placeholder="Search" className="input-group-text col"/>

                     <input type='number' className="input-group-text col"/>
              </div>
              <div className="row">
            <table class="table">
              <thead>
                <tr>
                 <th></th>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Ratings</th>
                </tr>
              </thead>
              <tbody>
                {movieData.map((movieObj) => (
                  <tr>
                     <td>
                            <img style={{width:'6rem'}} src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}/>
                     </td>
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
      </div>
    );
  }
}

export default Favourites;
