import React from "react"
import "../styles/RateAdvisorHome.css"
import SearchBar from '../components/SearchBar'
import BurgerMenu from "../components/BurgerMenu"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../components/Button"


const RateAdvisorHome = props => {
  const filterOptions = ['CAS', 'Stern', 'Silver', 'Tandon', 'Academic', 'OGS'];
  return (
    <div className="RateAdvisorHome">
      <BurgerMenu />
      <section className="main-content">
        <h2>Rate Advisor Home</h2>
        <br />
        <div className="search">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/searchResult' isMentorMe={false} filterOptions={filterOptions} />
        </div>
        <Link to="searchResult/createAdvisor"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--medium'}>Didn't find your advisor ? Add an Advisor</Button></Link>

      </section>
    </div>
  )
}

export default RateAdvisorHome