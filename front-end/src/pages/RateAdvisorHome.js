import React from "react"
import "../styles/RateAdvisorHome.css"
import SearchBar from '../components/SearchBar'
import BurgerMenu from "../components/BurgerMenu"


const RateAdvisorHome = props => {
  const filterOptions = ['CAS', 'Stern', 'Silver', 'Tandon', 'Academic', 'OGS'];
  return (
  <div className="RateAdvisorHome">
    <BurgerMenu/>  
    <section className="main-content"> 
      <p>
        Rate Advisor Home
        <br />
        <br />
      </p>
      <div className="search">
        <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/searchResult' isMentorMe={false} filterOptions={filterOptions}/>
      </div>
    </section>
  </div>
  )
}

export default RateAdvisorHome