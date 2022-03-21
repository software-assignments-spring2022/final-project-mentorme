import React from "react"
import { Link } from "react-router-dom"
import "../styles/IndividualProfile.css"
import BurgerMenu from "../components/BurgerMenu";

const IndividualProfile = props => {
  return (
    <div className="IndividualProfile">
      <BurgerMenu/>
      <section className="main-content">
        <img className="resize" src='https://picsum.photos/200' alt="picture" />
        <h1>User's Name</h1>
        <br/>
        <Link to="/individualChat"><button type="button" className="chatButton"> Chat </button></Link>
        <p>
          <br/>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, 
            id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci 
            aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh 
            imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit
            ultrices. Pellentesque pretium tincidunt tellus eu accumsan. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Vestibulum ac ante vel arcu posuere hendrerit. Nam suscipit 
            ligula nec lectus varius accumsan. Aliquam a orci eget ex gravida consequat sit amet quis urna.
            Praesent ut nisl nec nunc imperdiet pharetra.
          </div>
        </p>
        <Link to="/mentorme/ProfileDisplay"><button type="button"> Return </button></Link>
      </section>
    </div>
  )
}



export default IndividualProfile