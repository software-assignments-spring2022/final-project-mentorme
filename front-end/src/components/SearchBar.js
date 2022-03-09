import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/SearchBar.css"
import axios from 'axios'
import Suggestion from "./Suggestion";



const SearchBar = (props) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(props.navigateTo)
  }

  {/* get suggestions from backend */}
  useEffect(async () => {
    await axios.get("https://api.mockaroo.com/api/4b0b0f90?count=10&key=de852b30")
      .then(res => {
        setSuggestion(res.data);
      })
      .catch(err => {
        console.log(`Failure. ${err}`);
      })
  }, [name])

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" 
            className="searchTerm"
            value={name} 
            placeholder={props.label} 
            onChange={(e) => setName(e.target.value)} />
          <input type="submit" className="searchButton" value='Search'/>
      </form>
      {name && <Suggestion suggestions={suggestion} />} 
    </>
  )
}

export default SearchBar