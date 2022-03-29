import React from "react"
import { Link } from "react-router-dom"
import "../styles/IndividualChat.css"
import image from '../images/12 Individual Chat.png'
import { Button } from "../components/Button";
import BurgerMenu from "../components/BurgerMenu";
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
const IndividualChat = props => {
  const [messages, setMessages] = useState([]);

  // Binding
  const messageText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingMessage = localStorage.getItem('message');
    setMessages(existingMessage ? JSON.parse(existingMessage) : []);
  }, []);

  // Events
  function addMessage(event) {
    event.preventDefault();
    const next = [...messages, messageText.current.value];
    setMessages(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }
  return (
    <div className="IndividualChat">
      
      <BurgerMenu/>
      
    
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Mentor Name
          <br />
          <br />
          <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/ratePage"><Button buttonStyle={"btn--danger--solid"} buttonSize={'btn--medium--long'}>End Chat and Rate</Button></Link>
          
        </p>
        <Box
        
    sx={{
      display: 'flex',
      flexDirection: 'column',
      p: 1,
      m: 1,
      bgcolor: 'background.paper',
      borderRadius: 5,
    }}
  ><div className='chat'>
      <ul>
        {messages.map(message => (<li key={message}>{message}</li>))}  
      </ul>
      <form onSubmit={addMessage}>
        <input type="text" placeholder="Enter Message" ref={messageText} />
        <input type="submit" value="Send" />
      </form>

    </div>
     
  </Box>
      </section>
    </div>
  )
}

export default IndividualChat