import React from "react"
import { Link } from "react-router-dom"
import "./styles/RateAdvisorHome.css"
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'


const RateAdvisorHome = props => {
  const filterOptions = ['a', 'b']
  return (
    <div className="RateAdvisorHome">
      <h1>Welcome!</h1>
      <section className="main-content">
        <p>
          Rate Advisor Home
          <br />
          <br />
          <Link to="/rateAdvisor/:searchResult"><button>Search Result</button></Link>
          <Link to="/"><button>Back to homepage</button></Link>
        </p>
        <div className="search">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/:searchResult'/>
          <Filter options={filterOptions}/>
        </div>
      </section>
    </div>
  )
}

export default RateAdvisorHome