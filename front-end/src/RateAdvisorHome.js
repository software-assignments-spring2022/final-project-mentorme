import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/RateAdvisorHome.css"
import ratingHome from './images/4Advisor rating home.png'
const RateAdvisorHome = props => {
  return (
    <div className="RateAdvisorHome">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src = {ratingHome} />
        <p>
           Rate Advisor Home
          <br />
          <br />
          <Link to="/searchResult">Search Result!</Link>
        </p>
      </section>
    </div>
  )
}

export default RateAdvisorHome