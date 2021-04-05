import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return(
<div class="">

  <div class="sec-1" >
    <div class="row">
      <div class="col-lg-4">
        <h1 class="title">College Forum</h1>
        {/* <img class="logo-img" src="..../public/Images/Varun.jpg" alt="not found"/>   */}
      </div>

      <div class="col-lg-8">
        <div class="topnav">
          <div class="topnav-right" >
            <a href="#Questions"> Ask Questions</a>
            <a href="#something">Answer Questions</a> 
            <a href="#about-us">About-us</a> 
            <a href="#profile">Update Profile</a>
            <Link to="/Login">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sec-2">
    <div class="row">
      <div class="col-sm-2 sec-2-col text-center">
        <a href="#general" active >General</a>
      </div>

      <div class="col-sm-2 sec-2-col text-center">
        <a href="#computer science">Computer Science</a>
      </div>

      <div class="col-sm-2 sec-2-col text-center">
        <a href="#information technology">Information Technology</a>
      </div>

      <div class="col-sm-2 sec-2-col text-center">
        <a href="#mechanical">Mechanical</a>
      </div>

      <div class="col-sm-2 sec-2-col text-center">
        <a href="#civil">Civil</a>
      </div>

      <div class="col-sm-2 sec-2-col text-center">
        <a href="#electronics">Electronics</a>
      </div>
    </div>
  </div>

  <div class="sec-3">
    <div class="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div class="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div class="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>

    <div class="sec-3-div">
      <h6>How i can fill academic fees through erp?</h6>
      <p>Go to google and search for svv erp then login to it after that go to academics you will find an option for fees deposit.</p>
    </div>
  </div>

</div>

    );
}

export default Home;