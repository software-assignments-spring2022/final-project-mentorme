import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import { useSignupUserMutation } from "../services/appApi";
import { Link, navigate, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'

import "../styles/SignUp.css"
import SignUpForm from "../components/SignUpForm"
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
import peppa from "../images/3-peppa.jpeg";
import axios from 'axios'





function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');

  const navigate = useNavigate();
  // const [signupUser, { isLoading, error }] = useSignupUserMutation();

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      return alert("Max file size is 1mb");
    }
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'mentormesignup');
    try {
      setUploadingImg(true);
      // let res - await fetch('https://api.blah.com/getUser/:id')
      // params - get the id
      // call mogoDb -. Model - user
      //user.find({id: Incomingid})
      let res = await fetch("https://api.cloudinary.com/v1_1/lijie1230/image/upload", {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }

  }
  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert('Please upload your profile picture');
    const url = await uploadImage(image);
    console.log(url);
    // signupUser({ name, email, password, picture: url }).then(({ data }) => {
    //   if (data) {
    //     console.log(data);
    //     navigate("/mentorMe")
    //   }
    // });
    try {
      axios
        .post("http://localhost:4000/users/signup", {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
          school: school,
          picture: url,
          bio: bio
        })
        .then((response) => {

          console.log(response.data);

          if (response.data.auth) {


            async function sendGetRequest() {
              const res = await axios.get("http://localhost:4000/userinfo", {
                params: {
                  auth: false,
                  first_name: response.data.user.first_name,
                  last_name: response.data.user.last_name,
                  bio: response.data.user.bio,
                  email: response.data.user.email,
                  pic: response.data.user.picture,
                  id: response.data.user.id
                }
              });
              console.log("here:" + res.data._id)
            }
            sendGetRequest();

            navigate('/mentorMe')
          }
          else {
            alert("Account Failure, try again!");

          }
        })
      // localStorage.setItem('email', email);
      // localStorage.setItem('password', password);
    } catch (error) {
      console.log(error);
    }
  }

  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);


  return (
    // <div className="SignUp">
    //   <BurgerMenu/>
    //   <SignUpForm/>
    // </div>

    <Container>

      <BurgerMenu />
      <Row className="loginPage">
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center"> Create account</h1>
            <div className="signup-profile-pic__container">
              <img src={imagePreview || peppa} className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fa fa-plus-circle add-picture-icon"></i>

                {/* <i className="fa-solid fa-circle-plus add-picture-icon"></i> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-plus image-upload-label" /> */}
              </label>
              <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">

              <Form.Label> First Name</Form.Label>
              <Form.Control type="text" placeholder="Your first name" onChange={(e) => setFirstName(e.target.value)} value={first_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">

              <Form.Label> Last Name</Form.Label>
              <Form.Control type="text" placeholder="Your last name" onChange={(e) => setLastName(e.target.value)} value={last_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCollege">

              <Form.Label> College</Form.Label>
              <Form.Control type="text" placeholder="Your school" onChange={(e) => setSchool(e.target.value)} value={school} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">



              <Form.Label> Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCollege">

              <Form.Label> Bio </Form.Label>
              <Form.Control type="text" placeholder="Tell me something about yourself..." onChange={(e) => setBio(e.target.value)} value={bio} />
            </Form.Group>


            {/* <Link to="/mentorMe"><Button className="btn--logIn" type="submit">Sign Up</Button></Link> */}
            <Button className="btn--logIn" type="submit">{uploadingImg ? "Signing up..." : "Sign Up"}</Button>

            {/* </Link><Button variant="primary" type="submit">Login</Button> */}
            <div className="pu=4">
              <p className="text-center">Already have an account? <Link to="/login" className="signupLink">Login!</Link></p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>

      </Row>
    </Container >


  );
}

export default SignUp