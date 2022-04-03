import React from "react"
import { Link } from "react-router-dom"
import "../styles/IndividualProfile.css"
import BurgerMenu from "../components/BurgerMenu";
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const IndividualProfile = props => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState('')
  const getData = () => {
    axios
      .get('http://localhost:4000/mentorMe/profileDisplay/individualProfile')
      .then(response => {setUserData(response.data)})
    .catch(err => {
      setError(err)
    })
  }
  useEffect(() => {
    getData();
  })
  
  
  return (
    <div className="IndividualProfile">
      <BurgerMenu/>
      <section className="main-content">
      
      {error && <p className="Profile-error">{error}</p>}

      <h1>Username {userData.username}</h1>
      <img src={userData.profilePic} className="center" alt="profile"/>
      <br />
        <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/"><Button type="button"> Chat </Button></Link>
        <p>
          <br />
          <br />
          {userData.bio}
          <br />
          <br />
        </p>
        <Link to="/mentorme/ProfileDisplay"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default IndividualProfile