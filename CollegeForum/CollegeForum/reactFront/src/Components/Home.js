import React from 'react';
import { Link } from 'react-router-dom';
import poster from "./Images/logo.png";
function Home() {
    return(
<div className="">

  <div className="sec-1" >
    <div className="row">
      <div className="col-lg-4">
      {/* <img className="logo-img" src={poster} alt="not found"/> */}
        <h1 className="title">College Forum</h1>
          
      </div>

      <div className="col-lg-8">
        <div className="topnav">
          <div className="topnav-right" >
            <Link to="/AskQuestion">Ask A Question</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="#something">Profile</Link>
            <Link to="/Login">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sec-2">
    <div className="row">
      <div className="col-sm-2 sec-2-col text-center">
        <a href="#general" >General</a>
      </div>

      <div className="col-sm-2 sec-2-col text-center">
        <a href="#computer science">Computer Science</a>
      </div>

      <div className="col-sm-2 sec-2-col text-center">
        <a href="#information technology">Information Technology</a>
      </div>

      <div className="col-sm-2 sec-2-col text-center">
        <a href="#mechanical">Mechanical</a>
      </div>

      <div className="col-sm-2 sec-2-col text-center">
        <a href="#civil">Civil</a>
      </div>

      <div className="col-sm-2 sec-2-col text-center">
        <a href="#electronics">Electronics</a>
      </div>
    </div>
  </div>

  <div className="sec-3">
    <div className="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div className="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div className="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div className="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>
  </div>

</div>

    );
}

export default Home;