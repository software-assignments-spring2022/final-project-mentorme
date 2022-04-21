import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Home.css"
import welcome from '../images/1-in-it-together.png'
import Button from "../components/Button";
import { Container, Row, Col } from 'react-bootstrap';
import BurgerMenu from "../components/BurgerMenu"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

//import { useState, useEffect } from 'react'
let user;

const Home = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')




  useEffect(async () => {
    const fetchData = async () => {
      await axios.get("http://localhost:4000/userinfo")
        .then(response => setUserData(response.data))
        .catch(err => {
          console.log("err", err)
          setError(err)
        }
        )
    }

    fetchData()
  }, [])

  console.log(userData.auth);

  // console.log("user burger " + res.data.auth)

  // localStorage.clear()

  if (userData.auth == true) {
    return (
      <div className="Home">
        {/* introduction section */}
        <BurgerMenu />
        <section id='title'>
          <Container className="container-custom">
            <Row className="rows">
              <Col xs={12} md={4} className="columns titleCol">   <h1 id='webTitle'>MentorMe</h1>
                <h2 className="fs-5"> find your right path </h2>
                <div className="btn-title"><Link to="/rateAdvisor"><Button size="btn--default" buttonStyle="btn--primary--solid">Advisor</Button></Link>
                  <br />
                  <br />
                  <Link to="/mentorMe"><Button size="btn--default" buttonStyle="btn--primary--solid"> Mentor</Button></Link></div>
              </Col>

              <Col xs={12} md={8} className="columns"><img className="imageTitle imageRotate " alt="landing" src={welcome} /></Col>
            </Row>

          </Container>


        </section>
        {/* <section className="main-content">
  
  
           <img className="image" alt="welcome!" src={home} /> 
  
  
        </section>
        <section className="testimonials">
         <p>I enjoy this app very much. Testimonials.</p>
        </section> */}
      </div >
    )
  }
  else {
    return (
      <div className="Home">
        {/* introduction section */}
        <BurgerMenu />
        <section id='title'>
          <Container className="container-custom">
            <Row className="rows">
              <Col xs={12} md={4} className="columns titleCol">   <h1 id='webTitle'>MentorMe</h1>
                <h2 className="fs-5"> /* a tagline goes here */ </h2>
                <div className="btn-title"><Link to="/rateAdvisor"><Button size="btn--default" buttonStyle="btn--primary--solid">Advisor</Button></Link>
                  <br />
                  <br />
                  <Link to="/logIn"><Button size="btn--default" buttonStyle="btn--primary--solid"> Mentor</Button></Link></div>
              </Col>

              <Col xs={12} md={8} className="columns"><img className="imageTitle imageRotate " alt="landing" src={welcome} /></Col>
            </Row>

          </Container>


        </section>
        {/* <section className="main-content">
  
  
           <img className="image" alt="welcome!" src={home} /> 
  
  
        </section>
        <section className="testimonials">
         <p>I enjoy this app very much. Testimonials.</p>
        </section> */}
      </div >
    )
  }

}

export default Home
