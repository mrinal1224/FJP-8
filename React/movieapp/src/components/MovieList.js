import React, { Component } from "react";

import axios from "axios";

export class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      hover: "",
      movies: [],
      currPage :1,
      parr : [1]
    };
  }


  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`
    );
    // console.log(res.data)

    let movieDataFromApi = res.data;

    this.setState({
      movies: [...movieDataFromApi.results],
    });
  }


  changeMovies = async()=>{
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`
    );
    // console.log(res.data)

    let movieDataFromApi = res.data;
    

    this.setState({
      movies: [...movieDataFromApi.results],
    });
  }


  IncrementPage = ()=>{
      this.setState({
        currPage : this.state.currPage+1
      } , this.changeMovies)
  }



  render() {
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {this.state.movies.map((movieElem) => (
            <div
              className="card movie-card"
              onMouseEnter={() => this.setState({ hover: movieElem.id })}
              onMouseLeave={() => this.setState({ hover: "" })}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                className="card-img-top movie-img"
                alt="..."
                style={{ height: "40vh", width: "20vw" }}
              />

              <h5 class="card-title movie-title">{movieElem.original_title}</h5>

              {this.state.hover == movieElem.id && (
                <a href="#" class="btn btn-primary movies-button">
                  Add to Favourites
                </a>
              )}
            </div>
          ))}
          <button onClick={this.IncrementPage}>Increment Page</button>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>

              {this.state.parr.map((value)=>{
                  <li class="page-item">
                  <a class="page-link" href="#">
                    {value}
                  </a>
                </li>
              })}

               
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
