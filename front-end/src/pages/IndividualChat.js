import React from "react"
import { Link } from "react-router-dom"
import "../styles/IndividualChat.css"
import image from '../images/12 Individual Chat.png'
import { Button } from "../components/Button";
import BurgerMenu from "../components/BurgerMenu";
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom';

const socket = io.connect("http://147.182.129.48:3001");

const IndividualChat = props => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const chatBox = useRef();
  const location = useLocation()

  // Binding
  const messageText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingMessage = localStorage.getItem('message');
    // setMessages(existingMessage ? JSON.parse(existingMessage) : []);
    setMessages(existingMessage ? JSON.parse(existingMessage) : []);
  }, []);

  // Events
  function addMessage(event) {
    event.preventDefault();

  }


  function handleSubmit(e) {
    e.preventDefault();
    const message = "YOU: " + messageText.current.value;
    const next = [...messages, message];
    setMessages(next);
    localStorage.setItem('todos', JSON.stringify(next));
    socket.emit('send-chat-message', messageText.current.value);
    messageText.current.value = '';

  }
  socket.on("chat-message", data => {
    const incoming = "THE OTHER USER: " + data;
    const nextMes = [...messages, incoming];
    setMessages(nextMes);
    localStorage.setItem('todos', JSON.stringify(nextMes));
    data = '';
  })

  return (
    <div className="IndividualChat">


      <BurgerMenu />

      <Box id="message-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 5,
        }}
      >
        <div className='chat'>
          <ul>
            {messages.map(message => (<li key={message}>{message}</li>))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Message" ref={messageText} />
            <input type="submit" value="Submit" />
          </form>
          <br></br>
          <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/ratePage" state ={{id:location.state.id,name : location.state.name,score:location.state.score}}><Button className="to-rate" buttonStyle={"btn--danger--solid"} buttonSize={'btn--medium--long'} >End Chat and Rate</Button></Link>


        </div>

        {/* socket.io test */}
        {/* <div id="message-container"></div> */}
        {/* <form onSubmit={handleSubmit} id="send-container">
          <input type="text" id="message-input" />
          <button type="submit" id="send-button">Send</button>
        </form> */}


      </Box>


      <section className="main-content">
        {/* <img className="image" alt="welcome!" src={image} /> */}
        <p>
          {/* Mentor Name */}
          <br />
          <br />
        </p>
      </section>
    </div>
  )
}

export default IndividualChat