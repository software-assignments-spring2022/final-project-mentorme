import React from "react"
import { Link } from "react-router-dom"
import "../styles/ChatsHistory.css"
import BurgerMenu from "../components/BurgerMenu"
import SearchBar from '../components/SearchBar'
import { Container, Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'

const ChatsHistory = props => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('')
  const [name, setName] = useState('A')
  const location = useLocation();

  const getSearchResult = async () => {
    if (location.state !== null){
      setName(location.state.name)
    }
    await axios.get("http://147.182.129.48:4000/mentorMe/UserProfile/ChatsHistory/2", { params: { name: name } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(()=>(getSearchResult()), [location.state])

  return (
    <div className="ChatsHistory">
      <BurgerMenu />ChatsHistory
      <section className="main-content">
        {/* <img className="image" alt="welcome!" src={image} /> */}

        <div className="search">
          <SearchBar label='Search a Private Chat' navigateTo='/mentorMe/UserProfile/ChatsHistory' />
          <div className='clear' />
        </div>
        <section className="resultList">
          <Container className="">
            <div className="list-group">
            {userData.map((data, i, dataArray) => (
              <Item first_name={data.first_name} last_name={data.last_name} lastChatTime={data.lastChatTime}/>
            ))}
            </div>
          </Container>
        </section>

      </section>
    </div>
  )
}

const Item = props => {
  return (
    <>
      <Link to="/mentorMe/profileDisplay/individualProfile/individualChat/" state={{ imgSrc: "https://picsum.photos/201" }} className="list-group-item list-group-item-action" aria-current="">
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
                <small className="text-muted"> seen {props.lastChatTime} min ago</small>
              </div >
              <div className="school-name">
                <small > Lorem ipsum dolor sit amet, consectetur adipiscing elit </small>
              </div>
            </Col>
          </Row>
        </Container>
      </Link>
    </>
  )
}

export default ChatsHistory