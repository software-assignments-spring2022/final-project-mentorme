import React from "react"
import { Link } from "react-router-dom"
import "../styles/PostCommentPage.css"
import image from '../images/6 Post Comment .png'
import BurgerMenu from "../components/BurgerMenu"

const PostCommentPage = props => {
  return (
    <div className="CommentsDisplay">
      <BurgerMenu/>
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Post Comment Page
          <br />
          <br />
          <Link to="/rateAdvisor"><button>Back to Rate Advisor Home!</button></Link>
        </p>
      </section>
    </div>
  )
}

export default PostCommentPage