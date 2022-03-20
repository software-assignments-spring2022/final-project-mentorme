import React from "react"
import { Link } from "react-router-dom"
import "../styles/ProfileDisplay.css"
import image from '../images/9 Profiles.png'
import SearchBar from '../components/SearchBar'
import { Container, Col, Row } from "react-bootstrap"
import BurgerMenu from "../components/BurgerMenu"

const ProfileDisplay = props => {
  return (
    <div className="ProfileDisplay">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className="image" alt="welcome!" src={image} />
        <p>
          Profile Display
          <br />
          <br />
          {/* <Link to="/mentorMe/:profileDisplay/:individualProfile"><button>Individual Profile!</button></Link> */}
        </p>
        <div class="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' />
        </div>
      </section>

      {/* list of search result  */}
      <section className="resultList">
        <Container className="">

          <div class="list-group">

            {/* Data 1 */}
            <Link to="/mentorMe/:profileDisplay/:individualProfile" state={{ imgSrc: "https://picsum.photos/201" }} class="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/201" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Mentor Name</h5>
                    <small class="text-muted">4.9/5</small>
                  </div >
                    <div className="school-name">                    <small >New York University</small>
                    </div>
                    <p className="mb-1 brief">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris in aliquam sem fringilla ut.              </p>
                  </Col>
                </Row>

              </Container>


            </Link>

            {/* Data 2 */}


            <Link to="/mentorMe/:profileDisplay/:individualProfile" state={{ imgSrc: "https://picsum.photos/202" }} class="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/202" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Mentor Name</h5>
                    <small class="text-muted">4.2/5</small>
                  </div >
                    <div className="school-name">                    <small >New York University</small>
                    </div>
                    <p className="mb-1 brief">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris in aliquam sem fringilla ut.              </p>
                  </Col>
                </Row>

              </Container>
              {/* Data 3 */}


            </Link>

            <Link to="/mentorMe/:profileDisplay/:individualProfile" state={{ imgSrc: "https://picsum.photos/203" }} class="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/203" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Mentor Name</h5>
                    <small class="text-muted">3.6/5</small>
                  </div >
                    <div className="school-name">                    <small >New York University</small>
                    </div>
                    <p className="mb-1 brief">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris in aliquam sem fringilla ut.              </p>
                  </Col>
                </Row>

              </Container>

              {/* Data 4 */}

            </Link>

            <Link to="/mentorMe/:profileDisplay/:individualProfile" state={{ imgSrc: "https://picsum.photos/204" }} class="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/204" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Mentor Name</h5>
                    <small class="text-muted">1/5</small>
                  </div >
                    <div className="school-name">                    <small >New York University</small>
                    </div>
                    <p className="mb-1 brief">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris in aliquam sem fringilla ut.              </p>
                  </Col>
                </Row>

              </Container>


            </Link>

          </div>

        </Container>
      </section>
    </div>
  )
}

export default ProfileDisplay