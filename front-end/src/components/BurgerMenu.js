import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import "../styles/BurgerMenu.css"

const BurgerMenu = () => {

    return (
        <Menu>
            <a id="home" className='home' href='/'>Home</a>
            <a id='mentorMe' className='mentorMe' href='/mentorMe'>MentorMe</a>
            <a id='rateAdvisor' className='rateAdvisor' href='/rateAdvisor'>RateMyAdvisor</a>
            <a id='logIn' className='logIn' href='/logIn'>Log In</a>
            <a id='signUp' className='signUp' href='/signUp'>Sign Up</a>
        </Menu>
    )

        ;
}

export default BurgerMenu;
