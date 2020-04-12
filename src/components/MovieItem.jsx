import React from "react"

class MovieItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      willWatch: props.willWatch
    };
  }

  render(){
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;

    const clickHandRemMovie = value => () => {
      this.setState({ willWatch: false });
      removeMovieFromWillWatch(movie);
    }

    const clickHandAddMovie = value => () => {
      this.setState({ willWatch: true });
      addMovieToWillWatch(movie);
    }

    const clickHandDelMovie = value => () => {
      removeMovieFromWillWatch(movie);
      removeMovie(movie);
    }

    return (
     <div className="card">
      <img
       className="card-img-top"
       src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path ||
             movie.poster_path}`}
       alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
           <p className="mb-0">Rating: {movie.vote_average}</p>
           {this.state.willWatch ? (
             <button
                type="button"
                className="btn btn-success"
                onClick={clickHandRemMovie()}
             >
              Remove Will Watch
             </button>
           ) : (
             <button
               type="button"
               className="btn btn-secondary"
               onClick={clickHandAddMovie()}
             >
               Add Will Watch
             </button>
           )}
        </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick = {clickHandDelMovie()}
          >
            Delete movie
          </button>
      </div>
     </div>
   )
  }
}

export default MovieItem;
