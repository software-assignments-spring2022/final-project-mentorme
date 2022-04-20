import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"
// import LoginForm from "../components/LoginForm"
// import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
import axios from 'axios'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  // const [loginUser, { isLoading, error }] = useLoginUserMutation();
  let session = null;
  function handleLogin(e) {
    e.preventDefault();
    // loginUser({ email, password }).then(({ data }) => {
    //   if (data) {
    //     //socket work
    //     //navigate to the chat
    //     console.log(data);
    //     session = data;
    //     console.log(session.name);

    //     navigate('/mentorMe');

    //   }
    // })
    try {
      axios
        .post("http://localhost:4000/users/signin", {
          email: email,
          password: password,
        })
        .then((response) => {

          console.log(response.data);

          if (response.data.auth) {
            axios.post("http://localhost:4000/userinfo", { pic: response.data.user.picture }).then(response => response.data);
            navigate('/mentorMe', { state: { user: response.data.user } });
          }
          else {
            alert("Wrong password or email, try again!");

          }
        });
      // localStorage.setItem('email', email);
      // localStorage.setItem('password', password);
      // if (user) {
      //   navigate('/mentorMe');
      // }
    } catch (error) {
      console.log(error);
    }

  }

  return (

    // <div className="Login">
    //   <BurgerMenu/>
    //   <LoginForm/>
    // </div>
    <Container>
      <BurgerMenu />

      <Row className="loginPage">
        <Col md={5} className="login__bg"></Col>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label> Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />

            </Form.Group>

            {/* <Link to="/mentorMe"><Button className="btn--logIn" type="submit">Login</Button></Link> */}
            <Button className="btn--logIn" type="submit">Login</Button>

            {/* </Link><Button variant="primary" type="submit">Login</Button> */}
            <div className="pu=4">
              <p className="text-center">Don't have an account? <Link to="/signUp" className="signupLink">Sign Up!</Link></p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container >


  );
}

export default Login