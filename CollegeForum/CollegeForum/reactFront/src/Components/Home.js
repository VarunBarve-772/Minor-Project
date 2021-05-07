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
          <ShowQuestions questionCategory={ questionCategory } />
        </div>

      </div>

    );
}

export default Home;