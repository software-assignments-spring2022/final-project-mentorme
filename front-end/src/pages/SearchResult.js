import React from "react"
import { Link } from "react-router-dom"
import "../styles/SearchResult.css"
import search from '../images/5Search Result.png'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Container, Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import BurgerMenu from "../components/BurgerMenu"

const SearchResult = props => {
  const filterOptions = ['a', 'b'];
  return (
  
    <div className="SearchResult">
      <BurgerMenu />
      <section className="main-content">
        <img className="image" alt="welcome!" src={search} />
        <p>
          Search results
          <br />
          <br />
          {/* <Link to='/rateAdvisor/:searchResut/:commentsDisplay'><button>Comments Display!</button></Link> */}
        </p>
        <div className="search">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/:searchResult' />
          <Filter options={filterOptions}/>
          <div className='clear'/>
        </div>

      </section>

      {/* list of search result  */}
      <section className="resultList">
        <Container className="">

          <div className="list-group">

            {/* Data 1 */}
            <Link to="/rateAdvisor/:searchResut/:commentsDisplay" state={{ imgSrc: "https://picsum.photos/201" }} className="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/201" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Advisor Name</h5>
                    <small className="text-muted">4.9/5</small>
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


            <Link to="/rateAdvisor/:searchResut/:commentsDisplay" state={{ imgSrc: "https://picsum.photos/202" }} className="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/202" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Advisor Name</h5>
                    <small className="text-muted">4.2/5</small>
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

            <Link to="/rateAdvisor/:searchResut/:commentsDisplay" state={{ imgSrc: "https://picsum.photos/203" }} className="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/203" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Advisor Name</h5>
                    <small className="text-muted">3.6/5</small>
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

            <Link to="/rateAdvisor/:searchResut/:commentsDisplay" state={{ imgSrc: "https://picsum.photos/204" }} className="list-group-item list-group-item-action" aria-current="">
              <Container className="container-search">
                <Row className="rows">
                  <Col xs={4} md={2} className="columns">
                    <div className="advisorPic">
                      <img className="advisor-picture" src="https://picsum.photos/204" alt="picture" />
                    </div>
                  </Col>

                  <Col xs={8} md={10} className="columns"> <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Advisor Name</h5>
                    <small className="text-muted">1/5</small>
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

    </div >
  )
}

export default SearchResult