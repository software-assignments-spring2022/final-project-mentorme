import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/ProfileDisplay.css"
import image from './images/9 Profiles.png'
const ProfileDisplay = props => {
  return (
    <div className="ProfileDisplay">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className = "image" alt="welcome!" src = {image} />
        <p>
            Profile Display 
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile">Individual Profile!</Link>
        </p>
      </section>
    </div>
  )
}

export default ProfileDisplay