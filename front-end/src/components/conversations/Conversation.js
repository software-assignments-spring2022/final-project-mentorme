import "./conversation.css"
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Conversation({ conversation, currentUser }) {

  const [userNew, setUser] = useState(null);


  useEffect(() => {

    const friendId = conversation.members.find(m => m !== currentUser._id);
    // console.log("here in friend" + friendId)

    const getUser = async () => {
      try {
        const res = await axios("http://147.182.129.48:4000/users?userId=" + friendId);
        setUser(res.data)
      }
      catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [currentUser, conversation])





  return (
    <div className="conversation">
      <img className="conversationImg" src={userNew ? userNew.picture : "https://images.pexels.com/photos/1677794/pexels-photo-1677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="here" />

      <span className="conversationName">{userNew ? userNew.first_name : "loading"}</span>


    </div>
  )
}