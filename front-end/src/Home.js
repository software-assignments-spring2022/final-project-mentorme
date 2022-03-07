import React from "react"
import { Link } from "react-router-dom"
import "./styles/Home.css"
import home from './images/1HOME.png'
import { Button } from "./components/Button";

const Home = props => {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={home} />
        <p>
          The home page
          <br />
          <br />
          <Link to="/rateAdvisor"><Button>Adivisor</Button></Link>
          <br />
          <br />

          <Link to="/mentorMe"><Button> Mentor</Button></Link>
        </p>
      </section>
    </div >
  )
}

export default Home
