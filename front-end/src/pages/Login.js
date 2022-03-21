import React from "react";
import "../styles/Login.css"
import LoginForm from "../components/LoginForm"
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
const Login =()=>{
    // const [user,setUser] = useState({email:"",password:""});
    // const [error,setError] = useState("");
      
    return (
          <div className="Login">
            <BurgerMenu/>
            <LoginForm/>
          </div>
          
    
      );
    }

  export default Login