import React from "react";
import "../styles/SignUp.css"
import SignUpForm from "../components/SignUpForm"
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
const SignUp =()=>{
    // const [user,setUser] = useState({email:"",password:""});
    // const [error,setError] = useState("");
      
    return (
          <div className="SignUp">
            <BurgerMenu/>
            <SignUpForm/>
          </div>
          
    
      );
    }

  export default SignUp