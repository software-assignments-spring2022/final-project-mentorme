import React from "react"
import { useState, useEffect } from "react";
import "../styles/Filter.css"

// still working on this... documentation will be updated later
const Filter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterClick = (event) => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <>
      <button onClick={handleFilterClick}>Filter</button>
      {isOpen && <FilterDropdown />}
    </>
  );
}

const FilterDropdown = (props) => {
  return (
    <>
      <div className='filter_dropdown'>
        123
        <div className="filter_dropdown_actions">
          ‍               <button classname="filter_dropdown_button">Apply</button>
        </div>
      </div>
    </>
  )
}

export default Filter