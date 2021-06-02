import React from "react";
import { Link } from 'react-router-dom';
import '../css/Front.css';
import carouselimg from '../Images/students.jpg';
import c1 from '../Images/c1.png';
import c2 from '../Images/c2.png';
import c3 from '../Images/c3.png';



function Front() {
    return(
      <div>
        <Link to="/Login">Login page link</Link>
        <section className="navbarcolor">
          <div className="container-fluid">
        
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="">College Forum</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#Aboutus">AboutUs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactus">Contact us</a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link front_login_btn" href="#">Log in</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>

        <section className="carousel_container">
          <div className="carousel slide z-depth-1-half" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 ig" src={c3} alt="First slide"/>
                <button className="reg_btn">Register</button>
              </div>
          
              <div className="carousel-item">
                <img className="d-block w-100 ig" src={c1} alt="Second slide"/>
                <button className="reg_btn">Register</button>

              </div>
          
              <div className="carousel-item">
                <img className="d-block w-100 ig" src={c2} alt="Third slide"/>
                <button className="reg_btn">Register</button>

              </div>
            </div>
          
            <a className="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    );
}
export default Front;

 {/* </section> */}

       
     {/* <div id="carouselmove" class="carousel slide" data-ride="false">
       <div className="carousel-inner" data-interval="3000">
         <div className="carousel-item active ">
         <div className="carousel-caption carousel-content">
                 <h1>WELCOME</h1>
                 <h1>to</h1>
                 <h1>COLLEGE FORUM</h1>
                 <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
                 <button type="button" class="btn btn-info btn-lg">Login</button>
              </div>
         <img src={carouselimg} alt="profile"/>
         
         </div>
      
     
         <div className="carousel-item  ">
         <div className="carousel-caption carousel-content">
                 <h1>WELCOME</h1>
                 <h1>to</h1>
                 <h1>COLLEGE FORUM</h1>
                 <button type="button" class="btn btn-primary">Sign Up</button>
                 <button type="button" class="btn btn-info">Login</button>
              </div>
         <img src={carouselimg} alt="profile"/>
         
         </div>
         <div className="carousel-item  ">
         <div className="carousel-caption carousel-content">
                 <h1>WELCOME</h1>
                 <h1>to</h1>
                 <h1>COLLEGE FORUM</h1>
                 <button type="button" class="btn btn-primary">Sign Up</button>
                 <button type="button" class="btn btn-info">Login</button>
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
</div> */}