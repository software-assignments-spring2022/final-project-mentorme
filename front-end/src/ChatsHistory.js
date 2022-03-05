import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/ChatsHistory.css"
import image from './images/14 All Chats.png'
const ChatsHistory = props => {
  return (
    <div className="ChatsHistory">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src = {image} />
        <p>
            ChatsHistory
          <br />
          <br />
          <Link to="/mentorMe">BAck to mentorMe home!</Link>
        </p>
      </section>
    </div>
  )
}

export default ChatsHistory