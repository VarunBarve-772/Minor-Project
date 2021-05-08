import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ShowQuestions from './Question/ShowQuestions';
import '../css/Home.css';
// import poster from "./Images/logo.png";
function Home(props) {

  const [questionCategory, setQuestionCategory] = useState('SVIIT');
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
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="sec-2">
          <input type="text" className="ques_input"/>
          <button className="search_btn"><i className="fa fa-search" aria-hidden="true"></i></button>

          <div className="drop_down">
            <button className="dropbtn">Category 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="drop_down-content">
              <div className="header">
                <h3 className="cat_heading">categories</h3>
              </div>   
              <div className="row">
                <div className="column">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-3">
          <ShowQuestions questionCategory={ questionCategory } />
        </div>

      </div>

    );
}

export default Home;