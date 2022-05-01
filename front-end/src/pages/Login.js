import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"
import BurgerMenu from "../components/BurgerMenu";
import axios from 'axios'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userAuth, setUserAuth] = useState(false);
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:4000/users/signin", {
          email: email,
          password: password,
        })
        .then((response) => {

          console.log(response.data);
          setUserAuth(true);


          if (response.data.auth) {


            async function sendGetRequest() {
              const res = await axios.get("http://localhost:4000/userinfo", {
                params: {
                  auth: false,
                  first_name: response.data.user.first_name,
                  last_name: response.data.user.last_name,
                  email: response.data.user.email,
                  pic: response.data.user.picture,
                  id: response.data.user._id,
                  bio: response.data.user.bio
                }
              });
              console.log("here:" + res.data.user._id)
            }
            sendGetRequest();
            
            navigate('/mentorMe', { state: { user: response.data.user } });
          }

        });
    } catch (error) {
      console.log(error);
    }


  }

  return (
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

            <Button className="btn--logIn" type="submit">Login</Button>

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