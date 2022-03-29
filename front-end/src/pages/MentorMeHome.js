import React from "react"
import { Link } from "react-router-dom"
import "../styles/MentorMeHome.css"
import image from '../images/8 Home Page Profile.png'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Button } from "../components/Button"
import BurgerMenu from "../components/BurgerMenu"
const MentorMeHome = props => {
  const filterOptions = ['English', 'French', 'Chinese', 'Spanish', 'First Year', 'Sophomore', 'Junior', 'Senior', 'Math', 'Computer Science']
  return (
    <div className="MentorMeHome">
      <BurgerMenu/>
      <br/>
      <br/>
      <br/>
      <section className="main-content">
        <h1>MentorMe Home</h1>
        <br/>
        <Link to="/mentorMe/UserProfile"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>MY Account</Button></Link>
        <br/>
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' isMentorMe={true} />
          <Filter options={filterOptions} navigateTo='/mentorMe/profileDisplay'/>
        </div>
        <br/>
        {/* temporary navigation for developers -*/}
        <Link to="/mentorMe/profileDisplay"><button>Mentors</button></Link>
        <br/>
        <Link to="/"><button>Back to homepage!</button></Link>
      </section>
    </div >
  )
}

export default MentorMeHome