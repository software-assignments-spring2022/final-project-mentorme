import React from "react"
import { Link } from "react-router-dom"
import "../styles/MentorMeHome.css"
import image from '../images/8 Home Page Profile.png'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Button } from "../components/Button"
import BurgerMenu from "../components/BurgerMenu"
const MentorMeHome = props => {
  const filterOptions = ['a', 'b']
  return (
    <div className="MentorMeHome">
      <BurgerMenu/>
      <section className="main-content">
        <Link to="/mentorMe/accountCentral"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--account'}>Account</Button></Link>
        <img className="image" alt="welcome!" src={image} />
        <p>
          MentorMe home
          <br />
          <br />
          // temporary navigation for developers -
          <Link to="/mentorMe/profileDisplay"><button>Profile Display! </button></Link>

          <Link to="/mentorMe/UserProfile"><button>My Profile</button> </Link>

          <Link to="/"><button>Back to homepage!</button></Link>
        </p>
        <div class="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' />
          <Filter options={filterOptions}/>
        </div>
      </section>
    </div >
  )
}

export default MentorMeHome