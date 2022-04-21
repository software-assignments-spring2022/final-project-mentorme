import "./messenger.css"
import { useLocation } from "react-router-dom"
import BurgerMenu from "../../components/BurgerMenu"
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { useContext, useEffect, useState, useRef } from "react"
import axios from "axios"
export default function Messenger() {

  const location = useLocation()
  const [user, setUserData] = useState([{}]);
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
  // console.log("we are here")
  // console.log(user.first_name)

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();



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
  // console.log(currentChat._id)
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
    try {
      const res = await axios.post("http://localhost:4000/messages", message);
      setMessages([...messages, res.data])
      setNewMessage("");
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(messages)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])
  return (
    <div className="messenger">      <BurgerMenu />


      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {conversations.map(c => (
            <div onClick={() => setCurrentChat(c)}>            <Conversation conversation={c} currentUser={user} />
            </div>

          ))}
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (<>
            <div className="chatBoxTop">
              {messages.map(m => (<div ref={scrollRef}><Message message={m} own={m.sender === user.id} /></div>
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
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
        </div>

      </div>

    </div>
  )
}