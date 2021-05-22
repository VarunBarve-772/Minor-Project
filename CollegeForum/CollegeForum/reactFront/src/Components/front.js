import React from "react";
import { Link } from 'react-router-dom';
import '../css/Front.css';
import carouselimg from '../Images/students.jpg';
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
               </ul>
             </div>
           </nav>
         </div>
       </section>
      
       <section>
       
     <div id="carouselmove" class="carousel slide" data-ride="false">
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
     </div>
     
     </section>
     
     </div>
          
     
    );
}
export default Front;