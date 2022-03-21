import React from "react"
import { Link } from "react-router-dom"
import "../styles/CommentsDisplay.css"
import { useLocation } from 'react-router-dom'
import BurgerMenu from "../components/BurgerMenu"


const CommentsDisplay = props => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(width, height);
  return (
    <div className="commentsDisplay">
      <BurgerMenu />
      <img src={`https://picsum.photos/3000/3000`} alt='A photo' />
    </div>
  )
}

export default CommentsDisplay