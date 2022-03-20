import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import "../styles/BurgerMenu.css"
import {CgMenuRound} from "react-icons/cg"
import { useState } from 'react'
import Button from "./Button"

const BurgerMenu = () =>{
    const [open,setOpen] = useState(false);
    return (
        <nav className='Menu'>
            <CgMenuRound className= "Burger" size = "40px" color="white" 
            
            onClick= {()=> setOpen(!open)}/>
        {open && <ul>
            <li> 
                <a href = "/"><Button>Home</Button></a>
            </li>
            <li> 
                <a href = "/mentorMe"><Button>MentorMe</Button></a>
            </li>
            <li> 
                <a href = "/rateAdvisor"><Button>Advisor</Button></a>
            </li>
            <li> 
                <a href = "/signUp"><Button>SignUp</Button></a>
            </li>
            <li> 
                <a href = "/logIn"><Button>LogIn</Button></a>
            </li>
        </ul>}

        </nav>
        
    );
}

export default BurgerMenu
