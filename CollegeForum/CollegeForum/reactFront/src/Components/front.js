import React from "react";
// import { Link } from 'react-router-dom';
import Navbar from "./CommonFiles/Navbar"
import '../css/Front.css';
import carouselimg from '../Images/students.jpg';
function Front() {
    return(
      <div>
        <Navbar/>
              
        <section>
      
          <div id="carouselmove" className="carousel slide" data-ride="false">
            <div className="carousel-inner" data-interval="3000">
              <div className="carousel-item active ">
                <div className="carousel-caption carousel-content">
                  <h1>WELCOME</h1>
                  <h1>to</h1>
                  <h1>COLLEGE FORUM</h1>
                  <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
                  <button type="button" className="btn btn-info btn-lg">Login</button>
                </div>
                <img src={carouselimg} alt="profile"/>
              
              </div>
            
          
              <div className="carousel-item  ">
                <div className="carousel-caption carousel-content">
                  <h1>WELCOME</h1>
                  <h1>to</h1>
                  <h1>COLLEGE FORUM</h1>
                  <button type="button" className="btn btn-primary">Sign Up</button>
                  <button type="button" className="btn btn-info">Login</button>
                </div>
                <img src={carouselimg} alt="profile"/>
              
              </div>

              <div className="carousel-item  ">
                <div className="carousel-caption carousel-content">
                  <h1>WELCOME</h1>
                  <h1>to</h1>
                  <h1>COLLEGE FORUM</h1>
                  <button type="button" className="btn btn-primary">Sign Up</button>
                  <button type="button" className="btn btn-info">Login</button>
                </div>
              <img src={carouselimg} alt="profile"/>
              
              </div>
            </div>
          
            <a className="carousel-control-prev" href="#carouselmove" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>

            <a className="carousel-control-next" href="#carouselmove" role="button" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        
        </section>    
      </div>
    );
}
export default Front;