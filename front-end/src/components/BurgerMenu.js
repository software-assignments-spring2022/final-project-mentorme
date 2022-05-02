import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import "../styles/BurgerMenu.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"


const BurgerMenu = ({ user }) => {
    const location = useLocation()
    const [userData, setUserData] = useState([{}]);
    const [error, setError] = useState('')
    let menu;

    if (location.state){
        var {user} = location.state
        console.log("in if statement")
        menu = true;
    }
    else{
        menu = false;
    }

    console.log(user)

    

    const onLinkClick = (e) => {
    //     // e.preventDefault();
        menu = false
        console.log(menu);
        localStorage.clear()
    };

    const loggedUser = localStorage.getItem('user')

    // console.log(userData.auth);
    // menu = userData.auth;
    console.log(menu)
    if (loggedUser) {
        return (
            <Menu>
                <a id="home" className='home' state={{ loggedOut: false }} href='/'>Home</a>
                {/* <a id='mentorMe' className='mentorMe' state={{ user: user }} href='/mentorMe'>MentorMe</a> */}
                <Link to="/mentorMe" state={ { user } }>MentorMe</Link>
                <a id='rateAdvisor' className='rateAdvisor' href='/rateAdvisor'>RateMyAdvisor</a>
                <a id='logOut' className='logOut' href='/login' onClick={onLinkClick}>Log Out</a>



            </Menu>
        )
    }
    else {
        return (
            <Menu>
                <a id="home" className='home' state={{ loggedOut: true }} href='/'>Home</a>
                <a id='mentorMe' className='mentorMe' href='/logIn'>MentorMe</a>
                <a id='rateAdvisor' className='rateAdvisor' href='/rateAdvisor'>RateMyAdvisor</a>
                <a id='logIn' className='logIn' href='/logIn'>Log In</a>
                <a id='signUp' className='signUp' href='/signUp'>Sign Up</a>

            </Menu>
        )
    }


    ;
}

export default BurgerMenu;
