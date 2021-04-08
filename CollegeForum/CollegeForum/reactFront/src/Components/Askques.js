import React from "react";
import poster from "./Images/ASKQ.png";
function Aques() {
    return(
        <div className="askcard">
       
        <img className="img-ask" src={poster} alt="kubkb"/>
        <div className="form-group">
        <label>Write your Question below</label>
        <textarea  className="form-control input-style" rows="2" maxLength="1000" required></textarea>
    </div>
        
        <div className="row">
        <div className="col-lg-6">
        <div className="dropdown">
        <button type="button" className="btn btn-primary btn-lg ask-btn-1">Select your institute</button>
  <div className="dropdown-content">
    <a href="#knkjn">SVIIT</a>
    <a href="#iun">SVIM</a>
    <a href="#unn">SVIL</a>
  </div>
        </div>
        </div>
       <div className="col-lg-6">  <button type="button" className="btn btn-primary btn-lg ask-btn-2">Ask Question</button></div>

</div>
        


</div>
    );
}
export default Aques;