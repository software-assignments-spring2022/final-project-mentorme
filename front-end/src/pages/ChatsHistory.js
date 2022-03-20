import React from "react"
import { Link } from "react-router-dom"
import "./styles/ChatsHistory.css"
import image from './images/14 All Chats.png'
import BurgerMenu from "./components/BurgerMenu"

const ChatsHistory = props => {
  return (
    <div className="ChatsHistory">
      <BurgerMenu/>
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          ChatsHistory
          <br />
          <br />
          <Link to="/mentorMe"><button>Back to mentorMe home!</button></Link>
        </p>
      </section>
    </div>
  )
}

export default ChatsHistory