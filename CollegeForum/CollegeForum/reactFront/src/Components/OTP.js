import React from 'react';
import {Link} from 'react-router-dom';

function OTP() {
    return(
        <div className="OTP-div">
    
   <h2>Account Verification!</h2>
 <h4> Enter the OTP we just send on your mobile phone. </h4>
    <div class="d-flex flex-row mt-5 otp-input-div">
        <input type="text" class="form-control input-otp" autofocus=""/>
        <input type="text" class="form-control input-otp"/>
        <input type="text" class="form-control input-otp"/>
        <input type="text" class="form-control input-otp"/>
        </div>
    
        <Link to="/Home" className="btn btn-primary otp-button">Verify</Link>
        {/* <button type="button" class="btn btn-primary otp-button">Verify</button> */}
        
        </div>
       
    );
  
}
export default OTP;