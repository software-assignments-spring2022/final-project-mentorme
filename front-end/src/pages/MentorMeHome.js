import React from "react"
import "../styles/MentorMeHome.css"
import SearchBar from '../components/SearchBar'
import { Button } from "../components/Button"
import BurgerMenu from "../components/BurgerMenu"
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

const MentorMeHome = props => {
  const location = useLocation()
  const [user, setUser] = useState([{}]);
  const [error, setError] = useState('')

  // console.log(location.state)

  // get logged in user
  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
    }
    console.log("user is", JSON.parse(loggedUser))
  }, [])

  const filterOptions = ['Math', 'Computer Science', 'Finance', 'Psychology', 'Humanities']
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

        <br />
        <Link to="/mentorMe/UserProfile" state={{ user: user }}><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>MY Account</Button></Link>
        <br />
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} filterOptions={filterOptions} userID={user._id} />
        </div>
        <br />
        <br />
        <Link to="/"><button>Back to homepage!</button></Link>
      </section>
    </div >
  )
}

export default MentorMeHome