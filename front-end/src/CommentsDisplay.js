


import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/CommentsDisplay.css"
import search from './images/7 Comments dislpay.png'
const CommentsDisplay = props => {
  return (
    <div className="CommentsDisplay">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={search} />
        <p>
          Comments display
          <br />
          <br />
          <Link to="/rateAdvisor/:searchResut/:commentsDisplay/:postCommentPage"><button>Post Comment Page!</button></Link>
        </p>
      </section>
    </div>
  )
}

export default CommentsDisplay

