import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/AccountCentral.css"
import image from './images/13 Central.png'
const AccountCentral = props => {
  return (
    <div className="AccountCentral">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src = {image} />
        <p>
            AccountCentral
          <br />
          <br />
          <Link to="/mentorMe/accountCentral/ChatsHistory">Chats history!</Link>
        </p>
      </section>
    </div>
  )
}

export default AccountCentral