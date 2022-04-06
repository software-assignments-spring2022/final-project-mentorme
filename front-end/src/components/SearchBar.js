import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/SearchBar.css"
import axios from 'axios'
import Suggestion from "./Suggestion";

/* props has attributes 'label' refering the str showing in the search bar, 
  'naviageTo' is the page where the user will be directed to,
  and 'isMentorMe' specifies the search bar is used in MentorMe or RateMyAdvisor*/
  
const SearchBar = (props) => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(props.navigateTo, {state:{name: name}})
  }

  {/* get suggestions from backend */}
  useEffect(async () => {
    // fetch from different data based on where this search bar is located
    // fetch mentors data
    if (props.isMentorMe) {
      await axios.get("http://localhost:4000/mentorMe/profileDisplay/", { params: { name: name } })
      .then(res => {
        setSuggestion(res.data);
      })
      .catch(err => {
        console.log("cannot get backend suggestions. err.")
      })
    } else {  // fetch advisors data
      await axios.get("http://localhost:4000/rateAdvisor/searchResult/", { params: { name: name } })
        .then(res => {
          setSuggestion(res.data);
        })
        .catch(err => {
          console.log("cannot get backend suggestions. err.")
        })
    }
  }, [name])

  return (
    <div className='searchMain'>
      <form onSubmit={handleSubmit} className="searchBar">
          <input type="text" 
            className="searchTerm"
            value={name} 
            placeholder={props.label} 
            onChange={(e) => setName(e.target.value)} />
          <input type="submit" className="searchButton" value='Search'/>
      </form>
      {name && <Suggestion suggestions={suggestion} navigateTo={`${props.navigateTo}${props.isMentorMe ? '/individualProfile' : '/commentsDisplay'}`} />} 
    </div>
  )
}

export default SearchBar