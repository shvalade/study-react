import React from "react"
// import ReactDOM from "react-dom"

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props

  const handleClick = value => () => { updateSortBy(value) };

  const getClassLink = value => {
    return `nav-link ${ sort_by === value ? "active" : "" }`
  };

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

export default MovieTabs
