import React from "react"
import { Link } from "react-router-dom"
import "../styles/Home.css"
import ReactDOM from 'react-dom';
import home from '../images/1HOME.png'
import welcome from '../images/1-in-it-together.png'
import Button from "../components/Button";
import { Container, Row, Col } from 'react-bootstrap';
import BurgerMenu from "../components/BurgerMenu"
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
const Home = props => {
  return (
    <div className="Home">



      {/* introduction section */}

      <section id='title'>
        <Container className="container-custom">
          <BurgerMenu/>
          <Row className="rows">
            <Col xs={12} md={4} className="columns titleCol">   <h1 id='webTitle'>MentorMe</h1>
              <h2 class="fs-5"> /* a tagline goes here */</h2>
              <div className="btn-title"><Link to="/rateAdvisor"><Button size="btn--default" buttonStyle="btn--primary--solid">Adivisor</Button></Link>
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

export default Home
