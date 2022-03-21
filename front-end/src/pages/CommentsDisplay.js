import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/CommentsDisplay.css"
import BurgerMenu from "../components/BurgerMenu"
import axios from "axios"
import Button from '../components/Button'


const CommentsDisplay = props => {

  // mock advisor and comments
  // these data will be used in case mockaroo account limit has been reached
  const mockAdvisor = {
    "id": 1,
    "first_name": "Hanni",
    "last_name": "Tinniswood",
    "department": "Training",
    "university": "Tbilisi State University",
    "score": 3.5
  }
  
  const mockComments = [{
    "timestamp": "12/12/2021",
    "score": 4.7,
    "comment": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  }, {
    "timestamp": "8/31/2021",
    "score": 4.2,
    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
  }, {
    "timestamp": "4/7/2021",
    "score": 4.8,
    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  }, {
    "timestamp": "10/11/2021",
    "score": 1.0,
    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
  }, {
    "timestamp": "5/6/2021",
    "score": 0.2,
    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
  }]

  const [advisor, setAdvisor] = useState(mockAdvisor)
  const [comments, setComments] = useState(mockComments);

  useEffect(async () => {
    // fetch data for advisor
    await axios.get("https://api.mockaroo.com/api/3f8a8ec0?count=1&key=de852b30")
    .then(res => {
      setAdvisor(res.data[0]);
      console.log('advisor fetched.')
    })
    .catch(err => {
      console.log(`err, ${err}.`)
      setAdvisor(mockAdvisor)
    })

    // fetch comments for the advisor
  await axios.get("https://api.mockaroo.com/api/89e68340?count=1&key=de852b30")
    .then(res => {
      console.log('comments fetched.')
      setComments(res.data)
    })
    .catch(err => {
      console.log(`err, ${err}.`)
      setComments(mockComments)
    })
  }, [])
  
  return (
    <div className="commentsDisplay">
      <BurgerMenu />
      
      {/* header for displaying name, information, and score for the advisor */}
      <div className="header">
        
        <div className="data">
          <div className="page-name">{`${advisor.last_name, advisor.first_name}`}</div>
          <div className="info">{`${advisor.department} Department at ${advisor.university}`}</div>
        </div>
        
        <div className="score">
          <div className="page-score">{`${advisor.score}/5`}</div>
        </div>
      </div>
      
      
      {/* comments section */}
      <div className="comments">
        <div className= "comment-button">
        <Link  to= "/rateAdvisor/searchResult/commentsDisplay/postCommentPage"><Button>Post a Comment!</Button></Link>
      </div>
        {comments.map(comment => (
            <div className="comment">
              
              <div className="user-score">
                <div className="inner-score">{`${comment.score}/5`}</div>
              </div>

              <div className="user-comment">
                <div className="date">{comment.timestamp}</div>
                <div className="inner-comment">{comment.comment}</div>
              </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsDisplay