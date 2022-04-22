import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/EditProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'
import peppa from "../images/3-peppa.jpeg";



const EditProfile = props => {
  // create a state variable for each form field
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [userData, setUserData] = useState('')
  const [error, setError] = useState('')

  const location = useLocation()
  const { curruser } = location.state


  // useEffect(async () => {
  //   const fetchData = async () => {
  //     await axios.get("http://localhost:4000/userinfo")
  //       .then(response => setUserData(response.data))
  //       .catch(err => {
  //         console.log("err", err)
  //         setError(err)
  //       }
  //       )
  //   }

  //   fetchData()
  // }, [])
  
  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      return alert("Max file size is 1mb");
    }
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'mentormesignup');
    try {
      setUploadingImg(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/lijie1230/image/upload", {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  async function submitForm(e) {
    e.preventDefault() // prevent normal browser submit behavior
    const url = await uploadImage(image);
    console.log(url);
    if (first_name != "") {
      try {
        axios
          .post('http://localhost:4000/mentorMe/UserProfile/EditProfile', {
            first_name: first_name,
            curruser: curruser
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (last_name != "") {
      try {
        axios
          .post('http://localhost:4000/mentorMe/UserProfile/EditProfile', {
            last_name: last_name,
            curruser: curruser,
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (url != "") {
      try {
        axios
          .post("http://localhost:4000/mentorMe/UserProfile/EditProfile", {
            profilePic: url,
            curruser: curruser,
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (email != "") {
      try {
        axios
          .post("http://localhost:4000/mentorMe/UserProfile/EditProfile", {
            email: email,
            curruser: curruser,
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (password != "") {
      try {
        axios
          .post("http://localhost:4000/mentorMe/UserProfile/EditProfile", {
            password: password,
            curruser: curruser,
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (bio != "") {
      try {
        axios
          .post("http://localhost:4000/mentorMe/UserProfile/EditProfile", {
            bio: bio,
            curruser: curruser,
          })
      } catch (error) {
        console.log(error);
      }
    }

  }
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);



  return (
    <div className="EditProfile">
      <BurgerMenu />
      <section className="main-content">

        <h1>Edit Profile</h1>
        <form className="personal_info" onSubmit={submitForm}>
          <div className="signup-profile-pic__container">
            <img src={imagePreview || peppa} className="signup-profile-pic" />
            <label htmlFor="image-upload" className="image-upload-label">
              <i className="fa fa-plus-circle add-picture-icon"></i>
            </label>
            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
          </div>
          <input
            type="text"
            placeholder="Change First Name"
            value={first_name}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Change Last Name"
            value={last_name}
            onChange={e => setLastName(e.target.value)}
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
          <input type="submit" value="Submit" />
        </form>

        <Link to="/mentorme/UserProfile"><Button type="button" id="return_button"> Return </Button></Link>
      </section>
    </div>
  );
}


export default EditProfile
