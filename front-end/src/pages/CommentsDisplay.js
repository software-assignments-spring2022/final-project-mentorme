import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/CommentsDisplay.css"
import search from '../images/7 Comments dislpay.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import BurgerMenu from "./components/BurgerMenu"


const CommentsDisplay = props => {
  const location = useLocation();
  const imgSrc = location.state.imgSrc;

  return (

    <div>
      {/* <img className="image" alt="welcome!" src={search} /> */}
      <BurgerMenu/>
      <header className="header">

        <div>
          Advisor Name: Lorem Ipsum
          <br />
          Academic Advisor at New York University
        </div>
        <div className="picture">
          <img className="resize" src={imgSrc} alt="picture" />
        </div>
      </header>
    </div>
  )
}

export default CommentsDisplay

