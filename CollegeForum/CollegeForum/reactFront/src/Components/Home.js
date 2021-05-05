import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Home.css';
// import poster from "./Images/logo.png";
function Home(props) {

  let history = useHistory();

  const userLogout = () => {
    props.setUserId('');
    sessionStorage.clear();
    history.push('/');
  }

    return(
<div>

  <div className="sec-1" >
    <div className="row">
      <div className="col-lg-4">
      {/* <img className="logo-img" src={poster} alt="not found"/> */}
        <h1 className="title">College Forum</h1>
          
      </div>

      <div className="col-lg-8">
        <div className="topnav">
          <div className="topnav-right" >
            <Link className="ask" to="/AskQuestion">Ask a question</Link>
            <Link className="a" to="/ContactUs">Contact Us</Link>
            <Link className="a" to="/AboutUs">About Us</Link>
            <Link className="a" to="/Profile">Profile</Link>
            <button onClick={userLogout}>Logout</button>
            {/* <Link to="/Login">Logout</Link> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sec-2">
    <div className="row rowsec2">
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