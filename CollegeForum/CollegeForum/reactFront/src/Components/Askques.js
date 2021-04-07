import React from "react";
import poster from "./Images/ASKQ.png";
function Aques() {
    return(
        <div className="askcard">
       
        <img className="img-ask" src={poster}/>
        <div className="form-group">
        <label>Write your Question below</label>
        <textarea  className="form-control input-style" rows="2" maxlength="1000" required></textarea>
    </div>
        
        <div className="row">
        <div className="col-lg-6">
        <div class="dropdown">
        <button type="button" class="btn btn-primary btn-lg ask-btn-1">Select your institute</button>
  <div class="dropdown-content">
    <a href="#">SVIIT</a>
    <a href="#">SVIM</a>
    <a href="#">SVIL</a>
  </div>
        </div>
        </div>
       <div className="col-lg-6">  <button type="button" class="btn btn-primary btn-lg ask-btn-2">Ask Question</button></div>

</div>
        


</div>
    );
}
export default Aques;