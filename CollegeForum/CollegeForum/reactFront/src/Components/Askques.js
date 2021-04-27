import React from "react";
// import poster from "./Images/ASKQ.png";
import ask1 from "./Images/ask1.png";
import '../css/Askques.css';

function Aques() {

    return(
        <div className="askcard">       
            <img className="img-ask" src={ask1} alt="Please type your question below."/>
            <div className="form-group">
                {/* <label>Write your Question below</label> */}
                <textarea  className="form-control input-style" rows="6" maxLength="1000" required></textarea>
            </div>
        
            <div className="row">
                <div className="col-lg-6">
                    <div className="dropdown">
                        <button type="button" className="dropdown-toggle btn_toggle" data-toggle="dropdown" >Select your institute</button>
                        <div className="dropdown-content">
                            <a href="#knkjn">SVIIT</a>
                            <a href="#iun">SVIM</a>
                            <a href="#unn">SVIL</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="button" className="btn ask_btn">Publish question</button>
                </div>
            </div>
        </div>
    );
}

export default Aques;