import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/SearchResult.css"
import search from './images/5Search Result.png'
const SearchResult = props => {
  return (
    <div className="SearchResult">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className = "image" alt="welcome!" src = {search} />
        <p>
           Search results
          <br />
          <br />
          <Link to='/rateAdvisor/:searchResut/:commentsDisplay'>Comments Display!</Link>
        </p>
      </section>
    </div>
  )
}

export default SearchResult