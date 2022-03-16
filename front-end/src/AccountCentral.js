import React from "react"
import { Link } from "react-router-dom"
import "./styles/AccountCentral.css"
import image from './images/13 Central.png'
import { Button } from "./components/Button"


const AccountCentral = props => {
  return (
    <div className="AccountCentral">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="centralImage" alt="welcome!" src={image} />
        <p>
          AccountCentral
          <br />
          <br />
          <Link to="/mentorMe/accountCentral/ChatsHistory"><Button buttonStyle={'btn--warning--solid'}>Chats History</Button></Link>
        </p>
      </section>
    </div>
  )
}

export default AccountCentral