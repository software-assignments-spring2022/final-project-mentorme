import "./messenger.css"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button";

import { useLocation } from "react-router-dom"
import BurgerMenu from "../../components/BurgerMenu"
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { io } from "socket.io-client"
export default function Messenger() {

  const location = useLocation()
  const [user, setUserData] = useState([{}]);
  const [error, setError] = useState('')
  const [mentor, setMentor] = useState(null);

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

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const fieldRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })

    })
  }, [])

  useEffect(() => {
    const friendId = currentChat?.members.find(m => m !== user.id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:4000/users?userId=" + friendId);
        // console.log("Data in")
        // console.log(res.data)
        setMentor(res.data)

      }
      catch (err) {
        console.log(err);
      }
    }
    getUser();

  }, [user, currentChat])


  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])

  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", users => {
      console.log(users)
    })
  }, [user])



  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:4000/conversations/" + user.id)
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getConversations();
  }, [user.id])

  useEffect(() => {
    const geetMessages = async () => {
      try {
        const res = await axios.get("http://localhost:4000/messages/" + currentChat?._id);
        setMessages(res.data);

      } catch (err) {
        console.log(err)
      }
    }
    geetMessages();
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    }
    const receiverId = currentChat.members.find(member => member !== user.id)
    // socket.current.emit("sendMessage", {
    //   senderId: user.id,
    //   receiverId,
    //   text: newMessage,
    // })
    try {
      const res = await axios.post("http://localhost:4000/messages", message);
      setMessages([...messages, res.data])
      setNewMessage("");
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    fieldRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversations])


  return (
    <div className="messenger">
      <BurgerMenu />

      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {conversations.map(c => (
            <div ref={fieldRef} onClick={() => setCurrentChat(c)}>            <Conversation conversation={c} currentUser={user} />
            </div>

          ))}
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (<>
            <div className="chatBoxTop">
              {messages.map(m => (<div ref={scrollRef}><Message message={m} own={m.sender === user.id} who={user} conversation={currentChat} /></div>
              ))}




            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" placeholder="write something..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage}></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
            </div></>) : (<span className="noConversationText">Open a conversation to start a chat!</span>)}
        </div>

      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline who={user} />
          {currentChat ? <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/ratePage" state={{ id: mentor?._id, name: mentor?.first_name, score: mentor?.score }} ><Button className="to-rate" buttonStyle={"btn--danger--solid"} buttonSize={'btn--medium--long'} >Rate the Mentor</Button></Link>
            : <h1></h1>}



        </div>

      </div>

    </div>
  )
}