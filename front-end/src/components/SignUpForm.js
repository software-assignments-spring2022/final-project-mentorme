import React from "react";
import { useState } from 'react';
import "../styles/SignUpForm.css"
import Button from "../components/Button"

import {Link} from "react-router-dom";

function SignUpForm({ SignUp,error }) {
    const[details,setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        SignUp(details);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                
                <h2> Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type= "text" name="name" id="name" onChange={e=>setDetails({...details,name: e.target.value})} value={details.name} placeholder='Lorem Ipsum'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="college">College:</label>
                    <input type= "text" name="college" id="college" placeholder="Lorem Ipsum University"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="school year">School Year:</label>
                    <input type= "text" name="school year" id="school-year" placeholder="Sophomore"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type= "email" name="email" id="email"placeholder="lorem.ipsum@gmail.com" ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" name="password" id="password" onChange={e=>setDetails({...details,password: e.target.value})} value={details.password} placeholder='********'></input>
                </div>
                
                <Link to = "/mentorMe"><Button id = " SignUp" type="submit" value="LOGIN">Sign Up</Button></Link>
            </div>
        </form>
    )

};

export default SignUpForm