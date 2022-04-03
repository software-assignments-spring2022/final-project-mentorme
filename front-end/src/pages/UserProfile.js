import React from "react"
import { Link } from "react-router-dom"
import "../styles/UserProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'



const UserProfile = props => {
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/mentorMe/UserProfile');
      await setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // React Hook that executes the fetch function on the first render 
  useEffect(() => {
    getData();
  }, []);


  // fetch("http://localhost:5000/mentorMe/UserProfile")
  //      .then(response => setState(response.data))

 


  // useEffect(() => {
  //   setName(response.data.username);
  //   setBio(response.data.bio);
  //   setPic(response.data.pic);
  
  // })
  // const [username, setUsername] = useState('');
  // const [bio, setBio] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  // const fetchuserinfo = () => {

    // fetch("http://localhost:5000/mentorMe/UserProfile")
    //   .then(response => setState(response.data.username))

  

  // useEffect(() => {
  //   // fetch messages this once
  //   fetchuserinfo()
  // }, []) // putting a blank array as second argument will cause this function to run only once when component first loads


  return (
    <div className="UserProfile">
      <BurgerMenu/>
      <section className="main-content">
      <h1>Username {userData.username}</h1>
      <img src={userData.profilePic} className="center"/>
      <br />
        <Link to="/mentorme/EditProfile"><Button type="button"> Edit Profile </Button></Link>
        <Link to="/mentorMe/UserProfile/ChatsHistory"><Button type="button"> Chat History</Button></Link>
        <p>
          <br />
          <br />
          {userData.bio}
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default UserProfile