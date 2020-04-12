import React from "react"

class MovieTabs extends React.Component{

  render() {
    const { sort_by, updateSortBy } = this.props

    const handleClick = value => () => value !== sort_by ? updateSortBy(value) : () => {return};

    const getClassLink = value => {
      console.log("change!");
      return `nav-link ${ sort_by === value ? "active" : "" }`
    };

    console.log("MovieTabs render!");

    return (
      <ul className="tabs nav nav-pills">
        <li>
          <div className="nav-item">
            <div
              className = { getClassLink("popularity.desc") }
              onClick = { handleClick("popularity.desc") }
            >
              Popularity desc
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className={ getClassLink("revenue.desc") }
              onClick={ handleClick("revenue.desc") }
            >
              Revenue desc
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className={ getClassLink("vote_average.desc") }
              onClick={ handleClick("vote_average.desc") }
            >
              Vote average desc
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default MovieTabs
