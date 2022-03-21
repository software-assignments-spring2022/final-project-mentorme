import React from "react"
import { Link } from "react-router-dom"
import "../styles/EditProfile.css"
import BurgerMenu from "../components/BurgerMenu"


const EditProfile = props => {
    return (
      <div className="EditProfile"> 
        <BurgerMenu/>
        <section className="main-content">
          
          <h1>Edit Profile</h1>
          <div class="personal_info">
              <label for="username" className="personal_info">Change Username:</label>
              <input type="text" id="username" className="personal_info" name="username"/>
              <label for="a_password" className="personal_info">Change Password:</label>
              <input type="text" id="a_password" className="personal_info" name="password"/>
              <label for="a_email" className="personal_info">Change Email:</label>
              <input type="text" id="a_email" className="personal_info" name="email"/>
              <label for="phone_number" className="personal_info">Change Phone Number:</label>
              <input type="text" id="phone_number" className="personal_info" name="phone_number"/>
              <label for="major" className="personal_info">Change Major:</label>
              <input type="text" id="major" className="personal_info" name="major"/>
          </div>
          <br />
          <label for="profileimage">Change Profile Picture</label>
          <br />
          <input type="file" className="profileimage" name="ProfilePicture"/>
          <br />
          <p>
            <label for="bio">Edit Bio:</label>
            <br />
            <input type="text" className="bio" name="bio"/>
            <br />
          </p>
          <Link to="/mentorme/UserProfile"><button type="button" id="return_button"> Return </button></Link>
        </section>
      </div>
    )
  }
  
  
  export default EditProfile