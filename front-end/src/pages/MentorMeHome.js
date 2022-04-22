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

  console.log(location.state)
  const user = location.state.user


  // useEffect(async () => {
  //   const fetchData = async () => {
  //     await axios.get("http://localhost:4000/userinfo")
  //       .then(response => setUserData(response.data))
  //       .catch(err => {
  //         console.log("err", err)
  //         setError(error)
  //       }
  //       )
  //   }

  //   fetchData()
  // }, [])
  // console.log(userData)


  const filterOptions = ['English', 'French', 'Chinese', 'Spanish', 'First Year', 'Sophomore', 'Junior', 'Senior', 'Math', 'Computer Science']
  return (
    <div className="MentorMeHome">
      <BurgerMenu />
      <br />
      <br />
      <br />
      <section className="main-content">
        <h1>MentorMe Home</h1>
        <h1>Welcome, {user.first_name}!</h1>

        <img src={user.picture} style={{ width: 250, height: 250, objectFit: 'cover', borderRaduis: "50%" }} className="center" alt="profile" />
        {/* <img>src={userData.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover', borderRaduis: "50%" }}</img> */}
        {/* (user && (<img>src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover', borderRaduis: "50%" }}</img>)) */}

        <br />
        <Link to="/mentorMe/UserProfile" state={{user: user}}><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>MY Account</Button></Link>
        <br />
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} />
          <Filter options={filterOptions} navigateTo='/mentorMe/profileDisplay' />
        </div>
        <br />
        {/* temporary navigation for developers -*/}
        {/* <Link to="/mentorMe/profileDisplay"><button>Mentors</button></Link> */}
        <br />
        <Link to="/"><button>Back to homepage!</button></Link>
      </section>
    </div >
  )
}

export default MentorMeHome