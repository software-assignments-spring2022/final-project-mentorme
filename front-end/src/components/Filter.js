import React from "react"
import { useState, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Filter.css"


/*
Filter takes 'options' that is an array of options in the filter list
"navigateTo" refering the page to navigate after clicking apply
"setSelections" handles each option selection and de-selection
*/

const Filter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);

  const handleFilterClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option) => {
    const isSelected = selected.includes(option);
    /* If the option has already been selected, we remove it from the array. */
    /* Otherwise, we add it. */ 
    const newSelection = 
      isSelected ? selected.filter(current => current !== option) : [...selected, option];
    setSelected(newSelection);
    props.setSelections(newSelection)
    // console.log(newSelection);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target);
      const isButtonClick = buttonRef.current && buttonRef.current.contains(event.target);
  
      if (isDropdownClick || isButtonClick) {
      /* If the ref is not defined or the user clicked on the menu, we don’t do anything. */
        return;
      }
      /* Otherwise we close the menu. */    
      setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside); /* handle desktops */
    document.addEventListener("touchstart", handleClickOutside); /* handle touch devices */

    /* Event cleanup */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); /* handle desktops */
      document.removeEventListener("touchstart", handleClickOutside); /* handle touch devices */
    };}, [dropdownRef, buttonRef]);
  
  return (
    <div className='filterMain'>
      <button ref={buttonRef} onClick={handleFilterClick} className='filterButton'>Filter</button>
      {isOpen && 
        <FilterDropdown 
          dropdownRef={dropdownRef}
          options={props.options}
          handleSelect={handleSelect}
          navigateTo={props.navigateTo}
          selected={selected}
        />}
    </div>
  );
}

/* props contains 'dropdownRef': the ref for dropdown memu 
'options': an array of options in the filter list
'handleSelect': to handle select checkbox
*/
const FilterDropdown = (props) => {
  const navigate = useNavigate();
  const handleApply = (event) => {
    event.preventDefault();
    navigate(props.navigateTo, {state:{filter:props.selected}})
    if (props.navigateTo == window.location.pathname){
      window.location.reload(false);
    }
  }
  return (
    <>
      <div ref={props.dropdownRef} className='filter_dropdown'>
        {props.options.map((option, i, optionArray) => (
          <FilterItems name={option} handleSelect={props.handleSelect} key={i} checked={props.selected.includes(option)}/>
        ))}
        {/* <div className="filter_dropdown_actions">
          <button className="filter_dropdown_button" onClick={handleApply}>Apply</button>
        </div> */}
      </div>
    </>
  )
}

/* props contains 'handleSelect': to handle select checkbox
  "checked" specifies if the box is checked
*/
const FilterItems = (props) => {
  return (
    <>
    <div>
      <label>
        <input className='itemBox' type="checkbox" onChange={(e) => props.handleSelect(props.name)} checked={props.checked} />
        {props.name}
      </label>
    </div>
    </>
  )
}
export default Filter