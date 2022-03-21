import React from "react";
import {useEffect,useState} from 'react';
import "../styles/SignUpForm.css"
import Button from "../components/Button"
import BurgerMenu from "../components/BurgerMenu";
import {Link} from "react-router-dom";
function SignUpForm({SignUp,error}) {
    const[details,setDetails] = useState({name:"",email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        SignUp(details);
    }
    return(
        
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                
                <h2> Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type= "text" name="name" id="name" onChange={e=>setDetails({...details,name: e.target.value})} value={details.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="college">College:</label>
                    <input type= "text" name="college" id="college" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="school year">School Year:</label>
                    <input type= "text" name="school year" id="school-year" ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type= "email" name="email" id="email" ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" name="password" id="password" onChange={e=>setDetails({...details,password: e.target.value})} value={details.password}></input>
                </div>
                
                <Link to = "/mentorMe"><Button id = " SignUp" type="submit" value="LOGIN">SignUp</Button></Link>
            </div>
        </form>
    )

};

export default SignUpForm