// import React from "react"
import { Link } from "react-router-dom"
import "../styles/PostCommentPage.css"
import image from '../images/6 Post Comment .png'
// import BurgerMenu from "../components/BurgerMenu"
// import{Rating,Typography} from "material-ui"

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


  return (
    <div id="PostCommentPage">
      <BurgerMenu/>
      
      <div className="advisor-info">
      <Box
        component="img"
        sx={{
          height: 350,
          width: 350,
          maxHeight: { xs: 350, md: 350 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="welcome!"
        src={image}
      />
        {/* <img className="image" alt="welcome!" src={image} /> */}
        <p>Username</p>
        <p>User info</p>
      </div>
      <Button>Submit Rate For "Username" </Button>
      <div className="box">
        
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      p: 1,
      m: 1,
      bgcolor: 'background.salmon',
      borderRadius: 5,
    }}
  > <Item><Typography component="legend">OverAll Rating</Typography>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Item>
    <Item><Typography component="legend">Share Useful Resources ....</Typography><Slider
    size = 'large'
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
/></Item>
   
    <Item><Typography component="legend">Rating Category 2</Typography><Slider
    size = 'large'
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
/></Item>
<Item><Typography component="legend">Rating Category 3</Typography><Slider
    size = 'large'
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
/></Item>
<Item><Typography component="legend">Rating Category 4</Typography><Slider
    size = 'large'
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
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
          id="outlined-multiline-flexible"
          label="Written Review"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        </Box>
  
  </Box>
      </div>
  </div>
  );
}




export default PostCommentPage