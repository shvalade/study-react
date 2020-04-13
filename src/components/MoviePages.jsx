import React from "react"

class MoviePages extends React.Component{

  render() {
    const {
      currentPage,
      updateCurrPage,
      totalPages
    } = this.props

    const getClassPrev = value => {
      return `nav-link ${ value > 1 ? "active" : "disabled"}`
    }

    const getClassNext = value => {
      return `nav-link ${ value < 500 ? "active" : "disabled"}`
    }

    const clickHandler = value => () => {
      updateCurrPage(value);
    }
    // const clickHandPrev = value => (page) => {
    //   if(page > currentPage){
    //     updateCurrPage(currentPage + 1);
    //   } else if (page < currentPage) {
    //     updateCurrPage(currentPage - 1);
    //   }
    // }

    const clickHandNext = value => () => {
      updateCurrPage(currentPage + 1);
    }

    return (
      <ul className="nav nav-pills">
        <li>
          <div className="nav-item">
            <div
              className = {getClassPrev(currentPage)}
              onClick = {clickHandler(1)}
            >
              First
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className = {getClassPrev(currentPage)}
              onClick = {clickHandler(currentPage - 1)}
            >
              Prev
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-link disabled">
              Page {`${currentPage}/${totalPages}`}
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className={getClassNext(currentPage)}
              onClick={clickHandNext()}
            >
              Next
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className = {getClassNext(currentPage)}
              onClick = {clickHandler(totalPages)}
            >
              Last
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoviePages
