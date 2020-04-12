import React from "react"

class MoviePages extends React.Component{



  render() {
    const {
      currentPage,
      updateCurrPage
    } = this.props

    const getClass = value => {
      return `nav-link ${ value > 1 ? "active" : "disabled"}`
    }

    const clickHandPrev = value => () => {
      if(currentPage > 1){
        updateCurrPage(currentPage - 1);
      }
    }

    const clickHandNext = value => () => {
      updateCurrPage(currentPage + 1);
    }

    return (
      <ul className="tabs nav nav-pills">
        <li>
          <div className="nav-item">
            <div
              className = {getClass(currentPage)}
              onClick = {clickHandPrev()}
            >
              Prev
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-link disabled">
              Page #{currentPage}
            </div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div
              className="nav-link active"
              onClick={clickHandNext()}
            >
              Next
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoviePages
