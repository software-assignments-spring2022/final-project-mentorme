import React from "react"
import { Link } from "react-router-dom"
import "./styles/UserProfile.css"




const UserProfile = props => {
  return (
    <div className="UserProfile">
      <h1>User's Name</h1>
      <img src="https://picsum.photos/200/300/"/>
      <section className="main-content">
      <br />
        <p>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, 
          id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci 
          aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh 
          imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit
          ultrices. Pellentesque pretium tincidunt tellus eu accumsan. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Vestibulum ac ante vel arcu posuere hendrerit. Nam suscipit 
          ligula nec lectus varius accumsan. Aliquam a orci eget ex gravida consequat sit amet quis urna.
          Praesent ut nisl nec nunc imperdiet pharetra.
          <br />
          <br />
        </p>
        <Link to="/mentorme"><button type="button"> Return </button></Link>
      </section>
    </div>
  )
}



export default UserProfile