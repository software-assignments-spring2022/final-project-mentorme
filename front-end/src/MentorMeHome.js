import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/MentorMeHome.css"
import image from './images/8 Home Page Profile.png'
const MentorMeHome = props => {
  return (
    <div className="MentorMeHome">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src = {image} />
        <p>
           MentorMe home 
          <br />
          <br />
          <Link to="/mentorMe/profileDisplay">Profile Display! </Link>

          <Link to="/mentorMe/accountCentral">accountCentral! </Link>

          <Link to="/">Back to homepage!</Link>
        </p>
      </section>
    </div>
  )
}

export default MentorMeHome