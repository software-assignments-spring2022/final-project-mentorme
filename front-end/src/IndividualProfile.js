import React from "react"
import { Link } from "react-router-dom"
import "./styles/IndividualProfile.css"
import image from './images/10 Individual Profile.png'


const IndividualProfile = props => {
  return (
    <div className="IndividualProfile">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Individual Profile
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile/:individualChat"><button> chat </button></Link>
        </p>
      </section>
    </div>
  )
}

export default IndividualProfile