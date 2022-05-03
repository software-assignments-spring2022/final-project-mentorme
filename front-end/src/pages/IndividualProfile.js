import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/IndividualProfile.css"
import BurgerMenu from "../components/BurgerMenu";
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { current } from "@reduxjs/toolkit";
const IndividualProfile = () => {

  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')
  const [senderId, setSender] = useState('');
  const [receiverId, setReceiver] = useState('');
  const [currentUser, setUser] = useState(null)
  const [conversations, setConversations] = useState([]);




  useEffect(async () => {
    const fetchData = async () => {
      await axios.get("http://147.182.129.48:4000/userinfo")
        .then(response => setUser(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
        )
    }

    fetchData()
  }, [])

  useEffect(() => {

    const getConversations = async () => {
      try {
        const res = await axios.get("http://147.182.129.48:4000/conversations/" + userData[0]._id)
        console.log("here in test get conversations");
        console.log(res.data)
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getConversations();
  }, [userData[0]._id])


  async function handleClick(e) {
    let existed = false;
    console.log("Testing start chat")

    conversations.map(c => {
      if (c.members[0] == currentUser.id && c.members[1] == userData[0]._id) {
        console.log(userData[0])

        console.log(c.members[0])
        console.log(currentUser.id)
        existed = true;
        console.log("the user already has started chat!")
      }
      else if (c.members[1] == currentUser.id && c.members[0] == userData[0]._id) {
        existed = true;
        console.log("the user already has started chat!")
      }
    })
    if (userData[0]._id != currentUser.id && !existed) {
      try {
        await axios
          .post("http://147.182.129.48:4000/conversations", {
            senderId: currentUser.id,
            receiverId: userData[0]._id
          }).then((response) => {

          })
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      console.log("receiver = sender")
    }
  }

  useEffect(async () => {
    const fetchData = async () => {
      // console.log(location.state)
      const id = location.state.id

      setReceiver(id);
      setSender(userData[0]._id);
      // console.log("senderId is 1 " + id);
      // console.log("senderId is 2 " + userData[0]._id);


      console.log('id is', id)
      await axios.get(`http://147.182.129.48:4000/mentorMe/profileDisplay/individualProfile/${id}`)
        .then(response => setUserData(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
        )
    }

    fetchData()
  }, [])

  return (
    <div className="IndividualProfile">
      <BurgerMenu />
      {/* <p>{userData[0]['first_name']}</p> */}
      <section className="main-content">

        {error && <p className="Profile-error">{error}</p>}
        <h1>{`${userData[0]["first_name"]} ${userData[0]["last_name"]}`}</h1>
        <img src={userData[0]["picture"]} className="user-picture" alt="profile" />
        <br />
        <Link to="/mentorMe/profileDisplay/individualProfile/individualChat" state={{ id: location.state.id, name: userData[0]["first_name"] + " " + userData[0]["last_name"], score: userData[0]['over_all'] }}><Button type="button" onClick={handleClick}> Chat </Button></Link>
        <p>
          <br />
          <br />
          {userData[0]["bio"]}
          <br />
          <br />
        </p>
        <Link to="/mentorme"><Button type="button"> Return </Button></Link>
      </section>
    </div>
  )
}



export default IndividualProfile