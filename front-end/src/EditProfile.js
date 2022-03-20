import React from "react"
import { Link } from "react-router-dom"
import "./styles/EditProfile.css"
import BurgerMenu from "./components/BurgerMenu"


const EditProfile = props => {
    return (
      <div className="EditProfile"> 
      <section className="main-content">
        <BurgerMenu/>
        <h1>User's Name</h1>
        <label for="profileimage">Change Profile Picture</label>
        <br />
        <br />
        <input type="file" id="profileimage" name="ProfilePicture"/>
       
        <br />
          <p>
            <label for="bio">Edit Bio:</label>
            <br />
            <br />
            <input type="text" id="bio" name="bio"/>
            <br />
            <br />
          </p>
          <Link to="/mentorme/UserProfile"><button type="button"> Return </button></Link>
        </section>
      </div>
    )
  }
  
  
  export default EditProfile