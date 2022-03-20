import React from "react"
import { Link } from "react-router-dom"
import "../styles/RateAdvisorHome.css"
import SearchBar from '../components/SearchBar'
import BurgerMenu from "../components/BurgerMenu"
import Filter from '../components/Filter'


const RateAdvisorHome = props => {
  const filterOptions = ['a', 'b']
  return (
  
  <div className="RateAdvisorHome">
   
      <section className="main-content"> 
      <BurgerMenu/>
        <p>
          Rate Advisor Home
          <br />
          <br />
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