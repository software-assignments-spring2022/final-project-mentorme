import React from "react"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/Search.css"

const SearchBar = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(props.navigateTo)
    }
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