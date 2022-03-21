import React from "react";
import {useEffect,useState} from 'react';
import "../styles/LoginForm.css"
import Button from "../components/Button"
import BurgerMenu from "../components/BurgerMenu";
import {Link} from "react-router-dom";
function LoginForm({Login,error}) {
    const[details,setDetails] = useState({email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
        
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                
                <h2> LogIn</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type= "email" name="email" id="email" onChange={e=>setDetails({...details,email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" name="password" id="password" onChange={e=>setDetails({...details,password: e.target.value})} value={details.password}></input>
                </div>
                <Link to = "/mentorMe"><Button id = " Login" type="submit" >LogIn</Button></Link>
                <p>Don't have an account, sing up for it!</p>
                <Link to = "/signUp"><Button id = " SignUp" type="submit" >Sign Up</Button></Link>
            </div>
        </form>
    )

};

export default LoginForm