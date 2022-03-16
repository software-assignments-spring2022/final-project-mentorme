import React from "react"
import { Link } from "react-router-dom"
import "./styles/IndividualProfile.css"
import image from './images/10 Individual Profile.png'
import { Button } from "./components/Button";
import { useLocation } from 'react-router-dom'


const IndividualProfile = props => {
  const location = useLocation();
  const imgSrc = location.state.imgSrc;
  return (
    <div className="IndividualProfile">
      <h1>Welcome!</h1>
      <img className="resize" src={imgSrc} alt="picture" />
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Individual Profile
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile/:individualChat"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--long'}> Chat </Button></Link>
        </p>
      </section>
    </div>
  )
}

export default IndividualProfile