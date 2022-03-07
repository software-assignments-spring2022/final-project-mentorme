import React from "react"
import { Link } from "react-router-dom"
import "./styles/RateAdvisorHome.css"
import ratingHome from './images/4Advisor rating home.png'
import SearchBar from './Search'


const RateAdvisorHome = props => {
  return (
    <div className="RateAdvisorHome">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={ratingHome} />
        <p>
          Rate Advisor Home
          <br />
          <br />
          <Link to="/rateAdvisor/:searchResult"><button>Search Result</button></Link>
          <Link to="/"><button>Back to homepage</button></Link>
        </p>
        <div class="search">
          <SearchBar label='Search Advisor:' navigateTo='/rateAdvisor/:searchResult'/>
        </div>
      </section>
    </div>
  )
}

export default RateAdvisorHome