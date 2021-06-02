import React from "react";
import Navbar from './CommonFiles/Navbar';

const About = (props) => {

  return(
    <div>
      <Navbar setUserId={ props.setUserId }/>

      <div className="about-card">
        <div className="about-sec-1">
          <h1>About Us</h1>
          <p>We are students</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <div className="about-sec-2">
          <h1>Our Team</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
      </div>
    </div>
  );
}

export default About;