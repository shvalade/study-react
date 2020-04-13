import React from 'react';
// import { moviesData } from "../moviesData"
import MovieItem from "./MovieItem"
import { API_URL, API_KEY_3 } from "../utils/api"
import MovieTabs from "./MovieTabs"
import MoviePages from "./MoviePages"
import MovieWillWatchItem from "./MovieWillWatchItem"
// console.log(moviesData);

//UI = f(state, props)

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      totalPages: 500
    };
    console.log("APP constuctor");
  }

  componentDidMount() {
    console.log("App didMount");
    this.getMovies();
  }

  componentDidUpdate (prevProps, prevState) {
    console.log("App didUpdate")

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
      return response.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    });
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    //console.log(updateMovies);
    this.setState({
      movies: updateMovies
    })
  }

  addMovieToWillWatch = movie => {
    const updateMoviesToWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesToWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const updatemoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    })
    this.setState({
      moviesWillWatch: updatemoviesWillWatch
    })
  }

  updateSortBy = (value1, value2 = 1) => {
    this.setState({
      sort_by: value1,
      page: value2
    })
  }

  updateCurrPage = value => {
    this.setState({
      page: value
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                  updateCurrPage={this.updateCurrPage}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <MoviePages
                  currentPage={this.state.page}
                  updateCurrPage={this.updateCurrPage}
                  totalPages={this.state.totalPages}
                />
              </div>
            </div>
            <div className="row">
            { this.state.movies.map(movie => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      key={movie.id}
                      willWatch={this.state.moviesWillWatch.find(
                        x => x.id === movie.id
                      )}
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
            <ul className="list-group">
            {
              this.state.moviesWillWatch.map(movie => {
                return (
                  <li className="list-group-item" key={movie.id}>
                    <MovieWillWatchItem
                      key={movie.id}
                      movieTitle={movie.title}
                      movieRating={movie.vote_average}
                    />
                  </li>
                );
              })
            }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
