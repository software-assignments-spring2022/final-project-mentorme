import React from "react"
import { Link } from "react-router-dom"
import "../styles/RatePage.css"
import image from '../images/11 Rate.png'
import BurgerMenu from "../components/BurgerMenu"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
const RatePage = props => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="RatePage">
      <BurgerMenu />
      <img
        alt="welcome!"
      // src={image} className="center"
      />
      <Stack spacing={1} direction="column"
        alignItems="center"
        justifyContent="center" style={{ minHeight: '50vh' }}>
        <h2 >Current Rate</h2>
        <Rating name="read-only" value={value} readOnly size="large" />
        <h2>Your Rate</h2>

        <Rating name="size-large" defaultValue={2} size="large" />
      </Stack>

    </div>
  )
}

export default RatePage