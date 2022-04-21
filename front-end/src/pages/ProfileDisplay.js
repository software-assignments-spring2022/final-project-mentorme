import React from "react"
import { Link } from "react-router-dom"
import "../styles/ProfileDisplay.css"
import SearchBar from '../components/SearchBar'
import { Container, Col, Row } from "react-bootstrap"
import BurgerMenu from "../components/BurgerMenu"
import Filter from '../components/Filter'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProfileDisplay = props => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('')
  const location = useLocation();
  const filterOptions = ['English', 'French', 'Chinese', 'Spanish', 'First Year', 'Sophomore', 'Junior', 'Senior', 'Math', 'Computer Science', 'Finance'];
  console.log(location.state)

  const getSearchResult = async () => {
    await axios.get("http://localhost:4000/mentorMe/profileDisplay/", { params: { name: location.state.name } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  const getFilterResult = async () => {
    await axios.get("http://localhost:4000/mentorMe/profileDisplay/2", { params: { filter: location.state.filter } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  const getDefResult = async () => {
    await axios.get("http://localhost:4000/mentorMe/profileDisplay/", { params: { name: 'A' } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    if (location.state === null) {
      getDefResult()
    } else if (typeof location.state.filter !== 'undefined') {
      getFilterResult()
    } else {
      getSearchResult()
    }
  }, [location.state])

  return (
    <div className="ProfileDisplay">
      <BurgerMenu />
      <section className="main-content">
        {/* <img className="image" alt="welcome!" src={image} /> */}
        <p>
          Profile Display
          <br />
          <br />
          {/* <Link to="/mentorMe/:profileDisplay/:individualProfile"><button>Individual Profile!</button></Link> */}
        </p>
        <div className="search">
          <SearchBar label='Search Mentor' navigateTo='/mentorMe/profileDisplay' />
          <Filter options={filterOptions} navigateTo='/mentorMe/profileDisplay' />
        </div>
      </section>

      {/* list of search result  */}
      <section className="resultList">
        <Container className="">
          <div className="list-group">
            {userData.map((data) => (
              <Item first_name={data.first_name} last_name={data.last_name} score={data.over_all.toFixed(2)} school={data.school} id={data.id} bio={data.bio} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

const Item = props => {
  return (
    <>
      <Link to="/mentorMe/profileDisplay/individualProfile" state={{ imgSrc: "https://picsum.photos/201", id: props.id }} className="list-group-item list-group-item-action" aria-current="">
        <Container className="container-search">
          <Row className="rows">
            <Col xs={4} md={2} className="columns">
              <div className="advisorPic">
                <img className="advisor-picture" src="https://picsum.photos/201" alt="picture" />
              </div>
            </Col>
            <Col xs={8} md={10} className="columns">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.first_name + ' ' + props.last_name}</h5>
                <small className="text-muted">{props.score}/5</small>
              </div >
              <div className="school-name">
                <small>{props.school}</small>
              </div>
              <p className="mb-1 brief">{props.bio}</p>
            </Col>
          </Row>
        </Container>
      </Link>
    </>
  )
}

export default ProfileDisplay