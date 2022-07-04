import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
       <div className="card banner-card">
       <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/slice_inception_movie_poster_banner_01.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5" className="card-img-top banner-img" alt="..."/>
       
         <h5 className="card-title banner-title">Inception</h5>
         <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

       
     </div>
    )
  }
}

export default Banner


