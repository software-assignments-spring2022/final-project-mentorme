import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/RatePage.css"
import image from '../images/11 Rate.png'
import BurgerMenu from "../components/BurgerMenu"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import axios from 'axios';
const RatePage = props => {
  const [rate, setRate] = React.useState(1);
    useEffect(()=>{
    axios.get('http://localhost:3000/mentorMe/profileDisplay/individualProfile/individualChat/ratePage').
    then(response=>{
      console.log(response)
      setRate(response.data)
      }).catch(error =>{
        console.log(error)
      })

  },[])

  const handleSubmit = event =>{
    event.preventDefault();
    setRate([rate, ...rate])
    axios.post('http://localhost:3000/mentorMe/profileDisplay/individualProfile/individualChat/ratePage',rate)
    .then(response=>{
      console.log(response)
    }).catch(error =>{
      console.log(error)
    })
    setRate(1)
  }

  return (
    <div className="RatePage">
      <BurgerMenu/>
      <img 
        alt="welcome!"
        src={image} className="center"
      />
     <Stack spacing={1}direction="column"
  alignItems="center"
  justifyContent="center"  style={{ minHeight: '50vh' }}>
    <h2 >Current Rate</h2>
    <Rating name="read-only" value={rate} readOnly size="large"/>
    <h2>Your Rate</h2>
      <Rating name="size-large"   onChange={(event, newValue) => {
          setRate(newValue);}} onClick= {props.handleInputChange}size="large" />

    
    </Stack>

    </div>
  )
}
export default RatePage