import React from "react"
import { Link } from "react-router-dom"
import "../styles/EditProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'



const EditProfile = props => {
  // create a state variable for each form field
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [profilePic, setProfilePic] = useState('')
  

  const submitForm = e => {
    e.preventDefault() // prevent normal browser submit behavior

    try{
      axios
        .post("http://localhost:4000/mentorMe/UserProfile/EditProfile/1", {
          username: username,
          email: email,
          password: password,
          bio: bio,
          profilePic: profilePic
      })
      .then(response => response.data)
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('bio', bio);
      localStorage.setItem('profilePic', profilePic);
    } catch (error) {
      console.log(error);
    }

    // clear form
    setUserName('')

  }

  return (
    <div className="EditProfile"> 
      <BurgerMenu/>
      <section className="main-content">
        
        <h1>Edit Profile</h1>
        <form className="personal_info" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Change Name"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Change Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Change Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <textarea
            placeholder="Change Bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
          <input
            type="file"
            placeholder="Change Profile Picture"
            value={profilePic}
            alt = "profile"
            onChange={e => setProfilePic(e.target.value)}
          />
          <input type="submit" disabled={!username} value="Submit" />
        </form>

        <Link to="/mentorme/UserProfile"><Button type="button" id="return_button"> Return </Button></Link>
      </section>
    </div>
  )
  }
  
  
  export default EditProfile