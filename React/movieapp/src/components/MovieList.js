import React, { Component } from "react";



import axios from 'axios'



export class MovieList extends Component {
  constructor() {
    super();

    console.log('Constructor first')

    this.state = {
      hover: "",
      movies: [],
      parr : [1],
      currPage : 1
    };
  }

  // Component did mount will only work once in the lifecyle of a component
  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`)
    const movieDataApi = res.data.results

    this.setState({
      movies : [...movieDataApi]
    })

    console.log('Mounting third')
  }

 // we created another method to update the state
  changePage = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`)
    const movieDataApi = res.data.results

    this.setState({
      movies : [...movieDataApi]
    })

  }


  handleNext =()=>{
    let tempArr = []

    for(let i=1 ; i<=this.state.parr.length+1 ; i++){
      tempArr.push(i)
    }


    console.log(tempArr)

    this.setState({
            parr:[...tempArr],
            currPage : this.state.currPage+1
    } , this.changePage)
  }


  render() {

    console.log('render second')
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
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item ">
                <a class="page-link">Previous</a>
              </li>

              {this.state.parr.map((value)=>(
               <li class="page-item">
               <a class="page-link">{value}</a>
             </li>
              ))}
              <li class="page-item">
                <a class="page-link" href="#" onClick={this.handleNext}>
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
