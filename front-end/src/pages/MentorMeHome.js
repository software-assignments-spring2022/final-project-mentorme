import React from "react"
import "../styles/MentorMeHome.css"
import image from '../images/8 Home Page Profile.png'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Button } from "../components/Button"
import BurgerMenu from "../components/BurgerMenu"
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import axios from 'axios'

const MentorMeHome = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')




  useEffect(async () => {
    const fetchData = async () => {
      await axios.get("http://localhost:4000/userinfo")
        .then(response => setUserData(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
        )
    }

    fetchData()
  }, [])
  console.log(userData)


  const filterOptions = ['English', 'French', 'Chinese', 'Spanish', 'Math', 'Computer Science', 'Finance']
  return (
    <div className="MentorMeHome">
      <BurgerMenu />
      <br />
      <br />
      <br />
      <section className="main-content">
        <h1>MentorMe Home</h1>
        <h1>Welcome, {userData.first_name}!</h1>

        <img src={userData.pic} style={{ width: 250, height: 250, objectFit: 'cover', borderRaduis: "50%" }} className="center" alt="profile" />
        {/* <img>src={userData.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover', borderRaduis: "50%" }}</img> */}
        {/* (user && (<img>src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover', borderRaduis: "50%" }}</img>)) */}

        <br />
        <Link to="/mentorMe/UserProfile"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>MY Account</Button></Link>
        <br />
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} filterOptions={filterOptions} />
        </div>
        <br />
        <br />
        <Link to="/"><button>Back to homepage!</button></Link>
      </section>
    </div >
  )
}

export default MentorMeHome