import React from "react"
import { Link } from "react-router-dom"
import "./styles/RatePage.css"
import image from './images/11 Rate.png'
import BurgerMenu from "./components/BurgerMenu"

const RatePage = props => {
  return (
    <div className="RatePage">
      <BurgerMenu/>
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Rate Mentor Page
          <br />
          <br />
          <Link to="/mentorMe"><button>Back to mentorMe home!</button></Link>
        </p>
      </section>
    </div>
  )
}

export default RatePage