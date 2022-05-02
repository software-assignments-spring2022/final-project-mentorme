import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/SearchBar.css"
import axios from 'axios'
import Suggestion from "./Suggestion";
import Filter from "./Filter"

/*
   props has attributes 'label' refering the str showing in the search bar, 
  'naviageTo' is the page where the user will be directed to,
  and 'isMentorMe' specifies the search bar is used in MentorMe or RateMyAdvisor,
  filterOptions is an array containing all options
*/
  
const SearchBar = (props) => {

  // temporary data
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState([])
  const [options, setOptions] = useState([])  // the filter options that are selected
  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.isMentorMe){
      navigate(props.navigateTo, {state:{name: name, options, userID}})
    }else{
      navigate(props.navigateTo, {state:{name: name, options}})
    }
  }

  let userID = props.userID
  // a function to pass down to Filter component to record options that are selected
  // so these options can be passed to backend for filtering
  const setSelections = (selections) => {
    setOptions(selections)
  }

  {/* get suggestions from backend */}
  useEffect(async () => {
    // fetch from different data based on where this search bar is located
    // fetch mentors data
    if (props.isMentorMe) {
      await axios.get("http://147.182.129.48:4000/mentorMe/profileDisplay/", { params: { name, options, userID } })
      .then(res => {
        setSuggestion(res.data);
      })
      .catch(err => {
        console.log("cannot get backend suggestions. err.")
      })
    } else {  // fetch advisors data
      await axios.get("http://147.182.129.48:4000/rateAdvisor/searchResult/", { params: { name, options } })
        .then(res => {
          setSuggestion(res.data);
        })
        .catch(err => {
          console.log("cannot get backend suggestions. err.")
        })
    }
  }, [name, options])

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
      {name && suggestion.length !== 0 && <Suggestion suggestions={suggestion} navigateTo={`${props.navigateTo}${props.isMentorMe ? '/individualProfile' : '/commentsDisplay'}`} />} 
      <Filter options={props.filterOptions} setSelections={setSelections}/>
    </div>
  )
}

export default SearchBar