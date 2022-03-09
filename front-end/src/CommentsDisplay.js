import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./styles/CommentsDisplay.css"
import search from './images/7 Comments dislpay.png'
import axios from 'axios'


const CommentsDisplay = props => {
  return (
    <div>
      {/* <img className="image" alt="welcome!" src={search} /> */}
      <header className="header">
        <div>
          Advisor Name: Lorem Ipsum
          <br />
          Academic Advisor at New York University
        </div>
        <div className="picture"> 
          <img className="resize" src="https://picsum.photos/200" alt="picture" />
        </div>
      </header>
    </div>
  )
}

export default CommentsDisplay

