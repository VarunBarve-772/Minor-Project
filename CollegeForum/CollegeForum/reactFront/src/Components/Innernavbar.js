import React from "react";
import '../css/Innernavbar.css';
function Innernavbar() {
    return(
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
          <a className="nav-link" href="#footer">AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cta">SignOut</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</section>
    );
}

export default Innernavbar;
