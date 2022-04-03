import React from "react"
import { Link } from "react-router-dom"
import "../styles/ChatsHistory.css"
import image from '../images/14 All Chats.png'
import BurgerMenu from "../components/BurgerMenu"
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Container, Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
const ChatsHistory = props => {
  return (
    <div className="ChatsHistory">
      <BurgerMenu />ChatsHistory
      <section className="main-content">
        {/* <img className="image" alt="welcome!" src={image} /> */}

        <div className="search">
          <SearchBar label='Search a Private Chat' navigateTo='/mentorMe/profileDisplay/individualProfile/individualChat/' />
          <div className='clear' />
        </div>
        <section className="resultList">
          <Container className="">

            <div className="list-group">

              {/* Data 1 */}
              <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/" state={{ imgSrc: "https://picsum.photos/201" }} className="list-group-item list-group-item-action" aria-current="">
                <Container className="container-search">
                  <Row className="rows">
                    <Col xs={4} md={2} className="columns">
                      <div className="advisorPic">
                        <img className="advisor-picture" src="https://picsum.photos/201" alt="picture" />
                      </div>
                    </Col>
                    <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Mentor Name</h5>
                      <small className="text-muted"> seen 3 min ago</small>
                    </div >
                      <div className="school-name">
                        <small > Lorem ipsum dolor sit amet, consectetur adipiscing elit </small>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Link>

              {/* Data 2 */}

              <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/" state={{ imgSrc: "https://picsum.photos/202" }} className="list-group-item list-group-item-action" aria-current="">
                <Container className="container-search">
                  <Row className="rows">
                    <Col xs={4} md={2} className="columns">
                      <div className="advisorPic">
                        <img className="advisor-picture" src="https://picsum.photos/202" alt="picture" />
                      </div>
                    </Col>
                    <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Mentor Name</h5>
                      <small className="text-muted"> online</small>
                    </div >
                      <div className="school-name">
                        <small > Lorem ipsum dolor sit amet, consectetur adipiscing elit </small>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Link>
              {/* Data 3 */}
              <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/" state={{ imgSrc: "https://picsum.photos/203" }} className="list-group-item list-group-item-action" aria-current="">
                <Container className="container-search">
                  <Row className="rows">
                    <Col xs={4} md={2} className="columns">
                      <div className="advisorPic">
                        <img className="advisor-picture" src="https://picsum.photos/203" alt="picture" />
                      </div>
                    </Col>
                    <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Mentor Name</h5>
                      <small className="text-muted"> Delivered</small>
                    </div >
                      <div className="school-name">
                        <small > Lorem ipsum dolor sit amet, consectetur adipiscing elit </small>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Link>
              {/* Data 4 */}
              <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/" state={{ imgSrc: "https://picsum.photos/204" }} className="list-group-item list-group-item-action" aria-current="">
                <Container className="container-search">
                  <Row className="rows">
                    <Col xs={4} md={2} className="columns">
                      <div className="advisorPic">
                        <img className="advisor-picture" src="https://picsum.photos/204" alt="picture" />
                      </div>
                    </Col>
                    <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Mentor Name</h5>
                      <small className="text-muted"> Delivered</small>
                    </div >
                      <div className="school-name">
                        <small > Lorem ipsum dolor sit amet, consectetur adipiscing elit </small>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Link>

            </div>

          </Container>
        </section>

      </section>
    </div>
  )
}

export default ChatsHistory