import React, { useState,useEffect } from "react"
import "../styles/RatePage.css"
import BurgerMenu from "../components/BurgerMenu"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Button from "../components/Button"
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const RatePage = props => {
  const location = useLocation()
  const navigate = useNavigate();
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')

  const [rate, setRate] = React.useState(1);
  // const handleChange = (event) => {
  //   setRate(event.target.value);
  // };
  useEffect(async () => {
    const getUserData = async () => {
      await axios.get(`http://localhost:4000/mentorMe/profileDisplay/individualProfile/individualChat/ratePage/${location.state.id}`)
        .then(res => {
          setUserData(res.data);
        })
        .catch(error => {
          setError(error)
        })
    }

    getUserData()
  }, [])
  console.log(userData[0])

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

    fetch(`http://localhost:4000/mentorMe/profileDisplay/individualProfile/individualChat/ratePage/${location.state.id}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
      navigate('/mentorMe/profileDisplay/individualProfile/individualChat')
  };
   const score = parseInt(userData[0]['over_all'])
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
        <img src={userData[0]["picture"]} className=" individualImg" alt="profile" />
        <h2 >{userData[0]['first_name']}</h2>
        <h2 >Current Rate</h2>
        <Rating name="read-only" value={score}  precision={0.5} readOnly size="large" />
        <form onSubmit={handleSubmit}></form>
        <h2>Your Rate</h2>
        <Rating name="overall" precision={0.5} onChange={(event, newValue) => {
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