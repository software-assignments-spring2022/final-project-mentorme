import React from "react"
import "../styles/RateAdvisorHome.css"
import SearchBar from '../components/SearchBar'
import BurgerMenu from "../components/BurgerMenu"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"


const RateAdvisorHome = props => {
  const filterOptions = ['CAS', 'Stern', 'Silver', 'Tandon', 'Steinhardt'];
  return (
    <div className="RateAdvisorHome">
      <BurgerMenu />
      <section className="ratehome">
        <h2>Rate Advisor Home</h2>
        <br />
        <div className="searchBar">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/searchResult' isMentorMe={false} filterOptions={filterOptions} />
        </div>
        <br />
        <Link to="searchResult/createAdvisor"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--medium'}>Create a profile for your Advisor!</Button></Link>

      </section>
    </div>
  )
}

export default RateAdvisorHome