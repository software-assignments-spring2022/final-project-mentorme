import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/IndividualProfile.css"
import BurgerMenu from "../components/BurgerMenu";
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const IndividualProfile = () => {

  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')

  useEffect(async () => {
    const fetchData = async () => {
      console.log(location.state)
      const id = location.state.id
      console.log('id is', id)
      await axios.get(`http://localhost:4000/mentorMe/profileDisplay/individualProfile/${id}`)
        .then(response => setUserData(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
      )
    }
    
    fetchData()
  }, [])
  
  
  return (
    <div className="IndividualProfile">
      <BurgerMenu/>
      <section className="main-content">
      
      {error && <p className="Profile-error">{error}</p>}

      <h1>{`${userData[0]["first_name"]} ${userData[0]["last_name"]}`}</h1> 
      <img src={userData.profilePic} className="center" alt="profile"/>
      <br />
        <Link to="/mentorMe/profileDisplay/individualProfile/individualChat" state = {{name : userData.first_name +" "+userData.last_name,score:userData.score}}><Button type="button"> Chat </Button></Link>
        <p>
          <br />
          <br />
          {userData[0]["bio"]}
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default IndividualProfile