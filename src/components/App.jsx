import React from 'react';
// import { moviesData } from "../moviesData"
import MovieItem from "./MovieItem"
import { API_URL, API_KEY_3 } from "../utils/api"
import MovieTabs from "./MovieTabs"
import MoviePages from "./MoviePages"
// console.log(moviesData);

//UI = f(state, props)

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1
      // titles: moviesData.map(a => a.title)

    };
    console.log("APP constuctor");
  }

  componentDidMount() {
    console.log("App didMount");

    this.getMovies();
  }

  componentDidUpdate (prevProps, prevState) {
    console.log("App didUpdate")
    // console.log("prev: ", prevProps, prevState);
    // console.log("this: ", this.props, this.state);

    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page
    ) {
      console.log("Call API");

      this.getMovies();
    }
  }

  getMovies() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then((response) => {
    //  console.log("response: ");
      return response.json()
    }).then((data) => {
    //  console.log("data: ", data);
      this.setState({
        movies: data.results
      })
    });
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    console.log(updateMovies);
    // this.state.movies = updateMovies

    this.setState({
      movies: updateMovies
    })
  }

  addMovieToWillWatch = movie => {
    // console.log(movie)

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

  updateSortBy = value => {

    this.setState({
      sort_by: value
    })
    // this.componentDidMount();
  }

  updateCurrPage = value => {
    this.setState({
      page: value
    })
  }



  render() {
  console.log("App render", this.state.sort_by);
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <MoviePages
                  currentPage={this.state.page}
                  updateCurrPage={this.updateCurrPage}
                />
              </div>
            </div>
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
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
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
