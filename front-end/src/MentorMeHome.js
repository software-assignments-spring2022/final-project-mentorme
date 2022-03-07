import React from "react"
import { Link } from "react-router-dom"
import "./styles/MentorMeHome.css"
import image from './images/8 Home Page Profile.png'
import SearchBar from './components/SearchBar'


const MentorMeHome = props => {
  return (
    <div className="MentorMeHome">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          MentorMe home
          <br />
          <br />
          <Link to="/mentorMe/profileDisplay"><button>Profile Display! </button></Link>

          <Link to="/mentorMe/accountCentral"><button>accountCentral!</button> </Link>

          <Link to="/"><button>Back to homepage!</button></Link>
        </p>
        <div class="search">
          <SearchBar label='Search Mentor:' navigateTo='/mentorMe/profileDisplay'/>
        </div>
      </section>
    </div>
  )
}

export default MentorMeHome