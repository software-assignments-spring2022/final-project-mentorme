import React from "react"
import { Link } from "react-router-dom"
import "./styles/RateAdvisorHome.css"
import SearchBar from './components/SearchBar'
import BurgerMenu from "./components/BurgerMenu"

const RateAdvisorHome = props => {
  return (
  
  <div className="RateAdvisorHome"><BurgerMenu/>
      <section className="main-content">
        <p>
          Rate Advisor Home
          <br />
          <br />
          <Link to="/"><button>Back to homepage</button></Link>
        </p>
        <div className="search">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/:searchResult'/>
        </div>
      </section>
    </div>
    
  )
}

export default RateAdvisorHome