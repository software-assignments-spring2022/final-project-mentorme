import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/CommentsDisplay.css"
import BurgerMenu from "../components/BurgerMenu"
import axios from "axios"
import Button from '../components/Button'
import { useLocation } from "react-router-dom"


const CommentsDisplay = () => {

  const location = useLocation()
  const id = location.state.id
  const [advisor, setAdvisor] = useState({})
  const [comments, setComments] = useState([{}]);

  useEffect(() => {
    const fetchData = async() => {
      // fetch information and comments for advisor
      await axios.get(`http://localhost:4000/rateAdvisor/commentDisplay/${id}`)
      .then(res => {
        setAdvisor(res.data.info);
        console.log('advisor fetched.')
        setComments(res.data.comments)
        console.log('comments fetched.')

        // computes overall score of the advisor using their comments
        let total = 0
        res.data.comments.forEach(comment => {
          total += comment.score
        })
        const newAdvisor = { ...res.data.info }
        newAdvisor.score = (total / res.data.comments.length).toFixed(2)
        setAdvisor(newAdvisor)
      })
      .catch(err => {
        console.log(`err, ${err}.`)
        setAdvisor([])
      })
    }
    
    fetchData()
  }, [])
  
  return (
    <div className="commentsDisplay">
      <BurgerMenu />
      
      {/* header for displaying name, information, and score for the advisor */}
      <div className="header">
        
        <div className="data">
          <div className="page-name">{`${advisor.last_name}, ${advisor.first_name}`}</div>
          <div className="info">{`${advisor.department} Department at ${advisor.school}`}</div>
        </div>
        
        <div className="score">
          <div className="page-score">{`${advisor.currentScore != undefined ? advisor.currentScore.toFixed(2):'wait'}/5`}</div>
        </div>
      </div>
      
      
      {/* comments section */}
      <div className="comments">
        <div className= "comment-button">
        <Link to= "/rateAdvisor/searchResult/commentsDisplay/postCommentPage" state={{ name: advisor.first_name + " "+ advisor.last_name,
                                                                                        university:advisor.university,
                                                                                       department: advisor.department + " at "+ advisor.school,
                                                                                       currentScore: advisor.score,
                                                                                       user_id :location.state.id,

                                                                                       }}><Button size="btn--default" 
                                                                                       buttonStyle="btn--primary--solid">Post a Comment!</Button></Link>
      </div>
        {comments.map((comment) => (
            <div className="comment" >
              
              <div className="user-score">
                <div className="inner-score">{`${comment.score}`}</div>
              </div>

              <div className="user-comment">
                <div className="date">{comment.timestamp}</div>
                <div className="inner-comment">{comment.written_feedback}</div>
              </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsDisplay