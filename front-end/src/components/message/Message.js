import "./message.css"
import { format } from "timeago.js"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { current } from "@reduxjs/toolkit";

export default function Message({ message, own, who, conversation }) {
  const [userNew, setUser] = useState(null);
  const currentUser = who;


  useEffect(() => {

    const friendId = conversation.members.find(m => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:4000/users?userId=" + friendId);
        setUser(res.data)
      }
      catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [currentUser, conversation])
  // console.log("down")
  // console.log(userNew)


  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">   <img className="messageImg" src={own ? who.picture : (userNew ? userNew.picture : "https://images.pexels.com/photos/1677794/pexels-photo-1677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")} alt="" />
        <p className="messageText">{message.text}</p></div>


      <div className="messageBottom">
        {format(message.createdAt)}      </div>
    </div>
  )
}