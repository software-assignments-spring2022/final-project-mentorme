import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/SearchBar.css"
import axios from 'axios'

const SearchBar = (props) => {

  const mock = [{
    "id": 1,
    "first_name": "Joella",
    "last_name": "Newey",
    "school": "Einti",
    "department": "Product Management"
  }, {
    "id": 2,
    "first_name": "Darren",
    "last_name": "Witchard",
    "school": "Youfeed",
    "department": "Research and Development"
  }, {
    "id": 3,
    "first_name": "Ogdon",
    "last_name": "Twelvetrees",
    "school": "Topdrive",
    "department": "Business Development"
  }]

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState(mock)
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(props.navigateTo)
  }

  {/* get suggestions from backend */}
  useEffect(async () => {
    const response = await axios("https://api.mockaroo.com/api/4b0b0f90?count=10&key=de852b30")
      .then(res => {
        console.log("Success.");
        const data = response.data;
        setSuggestion(data);
      })
      .catch(err => {
        console.log(`Failure. ${err}`);
      })
      console.log(suggestion);
  }, [name])

  return (
    <form onSubmit={handleSubmit}>
      <label>{props.label}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value='Search'/>
      </label>
    </form>
  )
}

export default SearchBar