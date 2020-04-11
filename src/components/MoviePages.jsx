import React from "react"

class MoviePages extends React.Component{
  constructor() {
    super();

  }

  render() {
    const { currentPage, updateCurrPage } = this.props
    const getClass = value => {
      return `nav-link ${ value > 1 ? "active" : "disabled"}`
    }
    // let testi = "qweqwe";
    return (
      <ul className="tabs nav nav-pills">
        <li>
          <div className="nav-item">
            <div
              className = {getClass(currentPage)}

              onClick = {() => {
                if(currentPage > 1){
                  updateCurrPage(currentPage - 1);
                } else {
                  console.log("First page!");
                }
              }}
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
              onClick={() => {
                updateCurrPage(currentPage + 1)
              }}
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
