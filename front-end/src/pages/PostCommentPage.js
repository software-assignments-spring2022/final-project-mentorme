// import React from "react"
import { Link } from "react-router-dom"
import "../styles/PostCommentPage.css"
import image from '../images/6 Post Comment .png'
// import BurgerMenu from "../components/BurgerMenu"
// import{Rating,Typography} from "material-ui"
import {useLocation} from 'react-router-dom';

import PropTypes from 'prop-types';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import BurgerMenu from "../components/BurgerMenu"
import { TextField } from "@mui/material";
import Button from "../components/Button"

function valuetext(value) {
  return `${value}`;
}
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
  
        p: 1,
        m: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};



function PostCommentPage() {
  const [value, setValue] = React.useState('Type your review');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [formInput, setFormInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      overall: 0 ,
      category1: 0,
      category2: 0,
      category3: 0,
      category4: 0,
      comment:" "
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
  
    fetch("http://localhost:4000/rateAdvisor/searchResult/commentsDisplay/postCommentPage", {
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

  //getting data from another page
  // const location = useLocation();
  // const state = location.state;
  // console.log(state);

  return (
    <div id="PostCommentPage">
      <BurgerMenu/>
      
      <div className="advisor-info">
      <Box
        component="img"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: 350,
          width: 350,
          maxHeight: { xs: 350, md: 250 },
          maxWidth: { xs: 350, md: 250 },
        }}
        display="flex" 
        alignItems="center"
        justifyContent="center"
        alt="welcome!"
        src="https://picsum.photos/420"
      />
        {/* <img className="image" alt="welcome!" src={image} /> */}
        <p>UserName</p>
        <p>User info</p>
      </div>
      <div className="box">
  
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      p: 1,
      m: 1,
      bgcolor: 'background.salmon',
      borderRadius: 5,
    }}
    display="flex" 
    alignItems="center"
    justifyContent="center"
  > 
  <form onSubmit={handleSubmit}></form>   
    <Item><Typography component="legend">OverAll Rating</Typography>
        <Rating name="overall" defaultValue={2.5} precision={0.5} onChange={handleInput}/></Item>
      <Item><Typography component="legend">The advisor shares useful resources.</Typography><Slider
      name ='category1'
      size = 'large'
    aria-label="Temperature"
    defaultValue={30}
    getAriaValueText={valuetext}
    valueLabelDisplay="auto"
    step={10}
    marks
    min={10}
    max={100}
    onChange={handleInput}/></Item>
   
      `<Item><Typography component="legend">Advisor responds to emails on time.</Typography><Slider
      name ='category2'
      size = 'large'
    aria-label="Temperature"
    defaultValue={30}
    getAriaValueText={valuetext}
    valueLabelDisplay="auto"
    step={10}
    marks
    min={10}
    max={100}
    onChange={handleInput}/></Item>`
    <Item><Typography component="legend">Advisor encourages school engagement. </Typography><Slider
      name ='category3'
      size = 'large'
      aria-label="Temperature"
      defaultValue={30}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={100}
      onChange={handleInput}/></Item>
    <Item><Typography component="legend">Devolps realistic academic plans.</Typography><Slider
        name ='category4'
        size = 'large'
      aria-label="Temperature"
      defaultValue={30}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={100}
      onChange={handleInput}
    /></Item>

    <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
            name ='comment'
              id="outlined-multiline-flexible"
              label="Written Review"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              onClick={handleInput}
            />
            </Box>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit Rate For "Username"
          </Button>
    <form/>
  </Box>
  
      </div>
  </div>
  );
}




export default PostCommentPage