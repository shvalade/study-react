import React from "react"

class MovieWillWatchItem extends React.Component {

  render() {
    const {movieTitle, movieRating} = this.props;

    return(
      <div className="d-flex justify-content-between">
        <div>
          {movieTitle}
        </div>
        <div>
          {movieRating}
        </div>
      </div>
    )
  }
}

export default MovieWillWatchItem
