import React from 'react';
import { moviesData } from "../moviesData"
import MovieItem from "./MovieItem"
// console.log(moviesData);

//UI = f(state, props)

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
      // titles: moviesData.map(a => a.title)
    };
  }


  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    })
    console.log(updateMovies);
    // this.state.movies = updateMovies
    this.setState({
      movies: updateMovies
    })
  }

  addMovieToWillWatch = movie => {
    console.log(movie)

    // const updateMoviesToWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesToWillWatch.push(movie);

    const updateMoviesToWillWatch = [...this.state.moviesWillWatch, movie];
    // updateMoviesToWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesToWillWatch
    });

  };



  removeMovieFromWillWatch = movie => {
    const updatemoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    })
    // console.log(updateMovies);
    // this.state.movies = updateMovies
    this.setState({
      moviesWillWatch: updatemoviesWillWatch
    })
  }





  render() {
  console.log("render", this.state, this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
            { this.state.movies.map(movie => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  removeMovie={this.removeMovie}
                  addMovieToWillWatch={this.addMovieToWillWatch}
                  removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                />
                </div>
              );
            })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
     // return <div>{[<p>1</p>,<p>2</p>,<p>3</p>]}</div>
  }
}

// function App() {
//   return <div className="title" id="323" >{moviesData[0].title}</div>
// }

export default App;
