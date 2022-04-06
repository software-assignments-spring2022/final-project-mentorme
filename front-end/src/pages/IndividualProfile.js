import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/IndividualProfile.css"
import BurgerMenu from "../components/BurgerMenu";
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const IndividualProfile = () => {

  const location = useLocation()
  const [userData, setUserData] = useState({});
  const [error, setError] = useState('')

  const id = location.state.id

  useEffect(() => {
    axios.get(`http://localhost:4000/mentorMe/profileDisplay/individualProfile/${id}`)
      .then(response => setUserData(response.data))
      .catch(err => {
        setError(err)
      })
  }, [])
  
  
  return (
    <div className="IndividualProfile">
      <BurgerMenu/>
      <section className="main-content">
      
      {error && <p className="Profile-error">{error}</p>}

      <h1>{`${userData.last_name}, ${userData.first_name}`}</h1>
      <img src={userData.profilePic} className="center" alt="profile"/>
      <br />
        <Link to="/mentorMe/profileDisplay/individualProfile/individualChat" state = {{name : userData.first_name +" "+userData.last_name,score:userData.score}}><Button type="button"> Chat </Button></Link>
        <p>
          <br />
          <br />
          {userData.bio}
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default IndividualProfile