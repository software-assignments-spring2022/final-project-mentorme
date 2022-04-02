import React from "react"
import { Link } from "react-router-dom"
import "../styles/UserProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
//import axios from 'axios'



const UserProfile = props => {
  const [username, setState] = useState('')
  const fetchuserinfo = () => {

    fetch("http://localhost:5000/mentorMe/UserProfile")
      .then(response => setState(response.data.username))
  }

  useEffect(() => {
    // fetch messages this once
    fetchuserinfo()
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads


  return (
    <div className="UserProfile">
      <BurgerMenu/>
      <section className="main-content">
      <h1>Username {username}</h1>
      <img src="https://picsum.photos/200/300/" className="center"/>
      <br />
        <Link to="/mentorme/EditProfile"><Button type="button"> Edit Profile </Button></Link>
        <Link to="/mentorMe/UserProfile/ChatsHistory"><Button type="button"> Chat History</Button></Link>
        <p>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, 
          id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci 
          aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh 
          imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit
          ultrices. Pellentesque pretium tincidunt tellus eu accumsan. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Vestibulum ac ante vel arcu posuere hendrerit. Nam suscipit 
          ligula nec lectus varius accumsan. Aliquam a orci eget ex gravida consequat sit amet quis urna.
          Praesent ut nisl nec nunc imperdiet pharetra.
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default UserProfile