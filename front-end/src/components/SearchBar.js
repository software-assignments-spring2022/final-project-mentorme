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

  // mock data
  // if fetching from mockaroo fails because of free account limit,
  // this mock data will be used
  const mockData = [{
    "id": 1,
    "first_name": "Mayer",
    "last_name": "Ballentime",
    "school": "Skynoodle",
    "department": "Human Resources",
    "score": 0.7
  }, {
    "id": 2,
    "first_name": "Margo",
    "last_name": "Vigietti",
    "school": "Dabtype",
    "department": "Engineering",
    "score": 1.2
  }, {
    "id": 3,
    "first_name": "Daveta",
    "last_name": "Ochterlony",
    "school": "Izio",
    "department": "Legal",
    "score": 3.4
  }, {
    "id": 4,
    "first_name": "Elyssa",
    "last_name": "Ayling",
    "school": "Edgeclub",
    "department": "Accounting",
    "score": 2.5
  }, {
    "id": 5,
    "first_name": "Joela",
    "last_name": "Thing",
    "school": "Kazu",
    "department": "Legal",
    "score": 2.8
  }]
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState(mockData)
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(props.navigateTo, {state:{name:name}})
  }

  {/* get suggestions from backend */}
  useEffect(async () => {
    await axios.get("https://api.mockaroo.com/api/4b0b0f90?count=10&key=de852b30")
      .then(res => {
        setSuggestion(res.data);
      })
      .catch(err => {
        console.log(`Failure. ${err}`);
        console.log('mock data is being used.');
        setSuggestion(mockData);
      })
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