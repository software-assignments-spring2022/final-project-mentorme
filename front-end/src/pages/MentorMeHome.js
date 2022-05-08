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
  }, [])

  const filterOptions = ['Math', 'Computer Science', 'Finance', 'Psychology', 'Humanities']
  return (
    <div className="MentorMeHome">
      <BurgerMenu state={{user: user}}/>
      <section className="main-content">
        <h1>MentorMe Home</h1>
        <h1>Welcome, {user.first_name}!</h1>

        <img src={user.picture} className="user-picture" alt="profile" /> 

        <br />
        <div>
        <Link to="/mentorMe/UserProfile" state={{ user: user }}><Button size="btn--default" buttonStyle="btn--primary--solid">My Account</Button></Link>
          &nbsp;&nbsp;&nbsp;
        <Link to="/"><Button size="btn--default" buttonStyle="btn--primary--solid">Main Home</Button></Link>
        </div>
        <br />
        <br />
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} filterOptions={filterOptions} userID={user._id} />
        </div>
      </section>
    </div >
  )
}

export default MentorMeHome