import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/PostCommentPage.css"
import image from './images/6 Post Comment .png'
const PostCommentPage = props => {
  return (
    <div className="CommentsDisplay">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className = "image" alt="welcome!" src = {image} />
        <p>
           Post Comment Page
          <br />
          <br />
          <Link to="/rateAdvisor">Back to Rate Advisor Home!</Link>
        </p>
      </section>
    </div>
  )
}

export default PostCommentPage