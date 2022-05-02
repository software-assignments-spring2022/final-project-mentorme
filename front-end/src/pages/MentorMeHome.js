import React from "react"
import "../styles/MentorMeHome.css"
import SearchBar from '../components/SearchBar'
import { Button } from "../components/Button"
import BurgerMenu from "../components/BurgerMenu"
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import axios from 'axios'

const MentorMeHome = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')

  console.log(location.state)
  const user = location.state.user


  // useEffect(async () => {
  //   const fetchData = async () => {
  //     await axios.get("http://localhost:4000/userinfo")
  //       .then(response => setUserData(response.data))
  //       .catch(err => {
  //         console.log("err", err)
  //         setError(err)
  //       }
  //       )
  //   }

  //   fetchData()
  // }, [])
  // console.log(userData)


  const filterOptions = ['English', 'French', 'Chinese', 'Spanish', 'Math', 'Computer Science', 'Finance']
  return (
    <div className="MentorMeHome">
      <BurgerMenu state={{user: user}}/>
      <br />
      <br />
      <br />
      <section className="main-content">
        <h1>MentorMe Home</h1>
        <h1>Welcome, {user.first_name}!</h1>

        <img src={user.picture} style={{ width: 250, height: 250, objectFit: 'cover', borderRaduis: "50%" }} className="center" alt="profile" />
        
        <br />
        <Link to="/mentorMe/UserProfile" state={{user: user}}><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>MY Account</Button></Link>
        <br />
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} filterOptions={filterOptions} userID={userData.id}/>
        </div>
        <br />
        <br />
        <Link to="/"><button>Back to homepage!</button></Link>
      </section>
    </div >
  )
}

export default MentorMeHome