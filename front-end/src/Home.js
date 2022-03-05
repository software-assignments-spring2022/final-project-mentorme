import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/Home.css"
import home from './images/1HOME.png'
const Home = props => {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src = {home} />
        <p>
            The home page 
          <br />
          <br />
          <Link to="/rateAdvisor">Rate an advisor!</Link>
          <Link to="/mentorMe">Mentor Me!</Link>
        </p>
      </section>
    </div>
  )
}

export default Home
