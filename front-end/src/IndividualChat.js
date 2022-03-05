import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/IndividualChat.css"
import image from './images/12 Individual Chat.png'
const IndividualChat = props => {
  return (
    <div className="IndividualChat">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className = "image" alt="welcome!" src = {image} />
        <p>
            Individual Chat with mentor 
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile/:individualChat/:ratePage">Rate mentor!</Link>
        </p>
      </section>
    </div>
  )
}

export default IndividualChat