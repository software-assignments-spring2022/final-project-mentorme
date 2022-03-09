import React from "react"
import { Link } from "react-router-dom"
import "../styles/IndividualChat.css"
import image from '../images/12 Individual Chat.png'
import { Button } from "../components/Button";


const IndividualChat = props => {
  return (
    <div className="IndividualChat">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Individual Chat with mentor
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile/:individualChat/:ratePage"><Button buttonStyle={"btn--danger--solid"} buttonSize={'btn--medium--long'}>End Chat and Rate</Button></Link>
        </p>
      </section>
    </div>
  )
}

export default IndividualChat