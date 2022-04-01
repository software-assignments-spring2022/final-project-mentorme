import React from "react"
import { Link } from "react-router-dom"
import "../styles/EditProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"


const EditProfile = props => {
    return (
      <div className="EditProfile"> 
        <BurgerMenu/>
        <section className="main-content">
          
          <h1>Edit Profile</h1>
          {/* <form action="/post_info" method="POST">
            <input type="text" name="name" placeholder="Change Name" /> <br />
            <input type="text" name="email" placeholder="Change Email" /> <br />
            <input type="text" name="password" placeholder="Change Name" /> <br />
            <input type="text" name="bio" placeholder="Change Bio" /> <br />
          </form> */}

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
          <Link to = "/mentorMe/UserProfile"><Button id = "Change Info" type="submit" value="CHANGEINFO">Submit Changes</Button></Link>
          <Link to="/mentorme/UserProfile"><Button type="button" id="return_button"> Return </Button></Link>
        </section>
      </div>
    )
  }
  
  
  export default EditProfile