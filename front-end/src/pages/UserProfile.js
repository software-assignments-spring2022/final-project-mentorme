import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/UserProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserProfile = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')
  const [userinfo, setUserInfo] = useState('')

  const user = location.state.user

  return (
    <div className="UserProfile">
      <BurgerMenu state={{user: user}} />
      <section className="main-content">

        {error && <p className="Profile-error">{error}</p>}

        <h1>{user.first_name} {user.last_name} </h1>
        <img src={user.picture} style={{ width: 250, height: 250, objectFit: 'cover', borderRaduis: "50%" }} className="center" alt="profile" />
        <br />
        <Link to="/mentorme/EditProfile" state={{ user: user }}><Button type="button"> Edit Profile </Button></Link>
        <Link to="/mentorMe/UserProfile/ChatsHistory" state={{ user: user }}><Button type="button"> Chat History</Button></Link>
        <p>
          <br />
          <br />
          {user["bio"]}
          <br />
          <br />
        </p>
        <Link to="/mentorme" state={{ user: user }}><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default UserProfile