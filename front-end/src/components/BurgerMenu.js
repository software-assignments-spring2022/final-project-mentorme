import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import "../styles/BurgerMenu.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"


const BurgerMenu = () => {
    const location = useLocation()
    const [userData, setUserData] = useState([{}]);
    const [error, setError] = useState('')
    let menu;
    const onLinkClick = (e) => {
        // e.preventDefault();
        menu = false
        console.log(menu);
        async function sendGetRequest() {
            const res = await axios.get("http://localhost:4000/userinfo", {
                params: {
                    auth: "reset"
                }
            });
            console.log("here:" + res.data.name)
        }
        sendGetRequest();

    };


    useEffect(async () => {
        const fetchData = async () => {
            await axios.get("http://localhost:4000/userinfo")
                .then(response => setUserData(response.data))
                .catch(err => {
                    console.log("err", err)
                    setError(err)
                }
                )
        }

        fetchData()
    }, [])

    console.log(userData.auth);
    menu = userData.auth;
    if (menu) {
        return (
            <Menu>
                <a id="home" className='home' state={{ loggedOut: false }} href='/'>Home</a>
                <a id='mentorMe' className='mentorMe' href='/mentorMe'>MentorMe</a>
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
