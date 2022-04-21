import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/UserProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserProfile = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')




  useEffect(async () => {
    const fetchData = async () => {
      await axios.get("http://localhost:4000/userinfo")
        .then(response => setUserData(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
        )
    }

    fetchData()
  }, [])
  console.log(userData)
  //original code
  // const UserProfile = props => {
  //   const [userData, setUserData] = useState({});
  //   const [error, setError] = useState('')
  //   const getData = () => {
  //     axios
  //       .get('http://localhost:4000/mentorMe/UserProfile/1')
  //       .then(response => {setUserData(response.data[0])})
  //     .catch(err => {
  //       setError(err)
  //     })
  //   }

  //   useEffect(() => {
  //     getData();
  //   }, [])

  // if (localStorage.username != null){
  //   userData.username = localStorage.username
  // }
  // if (localStorage.bio != null){
  //   userData.bio = localStorage.bio
  // }
  // if (localStorage.username != null){
  //   userData.profilePic = localStorage.profilePic
  // }




  return (
    <div className="UserProfile">
      <BurgerMenu />
      <section className="main-content">

        {error && <p className="Profile-error">{error}</p>}

        <h1>{userData.first_name} {userData.last_name} </h1>
        <img src={userData.pic} style={{ width: 250, height: 250, objectFit: 'cover', borderRaduis: "50%" }} className="center" alt="profile" />
        <br />
        <Link to="/mentorme/EditProfile"><Button type="button"> Edit Profile </Button></Link>
        <Link to="/mentorMe/UserProfile/ChatsHistory"><Button type="button"> Chat History</Button></Link>
        <p>
          <br />
          <br />
          {userData["bio"]}
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default UserProfile