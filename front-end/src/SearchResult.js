import React from "react"
import { Link } from "react-router-dom"
import "./styles/SearchResult.css"
import search from './images/5Search Result.png'
import SearchBar from './components/SearchBar'


const SearchResult = props => {
  return (
    <div className="SearchResult">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={search} />
        <p>
          Search results
          <br />
          <br />
          <Link to='/rateAdvisor/:searchResut/:commentsDisplay'><button>Comments Display!</button></Link>
        </p>
        <div className="search">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/:searchResult'/>
        </div>
      </section>
    </div>
  )
}

export default SearchResult