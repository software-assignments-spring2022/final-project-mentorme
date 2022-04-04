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
import Button from "../components/Button"
const RatePage = props => {
  const [rate, setRate] = React.useState(1);
  const handleChange = (event) => {
    setRate(event.target.value);
  };
  const [formInput, setFormInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      overall: 0,
    }
  );
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("http://localhost:4000/mentorMe/profileDisplay/individualProfile/individualChat/ratePage", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div className="RatePage">
      <BurgerMenu />
      {/* <img 
        alt="welcome!"
        src={image} className="center"
      /> */}
      <Stack spacing={1} direction="column"
        alignItems="center"
        justifyContent="center" style={{ minHeight: '50vh' }}>
        <h2 >Current Rate</h2>
        <Rating name="read-only" value={rate} readOnly size="large" />
        <form onSubmit={handleSubmit}></form>
        <h2>Your Rate</h2>
        <Rating name="overall" onChange={(event, newValue) => {
          setRate(newValue);
        }} onClick={handleInput} size="large" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit Rating
        </Button>
        <form />

      </Stack>

    </div>
  )
}
export default RatePage