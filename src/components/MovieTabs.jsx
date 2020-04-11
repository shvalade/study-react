import React from "react"
// import ReactDOM from "react-dom"

class MovieTabs extends React.Component{
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("WillReceiveProps");
    console.log("nextProps sort_by: ", nextProps.sort_by);
    console.log("nextState sort_by: ", this.props.sort_by);

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.sort_by !== this.props.sort_by){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    const { sort_by, updateSortBy } = this.props

    const handleClick = value => () => { updateSortBy(value) };

    const getClassLink = value => {
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
