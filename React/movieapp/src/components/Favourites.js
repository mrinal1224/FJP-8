import React, { Component } from "react";

import { movies } from "../movieData";

export class Favourites extends Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      
      currGenre : 'All Genres',
      currText : '',
      movies: [],
    };
  }

  componentDidMount() {
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

    let data = JSON.parse(localStorage.getItem("movies-test") || "[]");

    let tempArr = [];

    data.map((movieObj) => {
      if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
        tempArr.push(genreids[movieObj.genre_ids[0]]);
      }
    });

    tempArr.unshift('All Genres')

    this.setState({
      movies: [...data],
      genres: [...tempArr],
    });
  }

  handleGenreChange =(genre)=>{
       this.setState({
              currGenre : genre
       })

      
  }

  sortPopularityDesc=()=>{
    let temp = this.state.movies
    temp.sort(function(objA , objB){
        return objB.popularity-objA.popularity
    })

    this.setState({
      movies : [...temp]
    })
  }


  sortPopularityAsc=()=>{
    let temp = this.state.movies
    temp.sort(function(objA , objB){
        return objA.popularity-objB.popularity
    })

    this.setState({
      movies : [...temp]
    })
  }


  sortRatingsDesc=()=>{
    let temp = this.state.movies
    temp.sort(function(objA , objB){
        return objB.vote_average-objA.vote_average
    })

    this.setState({
      movies : [...temp]
    })
  }


  sortRatingsAsc=()=>{
    let temp = this.state.movies
    temp.sort(function(objA , objB){
        return objA.vote_average-objB.vote_average
    })

    this.setState({
      movies : [...temp]
    })
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

   let filterArr =[]

    

   if(this.state.currText===''){
    filterArr = this.state.movies
   }

   else{
      filterArr = this.state.movies.filter((movieObj)=>{
        
           let title = movieObj.title.toLowerCase();
           return title.includes(this.state.currText.toLowerCase())
      })
   }

   if(this.state.currGenre!='All Genres'){
    filterArr= this.state.movies.filter((movieObj)=> genreids[movieObj.genre_ids[0]]==this.state.currGenre)
  }

 

 
  

  

    return (
      <div className="main">
        <div className="row">
          <div className="col-3">
            <ul class="list-group genre-selector">
              {this.state.genres.map((genre) => this.state.currGenre==genre?
              (
                <li
                  style={{
                    background: "#3f51b5",
                    color: " white",
                    fontWeight: "bold",
                  }}
                  className="list-group-item"
                >
                  {genre}
                </li>
              ) : (
                     <li
                     style={{
                       background: "white",
                       color: "#3f51b5",
                       fontWeight: "bold",
                     }}
                     className="list-group-item"

                     onClick={()=>this.handleGenreChange(genre)}
                   >
                     {genre}
                   </li>
              ))}
            </ul>
          </div>

          <div className="col-9 favourites-table">
            <div className="row">
              <input
                type="text"
                placeholder="Search"
                className="input-group-text col"
                value={this.state.currText} onChange={(e)=> this.setState({currText :e.target.value})}

              />

              <input type="number" className="input-group-text col" />
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col"><i class="fa-solid fa-sort-up" onClick={this.sortPopularityDesc}></i>Popularity<i class="fa-solid fa-sort-down" onClick={this.sortPopularityAsc}></i></th>
                    <th scope="col"> <i class="fa-solid fa-sort-up" onClick={this.sortRatingsDesc}></i>Ratings <i class="fa-solid fa-sort-down" onClick={this.sortRatingsAsc}></i></th>
                  </tr>
                </thead>
                <tbody>
                  {filterArr.map((movieObj) => (
                    <tr>
                      <td>
                        <img
                          style={{ width: "6rem" }}
                          src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        />
                      </td>
                      <th scope="row">{movieObj.title}</th>
                      <td>{genreids[movieObj.genre_ids[0]]}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{movieObj.vote_average}</td>

                      <td>
                      <button type="button" class="btn btn-danger">Delete</button>
                      </td>
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
